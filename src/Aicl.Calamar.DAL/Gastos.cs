using Aicl.Calamar.Modelos;
using ServiceStack.OrmLite;
using ServiceStack.Common;
using System;
using Mono.Linq.Expressions;
using Cayita.Tools;


namespace Aicl.Calamar.DAL
{
	public static class Gastos
	{
		public static void CreateTable(RepositoryProxy proxy, bool overwrite)
		{
			proxy.DbCmd.CreateTable<Gasto>(overwrite);
		}
		
		public static Gasto Crear(RepositoryProxy proxy , CrearGasto gasto)
		{
			if(!gasto.Fecha.HasValue) gasto.Fecha= DateTime.Today;

			var c = new Gasto();
			c.PopulateWith(gasto);

			proxy.BeginDbTransaction();
			proxy.DbCmd.InsertAndAssertId(c);

			ActualizarSaldos (proxy, c);

			proxy.CommitDbTransaction();
			return c;
		}

		public static DALResponse<Gasto> Obtener(RepositoryProxy proxy, ObtenerGastos gasto,Pager paginador)
		{
			long? totalCount=null;

			var visitor = ReadExtensions.CreateExpression<Gasto>();
			var predicate = PredicateBuilder.True<Gasto>();


			if(gasto.FechaDesde.HasValue){
				if(!gasto.FechaHasta.HasValue) gasto.FechaHasta=gasto.FechaDesde;
				predicate= q=>q.Fecha>=gasto.FechaDesde.Value && q.Fecha<=gasto.FechaHasta;
			}

			visitor.Where(predicate);

			if(paginador.PageNumber.HasValue)
			{
				totalCount= proxy.DbCmd.Count(predicate);
				int rows= paginador.PageSize.HasValue? paginador.PageSize.Value:DAL.PageSize;
				visitor.Limit(paginador.PageNumber.Value*rows, rows);
			}

			var response = new DALResponse<Gasto>();
			response.Result= proxy.DbCmd.Select(visitor);
			response.TotalCount= totalCount;
			return response;
		}


		public static Gasto Actualizar(RepositoryProxy proxy , ActualizarGasto gasto)
		{	
			var c = new Gasto();
			c.PopulateWith(gasto);
			proxy.BeginDbTransaction();
			ActualizarSaldosAlBorrar(proxy, gasto.Id);
			ActualizarSaldos(proxy, c );
			proxy.DbCmd.UpdateOnly(c, f=> new {f.Descripcion, f.Beneficiario, f.Valor, f.IdFuente, f.IdConcepto}, f=> f.Id==gasto.Id);
			proxy.CommitDbTransaction();
			return proxy.DbCmd.FirstOrDefault<Gasto>(f=>f.Id== gasto.Id);
		}
		
		public static void Borrar(RepositoryProxy proxy , BorrarGasto gasto)
		{
			proxy.BeginDbTransaction();

			ActualizarSaldosAlBorrar(proxy, gasto.Id);
			proxy.DbCmd.Delete<Gasto>(f=>f.Id==gasto.Id);

			proxy.CommitDbTransaction();

		}

		static void ActualizarSaldos (RepositoryProxy proxy, Gasto gasto)
		{
			var concepto = proxy.DbCmd.First<Concepto> (f => f.Id == gasto.IdConcepto);
			concepto.Acumulado += gasto.Valor;
			proxy.DbCmd.UpdateOnly (concepto, f => new {
				f.Acumulado
			}, f => f.Id == gasto.IdConcepto);
			var fuente = proxy.DbCmd.First<Fuente> (f => f.Id == gasto.IdFuente);
			fuente.Salidas += gasto.Valor;
			proxy.DbCmd.UpdateOnly (fuente, f => new {
				f.Salidas
			}, f => f.Id == gasto.IdFuente);
		}

		static void ActualizarSaldosAlBorrar (RepositoryProxy proxy , int id)
		{
			var oldGasto= proxy.DbCmd.First<Gasto>(f=>f.Id==id);

			var concepto = proxy.DbCmd.First<Concepto>(f=>f.Id== oldGasto.IdConcepto);
			concepto.Acumulado-= oldGasto.Valor;
			proxy.DbCmd.UpdateOnly(concepto, f=> new {f.Acumulado}, f=>f.Id== oldGasto.IdConcepto);
			
			var fuente = proxy.DbCmd.First<Fuente>(f=>f.Id== oldGasto.IdFuente);
			fuente.Salidas-=oldGasto.Valor;
			proxy.DbCmd.UpdateOnly(fuente, f=> new {f.Salidas}, f=>f.Id== oldGasto.IdFuente);

		}

	}
}


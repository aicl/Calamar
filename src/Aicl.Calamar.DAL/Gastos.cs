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
			proxy.DbCmd.InsertAndAssertId(c);
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
			proxy.DbCmd.UpdateOnly(c, f=> new {f.Descripcion, f.Beneficiario, f.Valor, f.IdFuente, f.IdConcepto}, f=> f.Id==gasto.Id);
			return proxy.DbCmd.FirstOrDefault<Gasto>(f=>f.Id== gasto.Id);
		}
		
		public static void Borrar(RepositoryProxy proxy , BorrarGasto gasto)
		{
			proxy.DbCmd.Delete<Gasto>(f=>f.Id==gasto.Id);
		}

	}
}


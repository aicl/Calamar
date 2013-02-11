using ServiceStack.OrmLite;
using Aicl.Calamar.Modelos;
using ServiceStack.Common;
using Mono.Linq.Expressions;
using Cayita.Tools;

namespace Aicl.Calamar.DAL
{
	public static class Conceptos
	{
		public static void CreateTable(RepositoryProxy proxy, bool overwrite)
		{
			proxy.DbCmd.CreateTable<Concepto>(overwrite);
		}

		public static Concepto Crear(RepositoryProxy proxy , CrearConcepto concepto){

			var c = new Concepto();
			c.PopulateWith(concepto);
			proxy.DbCmd.InsertAndAssertId(c);
			return c;
		}

		public static DALResponse<Concepto> Obtener(RepositoryProxy proxy, ObtenerConceptos concepto,Pager paginador)
		{	
			long? totalCount=null;
			
			var visitor = ReadExtensions.CreateExpression<Concepto>();
			var predicate = PredicateBuilder.True<Concepto>();
			
			
			if(!concepto.Tipo.IsNullOrEmpty()){

				predicate= q=>q.Tipo==concepto.Tipo;
			}

			if( concepto.SoloDetalles)
			{
				predicate =predicate.AndAlso(q=>q.Codigo.Contains("."));
			}

			visitor.Where(predicate);
			
			if(paginador.PageNumber.HasValue)
			{
				totalCount= proxy.DbCmd.Count(predicate);
				int rows= paginador.PageSize.HasValue? paginador.PageSize.Value:DAL.PageSize;
				visitor.Limit(paginador.PageNumber.Value*rows, rows);
			}

			visitor.OrderBy(f=>f.Codigo);

			var response = new DALResponse<Concepto>();
			response.Result= proxy.DbCmd.Select(visitor);
			response.TotalCount= totalCount;
			return response;
		}



		public static Concepto Actualizar(RepositoryProxy proxy , ActualizarConcepto concepto)
		{	
			var c = new Concepto(){Nombre=concepto.Nombre, Codigo=concepto.Codigo, Id=concepto.Id};
			proxy.DbCmd.UpdateOnly(c, f=> new {f.Nombre,f.Codigo}, f=> f.Id==c.Id);
			return proxy.DbCmd.FirstOrDefault<Concepto>(f=>f.Id== concepto.Id);
		}

		public static void Borrar(RepositoryProxy proxy , BorrarConcepto concepto)
		{
			proxy.DbCmd.Delete<Concepto>(f=>f.Id==concepto.Id);
		}

		/* manejar por Trigger?
		public static Concepto ActualizarAcumaldo(RepositoryProxy proxy , int id, decimal valor){
			
			var c = new Concepto(){Acumulado=valor};
			proxy.DbCmd.UpdateOnly(c, f=> new {f.Acumulado,}, f=> f.Id==id);
			return c;
		}

		*/



	}
}


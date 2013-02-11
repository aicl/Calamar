using Aicl.Calamar.Modelos;
using ServiceStack.OrmLite;
using ServiceStack.Common;
using Mono.Linq.Expressions;
using Cayita.Tools;

namespace Aicl.Calamar.DAL
{
	public static class Fuentes
	{

		public static void CreateTable(RepositoryProxy proxy, bool overwrite)
		{
			proxy.DbCmd.CreateTable<Fuente>(overwrite);
		}
		
		public static Fuente Crear(RepositoryProxy proxy , CrearFuente fuente)
		{	
			var c = new Fuente();
			c.PopulateWith(fuente);
			proxy.DbCmd.InsertAndAssertId(c);
			return c;
		}


		public static DALResponse<Fuente> Obtener(RepositoryProxy proxy, ObtenerFuentes fuente,Pager paginador)
		{	
			long? totalCount=null;
			
			var visitor = ReadExtensions.CreateExpression<Fuente>();
			var predicate = PredicateBuilder.True<Fuente>();
			
			
			if(!fuente.Tipo.IsNullOrEmpty()){
				
				predicate= q=>q.Tipo==fuente.Tipo;
			}

			if( fuente.SoloDetalles)
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

			var response = new DALResponse<Fuente>();
			response.Result= proxy.DbCmd.Select(visitor);
			response.TotalCount= totalCount;
			return response;				
		}


		public static Fuente Actualizar(RepositoryProxy proxy , ActualizarFuente fuente)
		{	
			var c = new Fuente(){Nombre=fuente.Nombre, Codigo=fuente.Codigo, Id= fuente.Id}; 
			proxy.DbCmd.UpdateOnly(c, f=> new {f.Nombre, f.Codigo}, f=> f.Id==fuente.Id);
			return proxy.DbCmd.FirstOrDefault<Fuente>(f=>f.Id== fuente.Id);
		}
		
		public static void Borrar(RepositoryProxy proxy , BorrarFuente fuente){
			proxy.DbCmd.Delete<Fuente>(f=>f.Id==fuente.Id);
		}
		
		public static Fuente FijarSaldoInicial(RepositoryProxy proxy , int id, decimal valor)
		{	
			var c = new Fuente(){SaldoInicial=valor};
			proxy.DbCmd.UpdateOnly(c, f=> new {f.SaldoInicial,}, f=> f.Id==id);
			return proxy.DbCmd.FirstOrDefault<Fuente>(f=>f.Id== id);
		}


	}
}


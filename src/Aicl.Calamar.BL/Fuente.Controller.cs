using Aicl.Calamar.Modelos;
using ServiceStack.ServiceHost;
using Aicl.Calamar.DAL;

namespace Aicl.Calamar.BL
{
	public partial class Controller
	{
		
		public BLResponse<Fuente> CrearFuente(CrearFuente fuente){
			
			var cp= Client.Execute(proxy=>{
				return Fuentes.Crear(proxy, fuente);
			});
			
			return new BLResponse<Fuente>(cp);
		}
		
		
		public BLResponse<Fuente> ObtenerFuentes(ObtenerFuentes fuente, IRequestContext requestContext){
			
			var cp = Client.Execute(proxy=>{
				return Fuentes.Obtener(proxy, fuente, Paginador(requestContext));
			});
			
			return new BLResponse<Fuente>{
				Result=cp.Result,
				TotalCount= cp.TotalCount,
			};
		}
		
		
		public BLResponse<Fuente> ActualizarFuente(ActualizarFuente fuente){
			
			var cp= Client.Execute(proxy=>{
				return Fuentes.Actualizar(proxy, fuente);
			});
			
			return new BLResponse<Fuente>(cp);
		}
		
		public void BorrarFuente(BorrarFuente fuente){
			
			Client.Execute(proxy=>{
				Fuentes.Borrar(proxy, fuente);
			});
			
			
		}
		
	}
}


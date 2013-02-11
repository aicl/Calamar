using Aicl.Calamar.Modelos;
using ServiceStack.ServiceHost;
using Aicl.Calamar.DAL;

namespace Aicl.Calamar.BL
{
	public partial class Controller
	{
		
		public BLResponse<Gasto> CrearGasto(CrearGasto gasto){
			
			var cp= Client.Execute(proxy=>{
				return Gastos.Crear(proxy, gasto);
			});
			
			return new BLResponse<Gasto>(cp);
		}
		
		
		public BLResponse<Gasto> ObtenerGastos(ObtenerGastos gasto, IRequestContext requestContext){
			
			var cp = Client.Execute(proxy=>{
				return Gastos.Obtener(proxy, gasto, Paginador(requestContext));
			});
			
			return new BLResponse<Gasto>{
				Result=cp.Result,
				TotalCount= cp.TotalCount,
			};
		}
		
		
		public BLResponse<Gasto> ActualizarGasto(ActualizarGasto gasto){
			
			var cp= Client.Execute(proxy=>{
				return Gastos.Actualizar(proxy, gasto);
			});
			
			return new BLResponse<Gasto>(cp);
		}
		
		public void BorrarGasto(BorrarGasto gasto){
			
			Client.Execute(proxy=>{
				Gastos.Borrar(proxy, gasto);
			});
			
			
		}
		
	}
}


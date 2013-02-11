using Aicl.Calamar.Modelos;

namespace Aicl.Calamar.Interface
{
	public class GastoService:AppServiceBase
	{
		public BLResponse<Gasto> Post(CrearGasto gasto){
			return Controller.CrearGasto(gasto);
		}
		
		public BLResponse<Gasto> Post(ObtenerGastos gasto){
			return Controller.ObtenerGastos(gasto,RequestContext);
		}
		
		public BLResponse<Gasto> Get(ObtenerGastos gasto){
			return Post(gasto);
		}
		
		public BLResponse<Gasto> Post(ActualizarGasto gasto){
			return Controller.ActualizarGasto(gasto);
		}
		
		public BLResponse<Gasto> Put(ActualizarGasto gasto){
			return Post(gasto);
		}
		
		public void Post(BorrarGasto gasto){
			Controller.BorrarGasto(gasto);
		}
		
		public void Delete(BorrarGasto gasto){
			Post(gasto);
		}

	}
}


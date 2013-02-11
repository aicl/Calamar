using Aicl.Calamar.Modelos;

namespace Aicl.Calamar.Interface
{
	public class FuenteService:AppServiceBase
	{
		public BLResponse<Fuente> Post(CrearFuente fuente){
			return Controller.CrearFuente(fuente);
		}
		
		public BLResponse<Fuente> Post(ObtenerFuentes fuente){
			return Controller.ObtenerFuentes(fuente,RequestContext);
		}
		
		public BLResponse<Fuente> Get(ObtenerFuentes fuente){
			return Post(fuente);
		}
		
		public BLResponse<Fuente> Post(ActualizarFuente fuente){
			return Controller.ActualizarFuente(fuente);
		}
		
		public BLResponse<Fuente> Put(ActualizarFuente fuente){
			return Post(fuente);
		}
		
		public void Post(BorrarFuente fuente){
			Controller.BorrarFuente(fuente);
		}
		
		public void Delete(BorrarFuente fuente){
			Post(fuente);
		}

	}
}


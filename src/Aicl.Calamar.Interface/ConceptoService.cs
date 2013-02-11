using Aicl.Calamar.Modelos;

namespace Aicl.Calamar.Interface
{
	public class ConceptoService:AppServiceBase
	{
		public BLResponse<Concepto> Post(CrearConcepto concepto){
			return Controller.CrearConcepto(concepto);
		}

		public BLResponse<Concepto> Post(ObtenerConceptos concepto){
			return Controller.ObtenerConceptos(concepto,RequestContext);
		}

		public BLResponse<Concepto> Get(ObtenerConceptos concepto){
			return Post(concepto);
		}

		public BLResponse<Concepto> Post(ActualizarConcepto concepto){
			return Controller.ActualizarConcepto(concepto);
		}

		public BLResponse<Concepto> Put(ActualizarConcepto concepto){
			return Post(concepto);
		}

		public void Post(BorrarConcepto concepto){
			 Controller.BorrarConcepto(concepto);
		}

		public void Delete(BorrarConcepto concepto){
			Post(concepto);
		}

	}
}


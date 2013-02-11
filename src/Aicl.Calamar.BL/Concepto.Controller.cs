using ServiceStack.Common;
using Aicl.Calamar.DAL;
using Aicl.Calamar.Modelos;
using ServiceStack.ServiceHost;


namespace Aicl.Calamar.BL
{
	public partial class Controller
	{

		public BLResponse<Concepto> CrearConcepto(CrearConcepto concepto){

			//if(concepto.Orden.IsNullOrEmpty()) concepto.Orden="999" ;
			var cp= Client.Execute(proxy=>{
				return Conceptos.Crear(proxy, concepto);
			});

			return new BLResponse<Concepto>(cp);
		}


		public BLResponse<Concepto> ObtenerConceptos(ObtenerConceptos concepto, IRequestContext requestContext){

			var cp = Client.Execute(proxy=>{
				return Conceptos.Obtener(proxy, concepto, Paginador(requestContext));
			});

			return new BLResponse<Concepto>{
				Result=cp.Result,
				TotalCount= cp.TotalCount,
			};
		}


		public BLResponse<Concepto> ActualizarConcepto(ActualizarConcepto concepto){

			//if(concepto.Orden.IsNullOrEmpty()) concepto.Orden="999" ;
			var cp= Client.Execute(proxy=>{
				return Conceptos.Actualizar(proxy, concepto);
			});
			
			return new BLResponse<Concepto>(cp);
		}

		public void BorrarConcepto(BorrarConcepto concepto){
			
			Client.Execute(proxy=>{
				 Conceptos.Borrar(proxy, concepto);
			});
			

		}

	}
}


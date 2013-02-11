using ServiceStack.DesignPatterns.Model;
using ServiceStack.ServiceHost;

namespace Aicl.Calamar.Modelos
{

	[Route("/Concepto/create","POST")]
	public class CrearConcepto:  IReturn<BLResponse<Concepto>>
	{
		public string Codigo{get;set;}
		//public  string Orden {get;set;}
		public string Tipo {get;set;}
		public string Nombre {get;set;}
	}

	[Route("/Concepto/read","POST,GET")]
	public class ObtenerConceptos:  IReturn<BLResponse<Concepto>>
	{
		public  string Tipo {get;set;}
		public bool SoloDetalles {get;set;}
	}


	[Route("/Concepto/update","POST,PUT")]
	public class ActualizarConcepto:IHasIntId, IReturn<BLResponse<Concepto>>{

		public int Id{get;set;}
		public string Codigo{get;set;}
		public string Nombre {get;set;}		
	}

	[Route("/Concepto/destroy","POST,DELETE")]
	public  class BorrarConcepto:IHasIntId, IReturnVoid
	{
		public int Id{get;set;}
	}

}




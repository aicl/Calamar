using ServiceStack.ServiceHost;
using ServiceStack.DesignPatterns.Model;

namespace Aicl.Calamar.Modelos
{
	[Route("/Fuente/create","POST")]
	public class CrearFuente:  IReturn<BLResponse<Fuente>>
	{

		public  string Codigo {get;set;}

		public string Tipo {get;set;}
		
		public string Nombre {get;set;}

		public int IdConcepto {get;set;}
	}
	
	[Route("/Fuente/read","POST,GET")]
	public class ObtenerFuentes:  IReturn<BLResponse<Fuente>>
	{
		public  string Tipo {get;set;} //obtenere debitos o creditos o todos	
		public bool SoloDetalles {get;set;}
	}
	
	
	[Route("/Fuente/update","POST,PUT")]
	public class ActualizarFuente:IHasIntId, IReturn<BLResponse<Fuente>>{

		public int Id{get;set;}
		public  string Codigo {get;set;}
		public string Nombre {get;set;}		
	}
	
	[Route("/Fuente/destroy","POST,DELETE")]
	public  class BorrarFuente:IHasIntId, IReturnVoid
	{
		public int Id{get;set;}
	}

}


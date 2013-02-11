using System;
using ServiceStack.ServiceHost;
using ServiceStack.DesignPatterns.Model;
using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace Aicl.Calamar.Modelos
{

	[Route("/Gasto/create","POST")]
	public class CrearGasto:  IReturn<BLResponse<Gasto>>
	{
				
		public DateTime? Fecha {get;set;}
		
		public int IdConcepto {get;set;}
		
		public int IdFuente {get;set;}
		
		[DecimalLength(15,2)]
		public decimal Valor {get;set;}
		
		[DecimalLength(15,2)]
		public decimal Pagado {get;set;}
		
		[StringLength(64)]
		public string  Descripcion {get;set;}
		
		[StringLength(64)]
		public string  Beneficiario {get;set;}

	}
	
	[Route("/Gasto/read","POST,GET")]
	public class ObtenerGastos:  IReturn<BLResponse<Gasto>>
	{
						
		public DateTime? FechaDesde {get;set;}
		public DateTime? FechaHasta {get;set;}
		
		public int? IdConcepto {get;set;}
		
		public int? IdFuente {get;set;}

		[StringLength(64)]
		public string  Descripcion {get;set;}
		
		[StringLength(64)]
		public string  Beneficiario {get;set;}
	}
	
	
	[Route("/Gasto/update","POST,PUT")]
	public class ActualizarGasto:IHasIntId, IReturn<BLResponse<Gasto>>{
		
		public int Id{get;set;}
		public int IdConcepto {get;set;}
		public int IdFuente {get;set;}
		public decimal Valor {get;set;}
		public string  Descripcion {get;set;}
		public string  Beneficiario {get;set;}
	}
	
	[Route("/Gasto/destroy","POST,DELETE")]
	public  class BorrarGasto:IHasIntId, IReturnVoid
	{
		public int Id{get;set;}
	}


}


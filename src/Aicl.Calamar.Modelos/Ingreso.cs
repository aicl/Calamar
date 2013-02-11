using System;
using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;
using ServiceStack.DesignPatterns.Model;

namespace Aicl.Calamar.Modelos
{
	public class Ingreso:IHasIntId
	{
		public Ingreso ()
		{
		}

		[PrimaryKey]
		[AutoIncrement]
		public int Id {get;set;}
		
		public DateTime Fecha {get;set;}
		
		public int IdConcepto {get;set;}
		
		public int IdFuente {get;set;}
		
		[DecimalLength(15,2)]
		public decimal Valor {get;set;}

		[StringLength(32)]
		[Required]
		public string  Descripcion {get;set;}

	}
}


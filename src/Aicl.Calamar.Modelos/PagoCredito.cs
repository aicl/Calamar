using System;
using ServiceStack.DesignPatterns.Model;
using System.ComponentModel.DataAnnotations;
using ServiceStack.DataAnnotations;

namespace Aicl.Calamar.Modelos
{
	public class PagoCredito:IHasIntId
	{
		public PagoCredito ()
		{
		}

		[PrimaryKey]
		[AutoIncrement]
		public int Id {get;set;}
		
		public DateTime Fecha {get;set;}

		public int IdFuenteOrigen {get;set;}
		public int IdFuenteDestino {get;set;}
		/// <summary>
		/// Gets or sets the identifier concepto. Gasto al cual se le cargan los intereses
		/// </summary>
		/// <value>
		/// The identifier concepto.
		/// </value>
		public int IdConcepto {get;set;}
		
		[DecimalLength(15,2)]
		public decimal Capital {get;set;}

		[DecimalLength(15,2)]
		public decimal Intereses {get;set;}

		[Required]
		[StringLength(32)]
		public string  Descripcion {get;set;}


	}
}


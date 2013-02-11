using ServiceStack.DesignPatterns.Model;
using System.ComponentModel.DataAnnotations;
using ServiceStack.DataAnnotations;
using System;


namespace Aicl.Calamar.Modelos
{
	public class Traslado:IHasIntId
	{
		public Traslado ()
		{
		}

		[PrimaryKey]
		[AutoIncrement]
		public int Id {get;set;}

		public DateTime Fecha {get;set;}

		public int IdFuenteOrigen {get;set;}
		public int IdFuenteDestino {get;set;}

		[DecimalLength(15,2)]
		public decimal Valor {get;set;}

		[Required]
		[StringLength(32)]
		public string  Descripcion {get;set;}

	}
}


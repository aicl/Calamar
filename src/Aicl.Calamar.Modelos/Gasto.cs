using ServiceStack.DesignPatterns.Model;
using System.ComponentModel.DataAnnotations;
using ServiceStack.DataAnnotations;
using System;

namespace Aicl.Calamar.Modelos
{
	public class Gasto:IHasIntId
	{
		public Gasto ()
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

		[DecimalLength(15,2)]
		public decimal Pagado {get;set;}

		[StringLength(64)]
		public string  Descripcion {get;set;}

		[Required]
		[StringLength(64)]
		public string  Beneficiario {get;set;}

		public bool Sistema {get;set;}

	}
}


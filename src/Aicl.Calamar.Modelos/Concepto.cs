using ServiceStack.DesignPatterns.Model;
using System.ComponentModel.DataAnnotations;
using ServiceStack.DataAnnotations;

namespace Aicl.Calamar.Modelos
{
	public partial class Concepto:IHasIntId
	{
		public Concepto ()
		{
		}

		[PrimaryKey]
		[AutoIncrement]
		public int Id{get;set;}

		/// <summary>
		/// Gets or sets the codigo.
		/// 11 Grupo
		/// 11.01 Item  
		/// </summary>
		/// <value>
		/// The codigo.
		/// </value>
		[StringLength(5)]
		[Required]
		[Index(true)]
		public string Codigo{get;set;}


		//[StringLength(5)]
		//public string Orden{get;set;}

		/// <summary>
		/// Gets or sets the tipo: Ingreso-Egreso.
		/// </summary>
		/// <value>
		/// The tipo.
		/// </value>
		[Required]
		[StringLength(32)]
		public string Tipo {get;set;}

		[StringLength(64)]
		public string Nombre {get;set;}

		[Required]
		[DecimalLength(15,2)]
		public decimal Acumulado {get;set;}

	}
}


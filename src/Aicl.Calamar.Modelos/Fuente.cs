using ServiceStack.DesignPatterns.Model;
using System.ComponentModel.DataAnnotations;
using ServiceStack.DataAnnotations;

namespace Aicl.Calamar.Modelos
{
	public class Fuente:IHasIntId
	{
		public Fuente ()
		{
		}

		[PrimaryKey]
		[AutoIncrement]
		public int Id {get;set;}

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

		/// <summary>
		/// Gets or sets the tipo: Debito - Credito
		/// </summary>
		/// <value>
		/// The tipo.
		/// </value>
		/// 
		[Required]
		[StringLength(32)]
		public string  Tipo {get;set;}

		[Required]
		[StringLength(64)]
		public string  Nombre {get;set;}

		/// <summary>
		/// Gets or sets the identifier concepto.
		/// asignar valor  para tipo="Credito", para saber a que cuenta se le cargan intereses..
		/// </summary>
		/// <value>
		/// The identifier concepto.
		/// </value>
		public int? IdConcepto{get;set;}

		/// <summary>
		/// Gets or sets the saldo inicial. 
		/// Para Credito es es Cupo de la cuenta
		/// </summary>
		/// <value>
		/// The saldo inicial.
		/// </value>
		[DecimalLength(15,2)]
		public decimal SaldoInicial {get;set;}

		[DecimalLength(15,2)]
		public decimal Entradas {get;set;}

		[DecimalLength(15,2)]
		public decimal Salidas {get;set;}

		/// <summary>
		/// Registros del Sistema : Creditos concedidos por terceros NO BAncos!
		/// </summary>
		/// <value>
		/// <c>true</c> if sistema; otherwise, <c>false</c>.
		/// </value>

		public bool Sistema {get;set;}

		public decimal GetSaldo()
		{
			return SaldoInicial+Entradas-Salidas;
		}

	}
}


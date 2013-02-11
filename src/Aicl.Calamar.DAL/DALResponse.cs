using System.Collections.Generic;

namespace Aicl.Calamar.DAL
{
	public class DALResponse<T>
	{
		long? totalCount;

		public DALResponse(){
			Result= new List<T>();
		}
		
		public DALResponse(T data){
			Result= new List<T>();
			Result.Add(data);
		}

		public List<T> Result {get;set;}

		public long? TotalCount {
			get {return totalCount.HasValue? totalCount.Value: Result.Count;}
			set { totalCount=value;}
		}

	}
}


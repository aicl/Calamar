/*
using System;
using System.Data;
using ServiceStack.DesignPatterns.Model;
using System.Reflection;
using ServiceStack.Common.Utils;
using ServiceStack.OrmLite;
using System.Linq.Expressions;

namespace Aicl.Calamar.DAL
{
	public static class DbCommandExtensions
	{
		public static void InsertAndAssertId<T>(this IDbCommand dbCmd,  T request ) 
			where T: IHasIntId, new()
		{
			dbCmd.Insert<T>(request);

			if( request.Id==default(int))
			{
				Type type = typeof(T);
				PropertyInfo pi= ReflectionUtils.GetPropertyInfo(type, OrmLiteConfig.IdField);
				var li = dbCmd.GetLastInsertId();
				ReflectionUtils.SetProperty(request, pi, Convert.ToInt32(li));  
			}

		}

		public static long Count<T>(this IDbCommand dbCmd, Expression<Func<T, bool>> predicate )
			where T: IHasId<int>, new()
		{
			return  dbCmd.GetScalar<T,long>(
				e=>  Sql.Count(e.Id),
				predicate );

		}

	}
}

*/
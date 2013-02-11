using ServiceStack.OrmLite;
using ServiceStack.Redis;
using System;

namespace Aicl.Calamar.DAL
{
	public class RepositoryClient
	{

		IDbConnectionFactory DbConnectionFactory {get;set;}
		
		IRedisClientsManager RedisClientsManager {get;set;}

		public RepositoryClient (IDbConnectionFactory dbConnectionFactory, IRedisClientsManager redisClientsManager)
		{
			DbConnectionFactory= dbConnectionFactory;
			RedisClientsManager= redisClientsManager;
		}

		public void Execute( Action<RepositoryProxy> commands)
		{
			using(RepositoryProxy proxy = new RepositoryProxy(DbConnectionFactory,RedisClientsManager))
			{
				commands(proxy);
			}
		}
		
		public T Execute<T>( Func<RepositoryProxy,T> commands)
		{
			
			using(RepositoryProxy proxy = new RepositoryProxy(DbConnectionFactory,RedisClientsManager))
			{
				return commands(proxy);
			}
		}
	}
}


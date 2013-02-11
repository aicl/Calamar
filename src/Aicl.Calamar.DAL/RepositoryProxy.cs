using System;
using System.Data;
using ServiceStack.OrmLite;
using ServiceStack.Redis;

namespace Aicl.Calamar.DAL
{
	public class RepositoryProxy:IDisposable
	{

		IDbConnection dbConn;
		IDbCommand dbCmd=null;
		IDbTransaction dbTransaction=null;
		IRedisClient redisClient;

		internal IDbCommand DbCmd {
			get {
				return dbCmd; 
			}
		}


		internal IRedisClient RedisClient {
			get {
				return redisClient;
			}
		}


		IDbConnectionFactory DbConnectionFactory {get;set;}
		
		IRedisClientsManager RedisClientsManager {get;set;}

		public RepositoryProxy (IDbConnectionFactory dbConnectionFactory, IRedisClientsManager redisClientsManager)
		{
			DbConnectionFactory= dbConnectionFactory;
			RedisClientsManager= redisClientsManager;
			CreateCommand();
			CreateRedisClient();
		}

		public IDisposable AcquireLock(string lockKey, double timeOut)
		{
			return CreateRedisClient().AcquireLock(lockKey, TimeSpan.FromSeconds(timeOut));
		}


		public void BeginDbTransaction()
		{
			if(dbTransaction==null)
				dbTransaction=CreateCommand().BeginTransaction();
		}
		
		public void CommitDbTransaction()
		{
			if(dbTransaction!=null)
			{
				dbTransaction.Commit();
				dbTransaction.Dispose();
				dbTransaction=null;
			}
		}
		
		public void RollbackDbTransaction()
		{
			if(dbTransaction!=null)
			{
				dbTransaction.Rollback();
				dbTransaction.Dispose();
				dbTransaction=null;
			}
		}


		public void Dispose()
		{
			if(redisClient!=null)
			{
				redisClient.Dispose();
			}

			RollbackDbTransaction();

			if(dbCmd!=null) 
			{
				dbCmd.Dispose();
				dbConn.Close();
				dbConn.Dispose();
			}
		}

		IDbCommand CreateCommand(){
			if(dbCmd==null)
			{
				dbConn = DbConnectionFactory.OpenDbConnection(); 
				dbCmd  = dbConn.CreateCommand();
			}
			return dbCmd;
		}

		IRedisClient CreateRedisClient(){
			if(redisClient==null) redisClient= RedisClientsManager.GetClient();
			return redisClient;
		}

	}
}


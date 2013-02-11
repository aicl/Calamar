using System;
using ServiceStack.WebHost.Endpoints;
using Aicl.Calamar.Interface;
using ServiceStack.Logging;
using ServiceStack.Configuration;
using Aicl.Calamar.DAL;

using ServiceStack.Logging.Support.Logging;
using ServiceStack.Common.Web;
using Funq;
using Aicl.Calamar.BL;
using ServiceStack.OrmLite.MySql;
using ServiceStack.OrmLite;
using ServiceStack.ServiceInterface.Auth;
using ServiceStack.Redis;
using Cayita.Tools.Auth;
using ServiceStack.ServiceInterface;


namespace Aicl.Calamar.HostWeb
{
	public class AppHost:AppHostBase
	{
		static ILog log;
		
		public AppHost ():base("Registro Ingresos y Egresos", typeof(ConceptoService).Assembly)
		{
			LogManager.LogFactory = new ConsoleLogFactory();
			log = LogManager.GetLogger(typeof (AppHost));
		}
		
		public override void Configure(Container container)
		{
			//Permit modern browsers (e.g. Firefox) to allow sending of any REST HTTP Method
			base.SetConfig(new EndpointHostConfig
			               {
				GlobalResponseHeaders =
				{
					{ "Access-Control-Allow-Origin", "*" },
					{ "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH" },
				},
				DefaultContentType = ContentType.Json 
			});
			
			
			ConfigureApp(container);
			log.InfoFormat("AppHost Configured: " + DateTime.Now);
		}
		
		void ConfigureApp(Container container)
		{

			var appSettings = new ConfigurationResourceManager();

			double se= appSettings.Get("DefaultSessionExpiry", 480);
			AuthProvider.DefaultSessionExpiry=TimeSpan.FromMinutes(se);         
			
			string cacheHost= appSettings.Get("REDISTOGO_URL","localhost:6379").Replace("redis://redistogo-appharbor:","").Replace("/","");
			
			var redisClientManager = new BasicRedisClientManager(new string[]{cacheHost});
			
			OrmLiteConfig.DialectProvider= MySqlDialectProvider.Instance;
			
			IDbConnectionFactory dbFactory = 
				new OrmLiteConnectionFactory(ConfigUtils.GetConnectionString("ApplicationDb"));

			string smtpServer= appSettings.Get("MAILGUN_SMTP_SERVER", "localhost");
			string smtpLogin= appSettings.Get("MAILGUN_SMTP_LOGIN", "username");
			string smtpPassword= appSettings.Get("MAILGUN_SMTP_PASSWORD", "PASSWORD");
			int smtpPort= appSettings.Get("MAILGUN_SMTP_PORT", 587);
			Mailer mailer = new Mailer(smtpServer, smtpPort, smtpLogin, smtpPassword);

			var appConfig= new AppConfig(appSettings);

			RepositoryClient rc = new RepositoryClient(dbFactory, redisClientManager);
			Controller controller = new Controller(rc,mailer,appConfig);
			container.Register<Controller>( controller );

			AuthRepoProxy arp = new AuthRepoProxy(dbFactory, redisClientManager);
			container.Register<AuthRepoProxy>( arp );

			container.Register<IRedisClientsManager>(c => redisClientManager);
			//container.Register<ICacheClient>(c => redisClientManager);
			
			Plugins.Add(new AuthFeature( () => new AuthUserSession(), // or Use your own typed Custom AuthUserSession type
				new IAuthProvider[]
			{
				new AuthenticationProvider(){SessionExpiry=TimeSpan.FromMinutes(se)}
			})
			   {
				IncludeAssignRoleServices=false
			});
						
			OrmLiteAuthRepository authRepo = new OrmLiteAuthRepository(dbFactory);
			
			container.Register<IUserAuthRepository>(c => authRepo); 
						
			if(appSettings.Get("EnableRegistrationFeature", false))
				Plugins.Add( new  RegistrationFeature());

		}
		
	}

}


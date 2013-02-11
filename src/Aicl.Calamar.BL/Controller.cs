using Aicl.Calamar.DAL;
using ServiceStack.ServiceHost;
using Cayita.Tools;

namespace Aicl.Calamar.BL
{
	public partial class Controller
	{

		public Controller (RepositoryClient client, Mailer mailer,AppConfig appConfig)
		{
			Client= client;
			Mailer= mailer;
			AppConfig = appConfig;
			//LoadRules();
		}
		
		protected internal RepositoryClient Client {get;set;}
				
		protected Mailer Mailer {get;  set;}

		protected internal AppConfig AppConfig {get;set;}
		
		//public Rules Rules {get; private set;}
		
		
		//public void LoadRules(){
		//	Rules = new Rules();
		//}
		
		//public void InitRepo(){
		//	Client.Execute(proxy=>{
		//		Users.CreateTable(proxy);
		//		Users.Populate(proxy);
		//		Authors.CreateTable(proxy);
		//		Sales.CreateTable(proxy);
		//		Sales.Populate(proxy);
		//	});
		//}
		
		protected bool IsCayita (IRequestContext requestContext)
		{
			var httpReq= requestContext.Get<IHttpRequest>();
			return httpReq.IsCayita();
		}

		public Pager Paginador(IRequestContext requestContext)
		{
			var httpRequest= requestContext.Get<IHttpRequest>();
			return httpRequest.BuildPager();
		}

	}
}


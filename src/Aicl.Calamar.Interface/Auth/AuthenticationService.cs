using ServiceStack.Common;
using ServiceStack.ServiceInterface;
using Cayita.Tools.Auth;
using ServiceStack.ServiceInterface.Auth;
using System;
using ServiceStack.Redis;
using System.Collections.Generic;

namespace Aicl.Calamar.Interface
{
	public class AuthenticationService:Service
	{

		public AuthRepoProxy AuthRepoProxy{get;set;}

		public void Any(Logout request){

			AuthService authService = base.ResolveService<AuthService>();
			authService.Delete(new Auth {
				provider = AuthService.LogoutAction
			});
						
			var cache = authService.TryResolve<IRedisClientsManager>();
			if(cache!=null){
				var sessionId = authService.GetSessionId();

				var pattern = string.Format("urn:{0}:*", sessionId);
				cache.Execute(client=>{
					var keys =client.SearchKeys(pattern);
					client.RemoveAll(keys);
				}); 	

			}
		}

		public LoginResponse Get(Login request){
			return Post(request);
		}

		public  LoginResponse Post (Login request)
		{
			AuthService authService = ResolveService<AuthService>();
			
			authService.Post(new Auth {
				provider = AuthService.CredentialsProvider,
				UserName = request.UserName,
				Password = request.Password
			}) ;

			IAuthSession session = this.GetSession();


			//UserManager um = new UserManager(base.RequestContext, AuthRepoProxy);
			//AuthorizationResponse aur = um.GetAuthorization(
			//	new GetAuthorization{UserId=int.Parse(session.UserAuthId)});

			AuthorizationResponse aur= new AuthorizationResponse{Roles= GetFakeRoles()};

			session.Permissions= aur.Permissions.ConvertAll(f=>f.Name);
			session.Roles= aur.Roles.ConvertAll(f=>f.Name);  //(from r in aur.Roles select r.Name).ToList();

			authService.SaveSession(session);
						
			return new LoginResponse(){
				DisplayName= session.DisplayName.IsNullOrEmpty()? session.UserName: session.DisplayName,
				Roles= aur.Roles,
				Permissions= aur.Permissions
					
			};
			
		}

		List<AuthRole> GetFakeRoles(){
			var r = new List<AuthRole>();

			r.Add( new AuthRole{Id=1, Name="Gastos", Directory="modules/Calamar.Gastos",ShowOrder="00", Title="Gastos"});
			r.Add( new AuthRole{Id=2, Name="Conceptos", Directory="modules/Calamar.Conceptos",ShowOrder="01", Title="Conceptos"});
			r.Add( new AuthRole{Id=2, Name="Fuentes", Directory="modules/Calamar.Fuentes",ShowOrder="02", Title="Fuentes"});
			return r;


		}

	}
}


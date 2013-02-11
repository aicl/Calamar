(function() {
	////////////////////////////////////////////////////////////////////////////////
	// Aicl.Calamar.Scripts.ModuloAuth.App
	var $App = function() {
		this.$1$TopNavBarField = null;
		this.$1$WorkField = null;
	};
	$App.prototype = {
		get_$topNavBar: function() {
			return this.$1$TopNavBarField;
		},
		set_$topNavBar: function(value) {
			this.$1$TopNavBarField = value;
		},
		get_$work: function() {
			return this.$1$WorkField;
		},
		set_$work: function(value) {
			this.$1$WorkField = value;
		},
		$onLogin: function(loginResponse, lf) {
			console.log('App.OnLogin ', loginResponse);
			var a = Cayita.UI.ElementBase.jSelect(this.get_$topNavBar().pullRightAnchor).text(lf.get_userName());
			$(this.get_$topNavBar().pullRightParagraph).text('');
			$(this.get_$topNavBar().pullRightParagraph).append(a);
			lf.close();
			this.$showUserMenu(loginResponse);
		},
		$showTopNavBar: function() {
			this.set_$topNavBar(Cayita.UI.TopNavBar.$ctor(null, 'Calamar', 'No logged', '', function(navlist) {
			}));
			document.body.appendChild(Cayita.UI.Div.element(this.get_$topNavBar()));
		},
		$showUserMenu: function(lr) {
			var um = Cayita.UI.Div.createContainerFluid$1(null, Function.mkdel(this, function(fluid) {
				Cayita.UI.Div.createRowFluid$1(fluid, Function.mkdel(this, function(row) {
					Cayita.UI.Div.$ctor1(row, Function.mkdel(this, function(span) {
						span.className = 'span2';
						Cayita.UI.Div.$ctor1(span, Function.mkdel(this, function(nav) {
							nav.className = 'well sidebar-nav';
							Cayita.UI.HtmlList.creatNavList$1(nav, Function.mkdel(this, function(list) {
								Cayita.UI.ListItem.createNavHeader(list, 'Menu');
								for (var $t1 = 0; $t1 < lr.Roles.length; $t1++) {
									var role = { $: lr.Roles[$t1] };
									Cayita.UI.ListItem.createNavListItem$1(list, '#', role.$.Title, Function.mkdel({ role: role, $this: this }, function(li, anchor) {
										$(anchor).click(Function.mkdel({ role: this.role, $this: this.$this }, function(e) {
											e.preventDefault();
											Cayita.UI.ElementBase.jSelect(this.$this.get_$work()).empty();
											$.getScript(this.role.$.Directory + '.js', Function.mkdel(this.$this, function(o) {
												MainModule.execute(Cayita.UI.Div.element(this.get_$work()));
											}));
										}));
									}));
								}
								Cayita.UI.ListItem.createNavListItem$1(list, '#', 'Cerrar Session', Function.mkdel(this, function(li1, anchor1) {
									$(anchor1).click(Function.mkdel(this, function(e1) {
										e1.preventDefault();
										$(document.body).empty();
										$.post('api/Logout', {}, function(cb) {
											console.log('callback', cb);
										}, 'json').success(Function.mkdel(this, function(d) {
											this.$showTopNavBar();
											this.$showLoginForm();
										})).error(function(request, textStatus, error) {
											console.log('request', request);
											Cayita.UI.Div.createAlertErrorBefore(document.body, textStatus + ': ' + request.statusText);
										}).always(function(a) {
										});
									}));
								}));
							}));
						}));
					}));
					this.set_$work(Cayita.UI.Div.$ctor1(row, function(work) {
						work.className = 'span9';
						work.id = 'work';
						var m = document.createElement('h3');
						m.innerText = 'Welcome';
						work.appendChild(m);
					}));
				}));
			}));
			Cayita.UI.ElementBase.appendTo(um, document.body);
		},
		$showLoginForm: function() {
			var $t2 = document.body;
			var $t1 = Cayita.UI.FormConfig.$ctor();
			$t1.action = 'api/Login?format=json';
			$t1.method = 'post';
			var form = new $LoginForm($t2, $t1);
			form.set_onLogin(Function.mkdel(this, this.$onLogin));
			form.show();
		}
	};
	$App.main = function() {
		$(function() {
			var app = new $App();
			app.$showTopNavBar();
			app.$showLoginForm();
		});
	};
	////////////////////////////////////////////////////////////////////////////////
	// Aicl.Calamar.Scripts.ModuloAuth.LoginForm
	var $LoginForm = function(parent, config) {
		this.$1$UserNameField = null;
		this.$1$ParentField = null;
		this.$1$ConfigField = null;
		this.$1$OnLoginField = null;
		this.$1$ContainerField = null;
		this.set_parent(parent);
		this.set_config(config);
	};
	$LoginForm.prototype = {
		get_userName: function() {
			return this.$1$UserNameField;
		},
		set_userName: function(value) {
			this.$1$UserNameField = value;
		},
		get_parent: function() {
			return this.$1$ParentField;
		},
		set_parent: function(value) {
			this.$1$ParentField = value;
		},
		get_config: function() {
			return this.$1$ConfigField;
		},
		set_config: function(value) {
			this.$1$ConfigField = value;
		},
		get_onLogin: function() {
			return this.$1$OnLoginField;
		},
		set_onLogin: function(value) {
			this.$1$OnLoginField = value;
		},
		get_$container: function() {
			return this.$1$ContainerField;
		},
		set_$container: function(value) {
			this.$1$ContainerField = value;
		},
		close: function() {
			Cayita.UI.ElementBase.jSelect(this.get_$container()).remove();
		},
		show: function() {
			this.set_$container(Cayita.UI.Div.createContainer$1(null, Function.mkdel(this, function(container) {
				Cayita.UI.Div.createRow$1(container, Function.mkdel(this, function(row) {
					//
					Cayita.UI.Div.$ctor1(row, Function.mkdel(this, function(element) {
						element.className = 'span4 offset4 well';
						var $t1 = Cayita.UI.LegendConfig.$ctor();
						$t1.text = 'Por favor inicie session';
						Cayita.UI.Legend.$ctor(element, $t1);
						Cayita.UI.Form.$ctor1(element, Function.mkdel(this, function(fe) {
							fe.action = this.get_config().action;
							fe.method = this.get_config().method;
							var cg = Cayita.UI.Div.createControlGroup(fe);
							var user = Cayita.UI.InputText.$ctor2(Cayita.UI.Div.element(cg), function(pe) {
								pe.className = 'span4';
								pe.setAttribute('placeholder', 'nombre de usuario');
								pe.name = 'UserName';
							});
							cg = Cayita.UI.Div.createControlGroup(fe);
							var pass = Cayita.UI.InputPassword.$ctor1(Cayita.UI.Div.element(cg), function(pe1) {
								pe1.className = 'span4';
								pe1.setAttribute('placeholder', 'Digite su clave');
								pe1.name = 'Password';
							});
							var bt = Cayita.UI.SubmitButton.$ctor1(fe, function(b) {
								$(b).text('Iniciar Session');
								b.className = 'btn btn-info btn-block';
								$(b).button.defaults.loadingText = '  autenticando....';
							});
							var vo = ValidateOptions.addRule(ValidateOptions.addRule(ValidateOptions.setSubmitHandler(ValidateOptions.$ctor(), Function.mkdel(this, function(f) {
								Cayita.UI.ButtonBase.showLoadingText(bt);
								$.post(f.action, $(f).serialize(), function(cb) {
									console.log('callback', cb);
								}, 'json').success(Function.mkdel(this, function(d) {
									this.set_userName(Cayita.UI.InputText.element(user).value);
									if (ss.isValue(this.get_onLogin())) {
										this.get_onLogin()(d, this);
									}
								})).error(function(request, textStatus, error) {
									Cayita.UI.Div.createAlertErrorBefore(fe.elements[0], textStatus + ': ' + (request.statusText.startsWith('ValidationException') ? 'Usario/clave no validos' : request.statusText));
								}).always(function(a) {
									Cayita.UI.ButtonBase.resetLoadingText(bt);
								});
							})), function(rule, msg) {
								rule.element = Cayita.UI.InputText.element(pass);
								Rule.required(Rule.minlength(rule.rule, 2));
								Message.required(Message.minlength(msg, 'minimo 2 caracteres'), 'Digite su password');
							}), function(rule1, msg1) {
								rule1.element = Cayita.UI.InputText.element(user);
								Rule.minlength(Rule.required(rule1.rule), 2);
								Message.minlength(msg1, 'minimo 2 caracteres');
							});
							$(fe).validate(vo);
						}));
					}));
				}));
			})));
			this.get_parent().appendChild(Cayita.UI.Div.element(this.get_$container()));
		}
	};
	Type.registerClass(global, 'App', $App, Object);
	Type.registerClass(global, 'LoginForm', $LoginForm, Object);
})();

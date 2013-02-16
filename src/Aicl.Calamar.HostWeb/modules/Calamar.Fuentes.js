﻿(function() {
	////////////////////////////////////////////////////////////////////////////////
	// Aicl.Calamar.Scripts.Fuentes.MainModule
	var $MainModule = function() {
		this.$1$SearchDivField = null;
		this.$1$FormDivField = null;
		this.$1$GridDivField = null;
		this.$1$FormField = null;
		this.$1$TableFuentesField = null;
		this.$1$ListFuentesField = null;
		this.$1$SelectedFuenteField = null;
		this.$1$ColumnsField = null;
		this.$1$BNewField = null;
		this.$1$BDeleteField = null;
		this.$1$BListField = null;
	};
	$MainModule.prototype = {
		get_$searchDiv: function() {
			return this.$1$SearchDivField;
		},
		set_$searchDiv: function(value) {
			this.$1$SearchDivField = value;
		},
		get_$formDiv: function() {
			return this.$1$FormDivField;
		},
		set_$formDiv: function(value) {
			this.$1$FormDivField = value;
		},
		get_$gridDiv: function() {
			return this.$1$GridDivField;
		},
		set_$gridDiv: function(value) {
			this.$1$GridDivField = value;
		},
		get_$form: function() {
			return this.$1$FormField;
		},
		set_$form: function(value) {
			this.$1$FormField = value;
		},
		get_$tableFuentes: function() {
			return this.$1$TableFuentesField;
		},
		set_$tableFuentes: function(value) {
			this.$1$TableFuentesField = value;
		},
		get_$listFuentes: function() {
			return this.$1$ListFuentesField;
		},
		set_$listFuentes: function(value) {
			this.$1$ListFuentesField = value;
		},
		get_$selectedFuente: function() {
			return this.$1$SelectedFuenteField;
		},
		set_$selectedFuente: function(value) {
			this.$1$SelectedFuenteField = value;
		},
		get_$columns: function() {
			return this.$1$ColumnsField;
		},
		set_$columns: function(value) {
			this.$1$ColumnsField = value;
		},
		get_$bNew: function() {
			return this.$1$BNewField;
		},
		set_$bNew: function(value) {
			this.$1$BNewField = value;
		},
		get_$bDelete: function() {
			return this.$1$BDeleteField;
		},
		set_$bDelete: function(value) {
			this.$1$BDeleteField = value;
		},
		get_$bList: function() {
			return this.$1$BListField;
		},
		set_$bList: function(value) {
			this.$1$BListField = value;
		},
		$paint: function(parent) {
			Cayita.UI.Div.$ctor1(parent, function(div) {
				div.className = 'span6 offset3 well';
				$(div).hide();
			});
			this.set_$searchDiv(Cayita.UI.Div.$ctor1(null, ss.mkdel(this, function(searchdiv) {
				searchdiv.className = 'span6 offset3 nav';
				this.set_$bNew(Cayita.UI.IconButton.$ctor(searchdiv, ss.mkdel(this, function(abn, ibn) {
					ibn.className = 'icon-plus-sign icon-large';
					$(abn).click(ss.mkdel(this, function(evt) {
						Cayita.UI.ElementBase.hide(this.get_$gridDiv());
						Cayita.UI.ElementBase.fadeIn(this.get_$formDiv());
						Cayita.UI.Form.element(this.get_$form()).reset();
						Cayita.UI.ButtonBase.element(this.get_$bDelete()).disabled = true;
						Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = false;
					}));
				})));
				this.set_$bDelete(Cayita.UI.IconButton.$ctor(searchdiv, ss.mkdel(this, function(abn1, ibn1) {
					ibn1.className = 'icon-remove-sign icon-large';
					abn1.disabled = true;
					$(abn1).click(ss.mkdel(this, function(evt1) {
						this.$removeRow();
					}));
				})));
				this.set_$bList(Cayita.UI.IconButton.$ctor(searchdiv, ss.mkdel(this, function(abn2, ibn2) {
					ibn2.className = 'icon-reorder icon-large';
					$(abn2).click(ss.mkdel(this, function(evt2) {
						Cayita.UI.ElementBase.hide(this.get_$formDiv());
						Cayita.UI.ElementBase.fadeIn(this.get_$gridDiv());
						Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = true;
					}));
				})));
			})));
			Cayita.UI.ElementBase.appendTo(this.get_$searchDiv(), parent);
			this.set_$gridDiv(Cayita.UI.Div.$ctor1(null, ss.mkdel(this, function(gdiv) {
				gdiv.className = 'span6 offset3';
				this.set_$tableFuentes(Cayita.UI.HtmlTable.$ctor2(gdiv, ss.mkdel(this, function(table) {
					this.$initTable(table);
					this.$loadFuentes(table);
				})));
			})));
			Cayita.UI.ElementBase.appendTo(this.get_$gridDiv(), parent);
			this.set_$formDiv(Cayita.UI.Div.$ctor1(null, ss.mkdel(this, function(formdiv) {
				formdiv.className = 'span6 offset3 well';
				$(formdiv).hide();
				this.set_$form(Cayita.UI.Form.$ctor1(formdiv, ss.mkdel(this, function(f) {
					f.className = 'form-horizontal';
					f.action = 'api/Fuente/';
					var inputId = Cayita.UI.InputText.$ctor2(f, function(e) {
						e.name = 'Id';
						$(e).hide();
					});
					var cbTipo = Cayita.UI.SelectField.$ctor1(f, function(e1) {
						e1.name = 'Tipo';
						e1.className = 'span12';
						Cayita.UI.HtmlOption.$ctor1(e1, function(o) {
							o.value = '';
							o.selected = true;
							o.text = 'Seleccione el tipo ';
						});
						Cayita.UI.HtmlOption.$ctor1(e1, function(o1) {
							o1.value = 'Credito';
							o1.text = 'Credito';
						});
						Cayita.UI.HtmlOption.$ctor1(e1, function(o2) {
							o2.value = 'Debito';
							o2.text = 'Debito';
						});
					});
					var fieldCodigo = Cayita.UI.TextField.$ctor2(f, function(field) {
						field.className = 'span12';
						field.name = 'Codigo';
						field.setAttribute('placeholder', 'Codigo del Recurso ## Grupo ##.## Item');
					});
					var fieldNombre = Cayita.UI.TextField.$ctor2(f, function(field1) {
						field1.className = 'span12';
						field1.name = 'Nombre';
						field1.setAttribute('placeholder', 'Nombre del Recurso');
					});
					var bt = Cayita.UI.SubmitButton.$ctor1(f, function(b) {
						$(b).text('Guardar');
						$(b).button.defaults.loadingText = ' Guardando ...';
						b.className = 'btn btn-info btn-block';
					});
					var vo = ValidateOptions.addRule(ValidateOptions.addRule(ValidateOptions.addRule(ValidateOptions.setSubmitHandler(ValidateOptions.$ctor(), ss.mkdel(this, function(form) {
						Cayita.UI.ButtonBase.showLoadingText(bt);
						var action = form.action + (ss.isNullOrEmptyString(Cayita.UI.InputBase.value(inputId)) ? 'create' : 'update');
						$.post(action, $(form).serialize(), function(cb) {
						}, 'json').success(ss.mkdel(this, function(d) {
							console.log('Success guardar recurso', d);
							if (ss.isNullOrEmptyString(Cayita.UI.InputBase.value(inputId))) {
								this.$appendRow(d.Result[0]);
							}
							else {
								this.$updateRow(d.Result[0]);
							}
							Cayita.UI.ElementBase.fadeOut(this.get_$formDiv());
							Cayita.UI.ElementBase.show(this.get_$gridDiv());
						})).error(function(request, textStatus, error) {
							console.log('request', request);
							Cayita.UI.Div.createAlertErrorBefore(form.elements[0], textStatus + ': ' + request.statusText);
						}).always(function(a) {
							Cayita.UI.ButtonBase.resetLoadingText(bt);
						});
					})), function(rule, msg) {
						rule.element = Cayita.UI.HtmlSelect.element(cbTipo);
						Rule.required(rule.rule);
						Message.required(msg, 'Seleccione tipo de Recurso');
					}), function(rule1, msg1) {
						rule1.element = Cayita.UI.InputText.element(fieldNombre);
						Rule.maxlength(Rule.required(rule1.rule), 64);
						Message.maxlength(Message.required(msg1, 'Indique el nombre del Recurso'), 'Maximo 64 Caracteres');
					}), function(rule2, msg2) {
						rule2.element = Cayita.UI.InputText.element(fieldCodigo);
						Rule.maxlength(Rule.required(rule2.rule), 5);
						Message.maxlength(Message.required(msg2, 'Indique el codigo del Recurso'), 'Maximo 5 caracteres');
					});
					$(f).validate(vo);
				})));
			})));
			Cayita.UI.ElementBase.appendTo(this.get_$formDiv(), parent);
		},
		$loadFuentes: function(table) {
			this.$initListFuentes();
			$.get('api/Fuente/read', {}, function(cb) {
			}, 'json').success(ss.mkdel(this, function(data) {
				this.set_$listFuentes(data.Result);
				Cayita.UI.Ext.load$2(Calamar.Model.Fuente).call(null, table, this.get_$listFuentes(), this.get_$columns(), 'Id');
				$('tbody tr', table).addClass('rowlink');
			})).error(ss.mkdel(this, function(request, textStatus, error) {
				Cayita.UI.Ext.load$2(Calamar.Model.Fuente).call(null, table, this.get_$listFuentes(), this.get_$columns(), 'Id');
				console.log('error', request, textStatus, error);
				Cayita.UI.Div.createAlertErrorBefore(table, textStatus + ': ' + request.statusText);
			})).always(function(a) {
			});
		},
		$removeRow: function() {
			$.post('api/Fuente/destroy', { Id: this.get_$selectedFuente().index }, function(cb) {
			}, 'json').success(ss.mkdel(this, function(d) {
				console.log('Success Remove concepto', d);
				$(this.get_$selectedFuente().row).remove();
				var concepto = Enumerable.from(this.get_$listFuentes()).first(ss.mkdel(this, function(f) {
					return f.Id === parseInt(this.get_$selectedFuente().index);
				}));
				ss.remove(this.get_$listFuentes(), concepto);
				this.get_$selectedFuente().index = '';
				this.get_$selectedFuente().row = null;
				Cayita.UI.ButtonBase.element(this.get_$bDelete()).disabled = true;
				Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = true;
				Cayita.UI.ElementBase.hide(this.get_$formDiv());
				Cayita.UI.ElementBase.fadeIn(this.get_$gridDiv());
			})).error(ss.mkdel(this, function(request, textStatus, error) {
				console.log('request', request);
				Cayita.UI.Div.createAlertErrorBefore(Cayita.UI.Form.element(this.get_$form()).elements[0], textStatus + ': ' + request.statusText);
			})).always(function(a) {
			});
		},
		$appendRow: function(data) {
			var table = Cayita.UI.HtmlTable.element(this.get_$tableFuentes());
			ss.add(this.get_$listFuentes(), data);
			Cayita.UI.Ext.createRow(Calamar.Model.Fuente).call(null, table, data, this.get_$columns(), 'Id');
			$('tbody tr', table).removeClass('info');
			var row = $('tbody tr', table).last().addClass('rowlink info').get(0);
			this.get_$selectedFuente().index = row.getAttribute('index');
			this.get_$selectedFuente().row = row;
			Cayita.UI.ButtonBase.element(this.get_$bDelete()).disabled = false;
			Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = true;
		},
		$updateRow: function(data) {
			var concepto = Enumerable.from(this.get_$listFuentes()).first(function(f) {
				return f.Id === data.Id;
			});
			cayita.fn.populateFrom(concepto, data);
			Cayita.UI.Ext.updateRow(Calamar.Model.Fuente).call(null, Cayita.UI.HtmlTable.element(this.get_$tableFuentes()), concepto, this.get_$columns(), 'Id');
		},
		$initTable: function(table) {
			this.$initListFuentes();
			this.$defineTableColumns();
			table.className = 'table table-striped table-hover table-condensed';
			table.setAttribute('data-provides', 'rowlink');
			Cayita.UI.Ext.createHeader(Calamar.Model.Fuente).call(null, table, this.get_$columns());
			$(table).on('click', 'tbody tr', ss.mkdel(this, function(e) {
				console.log('event click row e', e);
				var row = e.currentTarget;
				$('tbody tr', table).removeClass('info');
				$(row).addClass('info');
				this.get_$selectedFuente().index = row.getAttribute('index');
				this.get_$selectedFuente().row = row;
				var concepto = Enumerable.from(this.get_$listFuentes()).firstOrDefault(ss.mkdel(this, function(f) {
					return f.Id === parseInt(this.get_$selectedFuente().index);
				}), ss.getDefaultValue(Calamar.Model.Fuente));
				Cayita.UI.ButtonBase.element(this.get_$bDelete()).disabled = false;
				Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = false;
				Cayita.UI.Form.element(this.get_$form()).reset();
				Cayita.UI.Ext.load(Calamar.Model.Fuente).call(null, Cayita.UI.Form.element(this.get_$form()), concepto);
				Cayita.UI.ElementBase.hide(this.get_$gridDiv());
				$(Cayita.UI.Div.element(this.get_$formDiv())).fadeIn();
			}));
		},
		$defineTableColumns: function() {
			this.set_$columns([]);
			var $t2 = this.get_$columns();
			var $t1 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Fuente]).$ctor();
			$t1.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell) {
				Cayita.UI.Anchor.$ctor1(cell, function(a) {
					a.innerText = 'Codigo';
				});
			}));
			$t1.value = function(f) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell1) {
					Cayita.UI.Anchor.$ctor1(cell1, function(a1) {
						a1.innerText = f.Codigo;
					});
				}));
			};
			ss.add($t2, $t1);
			var $t4 = this.get_$columns();
			var $t3 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Fuente]).$ctor();
			$t3.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell2) {
				cell2.innerText = 'Nombre';
			}));
			$t3.value = function(f1) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell3) {
					cell3.innerText = f1.Nombre;
				}));
			};
			ss.add($t4, $t3);
			var $t6 = this.get_$columns();
			var $t5 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Fuente]).$ctor();
			$t5.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell4) {
				cell4.innerText = 'Tipo';
			}));
			$t5.value = function(f2) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell5) {
					cell5.innerText = f2.Tipo;
				}));
			};
			ss.add($t6, $t5);
			var $t8 = this.get_$columns();
			var $t7 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Fuente]).$ctor();
			$t7.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell6) {
				cell6.innerText = 'Saldo';
				cell6.style.textAlign = 'right';
			}));
			$t7.value = function(f3) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell7) {
					cell7.innerText = Calamar.Model.Fuente.GetSaldo(f3).toString();
					cell7.style.textAlign = 'right';
					$(cell7).autoNumeric('init', { vMin: -999999999.99 });
				}));
			};
			ss.add($t8, $t7);
		},
		$initListFuentes: function() {
			this.set_$listFuentes([]);
			this.set_$selectedFuente(Cayita.UI.SelectedRow.$ctor());
		}
	};
	$MainModule.execute = function(parent) {
		(new $MainModule()).$paint(parent);
	};
	ss.registerClass(global, 'MainModule', $MainModule);
})();

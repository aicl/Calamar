(function() {
	////////////////////////////////////////////////////////////////////////////////
	// Aicl.Calamar.Scripts.ModuloGastos.MainModule
	var $MainModule = function() {
		this.$1$SearchDivField = null;
		this.$1$FormDivField = null;
		this.$1$GridDivField = null;
		this.$1$FormField = null;
		this.$1$TableGastosField = null;
		this.$1$ListGastosField = null;
		this.$1$SelectedGastoField = null;
		this.$1$ColumnsField = null;
		this.$1$BNewField = null;
		this.$1$BDeleteField = null;
		this.$1$BListField = null;
		this.$1$ListConceptosField = null;
		this.$1$ListFuentesField = null;
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
		get_$tableGastos: function() {
			return this.$1$TableGastosField;
		},
		set_$tableGastos: function(value) {
			this.$1$TableGastosField = value;
		},
		get_$listGastos: function() {
			return this.$1$ListGastosField;
		},
		set_$listGastos: function(value) {
			this.$1$ListGastosField = value;
		},
		get_$selectedGasto: function() {
			return this.$1$SelectedGastoField;
		},
		set_$selectedGasto: function(value) {
			this.$1$SelectedGastoField = value;
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
		get_$listConceptos: function() {
			return this.$1$ListConceptosField;
		},
		set_$listConceptos: function(value) {
			this.$1$ListConceptosField = value;
		},
		get_$listFuentes: function() {
			return this.$1$ListFuentesField;
		},
		set_$listFuentes: function(value) {
			this.$1$ListFuentesField = value;
		},
		$paint: function(parent) {
			Cayita.UI.Div.$ctor1(parent, function(div) {
				div.className = 'span6 offset3 well';
				$(div).hide();
			});
			this.set_$searchDiv(Cayita.UI.Div.$ctor1(null, ss.mkdel(this, function(searchdiv) {
				searchdiv.className = 'span6 offset3 nav';
				var inputFecha = Cayita.UI.InputText.element(Cayita.UI.InputText.$ctor2(searchdiv, function(ip) {
					ip.className = 'input-medium search-query';
					ip.setAttribute('data-mask', '99.99.9999');
					ip.setAttribute('placeholder', 'dd.mm.aaaa');
				}));
				Cayita.UI.IconButton.$ctor(searchdiv, ss.mkdel(this, function(abn, ibn) {
					ibn.className = 'icon-search icon-large';
					$(abn).click(ss.mkdel(this, function(evt) {
						if (!cayita.fn.isDateFormatted(inputFecha.value)) {
							Cayita.UI.Div.createAlertErrorAfter(Cayita.UI.Div.element(this.get_$searchDiv()), 'Digite una fecha valida');
							return;
						}
						this.$loadGastos(cayita.fn.toServerDate(inputFecha.value));
					}));
				}));
				this.set_$bNew(Cayita.UI.IconButton.$ctor(searchdiv, ss.mkdel(this, function(abn1, ibn1) {
					ibn1.className = 'icon-plus-sign icon-large';
					$(abn1).click(ss.mkdel(this, function(evt1) {
						Cayita.UI.ElementBase.fadeIn(this.get_$formDiv());
						Cayita.UI.ElementBase.fadeOut(this.get_$gridDiv());
						Cayita.UI.Form.element(this.get_$form()).reset();
						Cayita.UI.ButtonBase.element(this.get_$bDelete()).disabled = true;
					}));
				})));
				this.set_$bDelete(Cayita.UI.IconButton.$ctor(searchdiv, ss.mkdel(this, function(abn2, ibn2) {
					ibn2.className = 'icon-remove-sign icon-large';
					abn2.disabled = true;
					$(abn2).click(ss.mkdel(this, function(evt2) {
						this.$removeRow();
					}));
				})));
				this.set_$bList(Cayita.UI.IconButton.$ctor(searchdiv, ss.mkdel(this, function(abn3, ibn3) {
					ibn3.className = 'icon-reorder icon-large';
					abn3.disabled = true;
					$(abn3).click(ss.mkdel(this, function(evt3) {
						Cayita.UI.ElementBase.fadeOut(this.get_$formDiv());
						Cayita.UI.ElementBase.fadeIn(this.get_$gridDiv());
						abn3.disabled = true;
					}));
				})));
			})));
			Cayita.UI.ElementBase.appendTo(this.get_$searchDiv(), parent);
			this.set_$formDiv(Cayita.UI.Div.$ctor1(null, ss.mkdel(this, function(formdiv) {
				formdiv.className = 'span6 offset3 well';
				this.set_$form(Cayita.UI.Form.$ctor1(formdiv, ss.mkdel(this, function(f) {
					f.className = 'form-horizontal';
					f.action = 'api/Gasto/';
					f.method = 'post';
					var inputId = Cayita.UI.InputText.$ctor2(f, function(e) {
						e.name = 'Id';
						$(e).hide();
					});
					var cbConcepto = Cayita.UI.SelectField.$ctor1(f, ss.mkdel(this, function(e1) {
						e1.name = 'IdConcepto';
						e1.className = 'span12';
						Cayita.UI.HtmlOption.$ctor1(e1, function(o) {
							o.value = '';
							o.selected = true;
							o.text = 'Seleccione el concepto ...';
						});
						this.$loadConceptos(e1);
					}));
					var cbFuente = Cayita.UI.SelectField.$ctor1(f, ss.mkdel(this, function(e2) {
						e2.name = 'IdFuente';
						e2.className = 'span12';
						Cayita.UI.HtmlOption.$ctor1(e2, function(o1) {
							o1.value = '';
							o1.selected = true;
							o1.text = 'Seleccione la fuente de pago ...';
						});
						this.$loadFuentes(e2);
					}));
					var fieldValor = Cayita.UI.TextField.$ctor2(f, function(field) {
						field.className = 'span12';
						field.name = 'Valor';
						field.setAttribute('placeholder', '$$$$$$$$$$');
						$(field).autoNumeric('init');
						field.style.textAlign = 'right';
					});
					Cayita.UI.TextField.$ctor2(f, function(field1) {
						field1.className = 'span12';
						field1.name = 'Beneficiario';
						field1.setAttribute('placeholder', 'Pagado a ....');
					});
					Cayita.UI.TextField.$ctor2(f, function(field2) {
						field2.className = 'span12';
						field2.name = 'Descripcion';
						field2.setAttribute('placeholder', 'Descripcion');
					});
					var bt = Cayita.UI.SubmitButton.$ctor1(f, function(b) {
						$(b).text('Guardar');
						$(b).button.defaults.loadingText = ' Guardando ...';
						b.className = 'btn btn-info btn-block';
					});
					var vo = ValidateOptions.addRule(ValidateOptions.addRule(ValidateOptions.addRule(ValidateOptions.setSubmitHandler(ValidateOptions.$ctor(), ss.mkdel(this, function(form) {
						Cayita.UI.ButtonBase.showLoadingText(bt);
						var action = form.action + (ss.isNullOrEmptyString(Cayita.UI.InputBase.value(inputId)) ? 'create' : 'update');
						$.post(action, $(form).autoNumeric('getString'), function(cb) {
						}, 'json').success(ss.mkdel(this, function(d) {
							console.log('Success guardar gasto', d);
							if (ss.isNullOrEmptyString(Cayita.UI.InputBase.value(inputId))) {
								this.$appendRow(d.Result[0]);
							}
							else {
								this.$updateRow(d.Result[0]);
							}
							form.reset();
						})).error(function(request, textStatus, error) {
							console.log('request', request);
							console.log('error', error);
							Cayita.UI.Div.createAlertErrorBefore(form.elements[0], textStatus + ': ' + request.statusText);
						}).always(function(a) {
							Cayita.UI.ButtonBase.resetLoadingText(bt);
						});
					})), function(rule, msg) {
						rule.element = Cayita.UI.InputText.element(fieldValor);
						Rule.required(rule.rule);
						Message.required(msg, 'Digite el valor del gasto');
					}), function(rule1, msg1) {
						rule1.element = Cayita.UI.HtmlSelect.element(cbConcepto);
						Rule.required(rule1.rule);
						Message.required(msg1, 'Seleccione el concepto');
					}), function(rule2, msg2) {
						rule2.element = Cayita.UI.HtmlSelect.element(cbFuente);
						Rule.required(rule2.rule);
						Message.required(msg2, 'Seleccione al fuente del pago');
					});
					$(f).validate(vo);
				})));
			})));
			Cayita.UI.ElementBase.appendTo(this.get_$formDiv(), parent);
			this.set_$gridDiv(Cayita.UI.Div.$ctor1(null, ss.mkdel(this, function(gdiv) {
				gdiv.className = 'span10 offset1';
				this.set_$tableGastos(Cayita.UI.HtmlTable.$ctor2(gdiv, ss.mkdel(this, function(table) {
					this.$initTable(table);
				})));
				$(gdiv).hide();
			})));
			Cayita.UI.ElementBase.appendTo(this.get_$gridDiv(), parent);
		},
		$loadConceptos: function(cbox) {
			this.set_$listConceptos([]);
			$.get('api/Concepto/read', { Tipo: 'Egreso', SoloDetalles: true }, function(cb) {
			}, 'json').success(ss.mkdel(this, function(data) {
				this.set_$listConceptos(data.Result);
				for (var $t1 = 0; $t1 < data.Result.length; $t1++) {
					var d = { $: data.Result[$t1] };
					Cayita.UI.HtmlOption.$ctor1(cbox, ss.mkdel({ d: d }, function(option) {
						option.value = this.d.$.Id.toString();
						option.text = this.d.$.Nombre;
					}));
				}
			})).error(function(request, textStatus, error) {
				console.log('error', request, textStatus, error);
			}).always(function(a) {
			});
		},
		$loadFuentes: function(cbox) {
			this.set_$listFuentes([]);
			$.get('api/Fuente/read', { SoloDetalles: true }, function(cb) {
			}, 'json').success(ss.mkdel(this, function(data) {
				this.set_$listFuentes(data.Result);
				for (var $t1 = 0; $t1 < data.Result.length; $t1++) {
					var d = { $: data.Result[$t1] };
					Cayita.UI.HtmlOption.$ctor1(cbox, ss.mkdel({ d: d }, function(option) {
						option.value = this.d.$.Id.toString();
						option.text = this.d.$.Nombre;
					}));
				}
			})).error(function(request, textStatus, error) {
				console.log('error', request, textStatus, error);
			}).always(function(a) {
			});
		},
		$loadGastos: function(date) {
			var table = Cayita.UI.HtmlTable.element(this.get_$tableGastos());
			this.$initListGastos();
			$.get('api/Gasto/read', { FechaDesde: date }, function(cb) {
			}, 'json').success(ss.mkdel(this, function(data) {
				this.set_$listGastos(data.Result);
				Cayita.UI.Ext.load$2(Calamar.Model.Gasto).call(null, table, this.get_$listGastos(), this.get_$columns(), 'Id');
				$('tbody tr', table).addClass('rowlink');
			})).error(ss.mkdel(this, function(request, textStatus, error) {
				Cayita.UI.Ext.load$2(Calamar.Model.Gasto).call(null, table, this.get_$listGastos(), this.get_$columns(), 'Id');
				console.log('error', request, textStatus, error);
				Cayita.UI.Div.createAlertErrorBefore(table, textStatus + ': ' + request.statusText);
			})).always(ss.mkdel(this, function(a) {
				Cayita.UI.ElementBase.hide(this.get_$formDiv());
				Cayita.UI.ElementBase.fadeIn(this.get_$gridDiv());
			}));
		},
		$removeRow: function() {
			$.post('api/Gasto/destroy', { Id: this.get_$selectedGasto().index }, function(cb) {
			}, 'json').success(ss.mkdel(this, function(d) {
				console.log('Success Remove gasto', d);
				$(this.get_$selectedGasto().row).remove();
				var gasto = Enumerable.from(this.get_$listGastos()).first(ss.mkdel(this, function(f) {
					return f.Id === parseInt(this.get_$selectedGasto().index);
				}));
				ss.remove(this.get_$listGastos(), gasto);
				this.get_$selectedGasto().index = '';
				this.get_$selectedGasto().row = null;
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
			var table = Cayita.UI.HtmlTable.element(this.get_$tableGastos());
			ss.add(this.get_$listGastos(), data);
			Cayita.UI.Ext.createRow(Calamar.Model.Gasto).call(null, table, data, this.get_$columns(), 'Id');
			$('tbody tr', table).removeClass('info');
			var row = $('tbody tr', table).last().addClass('rowlink info').get(0);
			this.get_$selectedGasto().index = row.getAttribute('index');
			this.get_$selectedGasto().row = row;
			Cayita.UI.ButtonBase.element(this.get_$bDelete()).disabled = true;
			Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = false;
		},
		$updateRow: function(data) {
			var gasto = Enumerable.from(this.get_$listGastos()).first(function(f) {
				return f.Id === data.Id;
			});
			cayita.fn.populateFrom(gasto, data);
			Cayita.UI.Ext.updateRow(Calamar.Model.Gasto).call(null, Cayita.UI.HtmlTable.element(this.get_$tableGastos()), gasto, this.get_$columns(), 'Id');
			Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = true;
			Cayita.UI.ElementBase.hide(this.get_$formDiv());
			Cayita.UI.ElementBase.fadeIn(this.get_$gridDiv());
		},
		$initTable: function(table) {
			this.$initListGastos();
			this.$defineTableColumns();
			table.className = 'table table-striped table-hover table-condensed';
			table.setAttribute('data-provides', 'rowlink');
			Cayita.UI.Ext.createHeader(Calamar.Model.Gasto).call(null, table, this.get_$columns());
			$(table).on('click', 'tbody tr', ss.mkdel(this, function(e) {
				console.log('event click row e', e);
				var row = e.currentTarget;
				$('tbody tr', table).removeClass('info');
				$(row).addClass('info');
				this.get_$selectedGasto().index = row.getAttribute('index');
				this.get_$selectedGasto().row = row;
				var gasto = Enumerable.from(this.get_$listGastos()).firstOrDefault(ss.mkdel(this, function(f) {
					return f.Id === parseInt(this.get_$selectedGasto().index);
				}), ss.getDefaultValue(Calamar.Model.Gasto));
				Cayita.UI.ButtonBase.element(this.get_$bDelete()).disabled = false;
				Cayita.UI.ButtonBase.element(this.get_$bList()).disabled = false;
				Cayita.UI.Form.element(this.get_$form()).reset();
				Cayita.UI.Ext.load(Calamar.Model.Gasto).call(null, Cayita.UI.Form.element(this.get_$form()), gasto);
				Cayita.UI.ElementBase.hide(this.get_$gridDiv());
				$(Cayita.UI.Div.element(this.get_$formDiv())).fadeIn();
			}));
		},
		$defineTableColumns: function() {
			this.set_$columns([]);
			var $t2 = this.get_$columns();
			var $t1 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Gasto]).$ctor();
			$t1.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell) {
				Cayita.UI.Anchor.$ctor1(cell, function(a) {
					a.innerText = 'Concepto';
				});
			}));
			$t1.value = ss.mkdel(this, function(f) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(ss.mkdel(this, function(cell1) {
					Cayita.UI.Anchor.$ctor1(cell1, ss.mkdel(this, function(a1) {
						a1.innerText = Calamar.Model.Gasto.GetConcepto(f, this.get_$listConceptos()).Nombre;
					}));
				})));
			});
			ss.add($t2, $t1);
			var $t4 = this.get_$columns();
			var $t3 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Gasto]).$ctor();
			$t3.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell2) {
				cell2.innerText = 'Fuente';
			}));
			$t3.value = ss.mkdel(this, function(f1) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(ss.mkdel(this, function(cell3) {
					cell3.innerText = Calamar.Model.Gasto.GetFuente(f1, this.get_$listFuentes()).Nombre;
				})));
			});
			ss.add($t4, $t3);
			var $t6 = this.get_$columns();
			var $t5 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Gasto]).$ctor();
			$t5.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell4) {
				cell4.innerText = 'Valor';
				cell4.style.textAlign = 'right';
			}));
			$t5.value = function(f2) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell5) {
					cell5.innerText = f2.Valor.toString();
					cell5.style.textAlign = 'right';
					$(cell5).autoNumeric('init');
				}));
			};
			ss.add($t6, $t5);
			var $t8 = this.get_$columns();
			var $t7 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Gasto]).$ctor();
			$t7.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell6) {
				cell6.innerText = 'Pagado a';
			}));
			$t7.value = function(f3) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell7) {
					cell7.innerText = f3.Beneficiario;
				}));
			};
			ss.add($t8, $t7);
			var $t10 = this.get_$columns();
			var $t9 = ss.makeGenericType(Cayita.UI.TableColumn$1, [Calamar.Model.Gasto]).$ctor();
			$t9.header = Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell8) {
				cell8.innerText = 'Detalle';
			}));
			$t9.value = function(f4) {
				return Cayita.UI.TableCell.element(Cayita.UI.TableCell.$ctor1(function(cell9) {
					cell9.innerText = f4.Descripcion;
				}));
			};
			ss.add($t10, $t9);
		},
		$initListGastos: function() {
			this.set_$listGastos([]);
			this.set_$selectedGasto(Cayita.UI.SelectedRow.$ctor());
		}
	};
	$MainModule.execute = function(parent) {
		(new $MainModule()).$paint(parent);
	};
	ss.registerClass(global, 'MainModule', $MainModule);
})();

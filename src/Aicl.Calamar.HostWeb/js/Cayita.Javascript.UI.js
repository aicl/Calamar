(function() {
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.Plugins.Message
	var $Message = function() {
	};
	$Message.createInstance = function() {
		return $Message.$ctor();
	};
	$Message.remote = function($this, message) {
		$this.msg.remote = message;
		return $this;
	};
	$Message.required = function($this, message) {
		$this.msg.required = message;
		return $this;
	};
	$Message.email = function($this, message) {
		$this.msg.email = message;
		return $this;
	};
	$Message.url = function($this, message) {
		$this.msg.url = message;
		return $this;
	};
	$Message.date = function($this, message) {
		$this.msg.date = message;
		return $this;
	};
	$Message.dateISO = function($this, message) {
		$this.msg.dateISO = message;
		return $this;
	};
	$Message.number = function($this, message) {
		$this.msg.number = message;
		return $this;
	};
	$Message.digits = function($this, message) {
		$this.msg.digits = message;
		return $this;
	};
	$Message.creditcard = function($this, message) {
		$this.msg.creditcard = message;
		return $this;
	};
	$Message.equalTo = function($this, message) {
		$this.msg.equalTo = message;
		return $this;
	};
	$Message.maxlength = function($this, message) {
		$this.msg.maxlength = message;
		return $this;
	};
	$Message.minlength = function($this, message) {
		$this.msg.minlength = message;
		return $this;
	};
	$Message.max = function($this, message) {
		$this.msg.max = message;
		return $this;
	};
	$Message.min = function($this, message) {
		$this.msg.min = message;
		return $this;
	};
	$Message.range = function($this, message) {
		$this.msg.range = message;
		return $this;
	};
	$Message.rangelength = function($this, message) {
		$this.msg.rangelength = message;
		return $this;
	};
	$Message.$ctor = function() {
		var $this = {};
		$this.msg = {};
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.Plugins.MessageFor
	var $MessageFor = function() {
	};
	$MessageFor.createInstance = function() {
		return $MessageFor.$ctor();
	};
	$MessageFor.$ctor = function() {
		var $this = {};
		$this.element = null;
		$this.message = null;
		$this.message = $Message.$ctor();
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.Plugins.Range
	var $Range = function() {
	};
	$Range.createInstance = function() {
		return $Range.$ctor();
	};
	$Range.$ctor = function() {
		var $this = {};
		$this.top = 0;
		$this.bottom = 0;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.Plugins.Rule
	var $Rule = function() {
	};
	$Rule.createInstance = function() {
		return $Rule.$ctor();
	};
	$Rule.remote = function($this, url) {
		$this.rl.url = url;
		return $this;
	};
	$Rule.remote$1 = function($this, url, method) {
		$this.rl.url = { url: url, method: method };
		return $this;
	};
	$Rule.required = function($this) {
		$this.rl.required = true;
		return $this;
	};
	$Rule.required$1 = function($this, handler) {
		$this.rl.required = handler;
		return $this;
	};
	$Rule.email = function($this, dependCallback) {
		if (ss.isNullOrUndefined(dependCallback)) {
			$this.rl.mail = true;
		}
		else {
			$this.rl.mail = { depends: dependCallback };
		}
		return $this;
	};
	$Rule.url = function($this) {
		$this.rl.url = true;
		return $this;
	};
	$Rule.date = function($this) {
		$this.rl.date = true;
		return $this;
	};
	$Rule.dateISO = function($this) {
		$this.rl.dateISO = true;
		return $this;
	};
	$Rule.number = function($this) {
		$this.rl.number = true;
		return $this;
	};
	$Rule.digits = function($this) {
		$this.rl.digits = true;
		return $this;
	};
	$Rule.creditcard = function($this, dependCallback) {
		if (ss.isValue(dependCallback)) {
			$this.rl.creditcard = true;
		}
		else {
			$this.rl.creditcard = { depends: dependCallback };
		}
		return $this;
	};
	$Rule.equalTo = function($this, element) {
		$this.rl.equalTo = '#' + element.id;
		return $this;
	};
	$Rule.maxlength = function($this, value) {
		$this.rl.maxlength = value;
		return $this;
	};
	$Rule.minlength = function($this, value) {
		$this.rl.minlength = value;
		return $this;
	};
	$Rule.max = function($this, value) {
		$this.rl.max = value;
		return $this;
	};
	$Rule.min = function($this, value) {
		$this.rl.min = value;
		return $this;
	};
	$Rule.range = function($this, range) {
		$this.rl.range = [range.bottom, range.top];
		return $this;
	};
	$Rule.rangeLength = function($this, range) {
		$this.rl.rangelength = [range.bottom, range.top];
		return $this;
	};
	$Rule.$ctor = function() {
		var $this = {};
		$this.rl = {};
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.Plugins.RuleFor
	var $RuleFor = function() {
	};
	$RuleFor.createInstance = function() {
		return $RuleFor.$ctor();
	};
	$RuleFor.$ctor = function() {
		var $this = {};
		$this.element = null;
		$this.rule = null;
		$this.rule = $Rule.$ctor();
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.Plugins.ValidateOptions
	var $ValidateOptions = function() {
	};
	$ValidateOptions.createInstance = function() {
		return $ValidateOptions.$ctor();
	};
	$ValidateOptions.setSubmitHandler = function($this, handler) {
		$this.submitHandler = handler;
		return $this;
	};
	$ValidateOptions.setHighlightHandler = function($this, handler) {
		$this.highlight = handler;
		return $this;
	};
	$ValidateOptions.setUnhighlightHandler = function($this, handler) {
		$this.unhighlight = handler;
		return $this;
	};
	$ValidateOptions.setSuccessHandler = function($this, handler) {
		$this.succes = handler;
		return $this;
	};
	$ValidateOptions.addRule = function($this, rule) {
		var rulefor = $RuleFor.$ctor();
		var msg = $Message.$ctor();
		rule(rulefor, msg);
		$this.rules[rulefor.element.name] = rulefor.rule.rl;
		$this.messages[rulefor.element.name] = msg.msg;
		return $this;
	};
	$ValidateOptions.$ctor = function() {
		var $this = {};
		$this.submitHandler = null;
		$this.highlight = null;
		$this.unhighlight = null;
		$this.succes = null;
		$this.messages = {};
		$this.rules = {};
		$ValidateOptions.setHighlightHandler($this, function(element) {
			$(element).closest('.control-group').addClass('error');
		});
		$ValidateOptions.setSuccessHandler($this, function(label) {
			label.closest('.control-group').addClass('success');
		});
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.AppError
	var $Cayita_Ajax_AppError = function() {
	};
	$Cayita_Ajax_AppError.createInstance = function() {
		return $Cayita_Ajax_AppError.$ctor();
	};
	$Cayita_Ajax_AppError.$ctor = function() {
		var $this = {};
		$this.ErrorCode = null;
		$this.FieldName = null;
		$this.Message = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.ResponseError
	var $Cayita_Ajax_ResponseError = function() {
	};
	$Cayita_Ajax_ResponseError.createInstance = function() {
		return $Cayita_Ajax_ResponseError.$ctor();
	};
	$Cayita_Ajax_ResponseError.$ctor = function() {
		var $this = {};
		$this.ResponseStatus = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.ResponseStatus
	var $Cayita_Ajax_ResponseStatus = function() {
	};
	$Cayita_Ajax_ResponseStatus.createInstance = function() {
		return $Cayita_Ajax_ResponseStatus.$ctor();
	};
	$Cayita_Ajax_ResponseStatus.$ctor = function() {
		var $this = {};
		$this.ErrorCode = null;
		$this.Message = null;
		$this.Errors = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.ModuleBase
	var $Cayita_Javascript_ModuleBase = function() {
	};
	$Cayita_Javascript_ModuleBase.prototype = { execute: null };
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Anchor
	var $Cayita_UI_Anchor = function() {
	};
	$Cayita_UI_Anchor.$init = function($this, parent) {
		$Cayita_UI_ElementBase.createElement($this, 'a', parent, $Cayita_UI_ElementConfig.$ctor());
		$Cayita_UI_Anchor.element($this).href = '#';
	};
	$Cayita_UI_Anchor.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_Anchor.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Anchor.$init($this, parent);
		element($Cayita_UI_Anchor.element($this));
		return $this;
	};
	$Cayita_UI_Anchor.$ctor = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Anchor.$init($this, parent);
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Button
	var $Cayita_UI_Button = function() {
	};
	$Cayita_UI_Button.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ButtonBase.$ctor1(parent, $Cayita_UI_ButtonConfig.$ctor(), 'button');
		element($Cayita_UI_ButtonBase.element($this));
		return $this;
	};
	$Cayita_UI_Button.$ctor = function(parent) {
		var $this = $Cayita_UI_ButtonBase.$ctor1(parent, $Cayita_UI_ButtonConfig.$ctor(), 'button');
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ButtonBase
	var $Cayita_UI_ButtonBase = function() {
	};
	$Cayita_UI_ButtonBase.createButton = function($this, parent, config, type) {
		$Cayita_UI_ElementBase.createElement($this, 'button', parent, config);
		if (!String.isNullOrEmpty(type)) {
			$Cayita_UI_ButtonBase.element($this).type = type;
		}
		if (!String.isNullOrEmpty(config.text)) {
			$Cayita_UI_ButtonBase.text($this, config.text);
		}
		if (!String.isNullOrEmpty(config.loadingText)) {
			$Cayita_UI_ButtonBase.loadingText($this, config.loadingText);
		}
	};
	$Cayita_UI_ButtonBase.text = function($this, value) {
		$Cayita_UI_ElementBase.jSelect($this).text(value);
	};
	$Cayita_UI_ButtonBase.loadingText = function($this, value) {
		$($Cayita_UI_ButtonBase.element($this)).button.defaults.loadingText = value;
	};
	$Cayita_UI_ButtonBase.showLoadingText = function($this) {
		return $($Cayita_UI_ButtonBase.element($this)).button('loading');
	};
	$Cayita_UI_ButtonBase.resetLoadingText = function($this) {
		return $($Cayita_UI_ButtonBase.element($this)).button('reset');
	};
	$Cayita_UI_ButtonBase.toggle = function($this) {
		return $($Cayita_UI_ButtonBase.element($this)).toggle();
	};
	$Cayita_UI_ButtonBase.element = function($this) {
		return Type.cast($Cayita_UI_ElementBase.element($this), Element);
	};
	$Cayita_UI_ButtonBase.$ctor = function() {
		var $this = $Cayita_UI_ElementBase.$ctor();
		return $this;
	};
	$Cayita_UI_ButtonBase.$ctor1 = function(parent, config, type) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ButtonBase.createButton($this, parent, config, type);
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ButtonConfig
	var $Cayita_UI_ButtonConfig = function() {
	};
	$Cayita_UI_ButtonConfig.createInstance = function() {
		return $Cayita_UI_ButtonConfig.$ctor();
	};
	$Cayita_UI_ButtonConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.text = null;
		$this.loadingText = null;
		$this.cssClass = 'btn';
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.CheckboxConfig
	var $Cayita_UI_CheckboxConfig = function() {
	};
	$Cayita_UI_CheckboxConfig.createInstance = function() {
		return $Cayita_UI_CheckboxConfig.$ctor();
	};
	$Cayita_UI_CheckboxConfig.$ctor = function() {
		var $this = $Cayita_UI_InputConfig.$ctor();
		$this.checked = false;
		$this.value = 'true';
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.CheckboxField
	var $Cayita_UI_CheckboxField = function() {
	};
	$Cayita_UI_CheckboxField.$ctor = function(parent, field) {
		var $this = $Cayita_UI_CheckboxField.$ctor1($Cayita_UI_ElementBase.element(parent), field);
		return $this;
	};
	$Cayita_UI_CheckboxField.$ctor1 = function(parent, field) {
		var $this = $Cayita_UI_InputCheckbox.$ctor();
		$this.controlGroup = null;
		$this.controls = null;
		$this.controlGroup = $Cayita_UI_Div.createControlGroup$1(parent, function(cgDiv) {
			$this.controls = $Cayita_UI_Div.createControls$1(cgDiv, function(ctdiv) {
				var $t1 = $Cayita_UI_LabelConfig.$ctor();
				$t1.cssClass = 'checkbox';
				var label = $Cayita_UI_Label.$ctor(ctdiv, $t1);
				$Cayita_UI_InputCheckbox.init($this, null, $Cayita_UI_CheckboxConfig.$ctor());
				$Cayita_UI_Label.forField$1(label, $Cayita_UI_InputCheckbox.element($this).id);
				field($Cayita_UI_ElementBase.element(label), $Cayita_UI_InputCheckbox.element($this));
				$Cayita_UI_ElementBase.element(label).appendChild($Cayita_UI_InputCheckbox.element($this));
			});
		});
		return $this;
	};
	$Cayita_UI_CheckboxField.$ctor2 = function(parent, textLabel, field) {
		var $this = $Cayita_UI_InputCheckbox.$ctor();
		$this.controlGroup = null;
		$this.controls = null;
		$this.controlGroup = $Cayita_UI_Div.createControlGroup$1(parent, function(cgDiv) {
			$this.controls = $Cayita_UI_Div.createControls$1(cgDiv, function(ctdiv) {
				var $t1 = $Cayita_UI_LabelConfig.$ctor();
				$t1.cssClass = 'checkbox';
				$t1.textLabel = textLabel;
				var label = $Cayita_UI_Label.$ctor(ctdiv, $t1);
				$Cayita_UI_InputCheckbox.init($this, null, $Cayita_UI_CheckboxConfig.$ctor());
				$Cayita_UI_Label.forField$1(label, $Cayita_UI_InputCheckbox.element($this).id);
				field($Cayita_UI_InputCheckbox.element($this));
				$Cayita_UI_ElementBase.element(label).appendChild($Cayita_UI_InputCheckbox.element($this));
			});
		});
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Div
	var $Cayita_UI_Div = function() {
	};
	$Cayita_UI_Div.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_Div.createControlGroup = function(parent) {
		return $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'control-group';
		});
	};
	$Cayita_UI_Div.createControlGroup$1 = function(parent, element) {
		var d = $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'control-group';
		});
		element($Cayita_UI_Div.element(d));
		return d;
	};
	$Cayita_UI_Div.createControls = function(parent) {
		return $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'controls';
		});
	};
	$Cayita_UI_Div.createControls$1 = function(parent, element) {
		var d = $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'controls';
		});
		element($Cayita_UI_Div.element(d));
		return d;
	};
	$Cayita_UI_Div.createContainer = function(parent) {
		return $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'container';
		});
	};
	$Cayita_UI_Div.createContainer$1 = function(parent, element) {
		var d = $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'container';
		});
		element($Cayita_UI_Div.element(d));
		return d;
	};
	$Cayita_UI_Div.createContainerFluid = function(parent) {
		return $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'container-fluid';
		});
	};
	$Cayita_UI_Div.createContainerFluid$1 = function(parent, element) {
		var d = $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'container-fluid';
		});
		element($Cayita_UI_Div.element(d));
		return d;
	};
	$Cayita_UI_Div.createRow = function(parent) {
		return $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'row';
		});
	};
	$Cayita_UI_Div.createRow$1 = function(parent, element) {
		var d = $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'row';
		});
		element($Cayita_UI_Div.element(d));
		return d;
	};
	$Cayita_UI_Div.createRowFluid = function(parent) {
		return $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'row-fluid';
		});
	};
	$Cayita_UI_Div.createRowFluid$1 = function(parent, element) {
		var d = $Cayita_UI_Div.$ctor1(parent, function(div) {
			div.className = 'row-fluid';
		});
		element($Cayita_UI_Div.element(d));
		return d;
	};
	$Cayita_UI_Div.createAlertError = function(parent, message) {
		var div = $Cayita_UI_Div.$ctor1(parent, function(de) {
			de.className = 'alert alert-error';
			$Cayita_UI_Anchor.$ctor1(de, function(element) {
				element.href = '#';
				element.className = 'close';
				element.setAttribute('data-dismiss', 'alert');
				element.innerText = '×';
			});
			$(de).append(message);
		});
		return div;
	};
	$Cayita_UI_Div.createAlertErrorBefore = function(element, message) {
		return $(String.format($Cayita_UI_Div.alertErrorTemplate(), message)).insertBefore(element);
	};
	$Cayita_UI_Div.alertErrorTemplate = function() {
		return '<div class=\'alert alert-error\'><a class=\'close\' data-dismiss=\'alert\' href=\'#\'>×</a>{0}</div>';
	};
	$Cayita_UI_Div.createAlertErrorAfter = function(element, message) {
		return $(String.format($Cayita_UI_Div.alertErrorTemplate(), message)).insertAfter(element);
	};
	$Cayita_UI_Div.createPageAlertError = function(element, message) {
		var div = $Cayita_UI_Div.$ctor1(element, function(de) {
			de.className = 'page-alert';
			$Cayita_UI_Div.createAlertError(de, message);
		});
		return div;
	};
	$Cayita_UI_Div.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'div', parent, $Cayita_UI_DivConfig.$ctor());
		element($Cayita_UI_Div.element($this));
		return $this;
	};
	$Cayita_UI_Div.$ctor = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'div', parent, $Cayita_UI_DivConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.DivConfig
	var $Cayita_UI_DivConfig = function() {
	};
	$Cayita_UI_DivConfig.createInstance = function() {
		return $Cayita_UI_DivConfig.$ctor();
	};
	$Cayita_UI_DivConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ElementBase
	var $Cayita_UI_ElementBase = function() {
	};
	$Cayita_UI_ElementBase.createElement = function($this, tagName, parent, config) {
		if (ss.isNullOrUndefined(config)) {
			config = $Cayita_UI_ElementConfig.$ctor();
		}
		$this.element_ = document.createElement(tagName);
		$this.element_.id = $Cayita_UI_ElementBase.createId($this, tagName);
		if (!config.visible) {
			$this.element_.style.display = 'none';
		}
		if (!String.isNullOrEmpty(config.name)) {
			$this.element_.setAttribute('name', config.name);
		}
		$Cayita_UI_ElementBase.className$1($this, config.cssClass);
		if (ss.isValue(parent)) {
			$(parent).append($this.element_);
		}
	};
	$Cayita_UI_ElementBase.createId = function($this, tagName) {
		var id = {};
		$Cayita_UI_ElementBase.$tags.tryGetValue(tagName, id);
		$Cayita_UI_ElementBase.$tags.set_item(tagName, ++id.$);
		return String.format('cyt-{0}-{1}', tagName, id.$);
	};
	$Cayita_UI_ElementBase.selectorById = function($this) {
		return '#' + $this.element_.id;
	};
	$Cayita_UI_ElementBase.className$1 = function($this, cssClass) {
		if (!String.isNullOrEmpty(cssClass)) {
			$this.element_.className = cssClass;
		}
	};
	$Cayita_UI_ElementBase.className = function($this) {
		return $this.element_.className;
	};
	$Cayita_UI_ElementBase.addClass = function($this, cssClass) {
		return $($this.element_).addClass(cssClass);
	};
	$Cayita_UI_ElementBase.removeClass$1 = function($this, cssClass) {
		return $($this.element_).removeClass(cssClass);
	};
	$Cayita_UI_ElementBase.removeClass = function($this) {
		return $($this.element_).removeClass();
	};
	$Cayita_UI_ElementBase.element = function($this) {
		return $this.element_;
	};
	$Cayita_UI_ElementBase.show = function($this) {
		return $($this.element_).show();
	};
	$Cayita_UI_ElementBase.hide = function($this) {
		return $($this.element_).hide();
	};
	$Cayita_UI_ElementBase.slideToggle = function($this) {
		return $($this.element_).slideToggle();
	};
	$Cayita_UI_ElementBase.fadeIn = function($this) {
		return $($this.element_).fadeIn();
	};
	$Cayita_UI_ElementBase.fadeOut = function($this) {
		return $($this.element_).fadeOut();
	};
	$Cayita_UI_ElementBase.fadeToggle = function($this) {
		return $($this.element_).fadeToggle();
	};
	$Cayita_UI_ElementBase.jSelect = function($this) {
		return $($this.element_);
	};
	$Cayita_UI_ElementBase.remove = function($this) {
		return $($this.element_).remove();
	};
	$Cayita_UI_ElementBase.empty = function($this) {
		return $($this.element_).empty();
	};
	$Cayita_UI_ElementBase.name$2 = function($this, name) {
		if (!String.isNullOrEmpty(name)) {
			$this.element_.setAttribute('name', name);
		}
		else {
			$this.element_.removeAttribute('name');
		}
	};
	$Cayita_UI_ElementBase.name$1 = function($this) {
		var name = $this.element_.getAttribute('name');
		return (ss.isNullOrUndefined(name) ? String.empty : name.toString());
	};
	$Cayita_UI_ElementBase.appendTo = function($this, parent) {
		$(parent).append($this.element_);
	};
	$Cayita_UI_ElementBase.$ctor = function() {
		var $this = {};
		$this.element_ = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ElementConfig
	var $Cayita_UI_ElementConfig = function() {
	};
	$Cayita_UI_ElementConfig.createInstance = function() {
		return $Cayita_UI_ElementConfig.$ctor();
	};
	$Cayita_UI_ElementConfig.$ctor = function() {
		var $this = {};
		$this.visible = false;
		$this.cssClass = null;
		$this.name = null;
		$this.visible = true;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.Extensions
	var $Cayita_UI_Ext = function() {
	};
	$Cayita_UI_Ext.load$1 = function(T) {
		return function(cb, data, func) {
			var $t1 = data.getEnumerator();
			try {
				while ($t1.moveNext()) {
					var d = $t1.get_current();
					var opt = func(d);
					$Cayita_UI_ElementBase.appendTo(opt, cb);
				}
			}
			finally {
				$t1.dispose();
			}
		};
	};
	$Cayita_UI_Ext.loadTo = function(T) {
		return function(form) {
			var data = T.createInstance();
			var o = data;
			for (var $t1 = 0; $t1 < form.elements.length; $t1++) {
				var input = form.elements[$t1];
				var ie = input;
				try {
					o[ie.name] = ie.value;
				}
				catch ($t2) {
				}
			}
			return Type.cast(o, T);
		};
	};
	$Cayita_UI_Ext.loadTo$1 = function(T) {
		return function(form, data) {
			var o = data;
			for (var $t1 = 0; $t1 < form.elements.length; $t1++) {
				var input = form.elements[$t1];
				var ie = input;
				try {
					o[ie.name] = ie.value;
				}
				catch ($t2) {
				}
			}
		};
	};
	$Cayita_UI_Ext.load = function(T) {
		return function(form, data) {
			var d = data;
			for (var $t1 = 0; $t1 < form.elements.length; $t1++) {
				var input = form.elements[$t1];
				var ie = input;
				if (String.isNullOrEmpty(ie.name)) {
					continue;
				}
				ie.value = d[ie.name];
			}
		};
	};
	$Cayita_UI_Ext.createRow = function(T) {
		return function(table, data, columns, indexName) {
			var r = $Cayita_UI_TableRow.$ctor1(null, function(row) {
				row.setAttribute('index', data[indexName]);
				for (var $t1 = 0; $t1 < columns.length; $t1++) {
					var col = columns[$t1];
					$(row).append(col.value(data));
				}
			});
			$(table).append($Cayita_UI_TableRow.element(r));
		};
	};
	$Cayita_UI_Ext.updateRow = function(T) {
		return function(table, data, columns, indexName) {
			var d = data;
			var row = $('#' + table.id + ' tr[index=' + d[indexName] + ']').empty();
			for (var $t1 = 0; $t1 < columns.length; $t1++) {
				var col = columns[$t1];
				row.append(col.value(data));
			}
		};
	};
	$Cayita_UI_Ext.createHeader = function(T) {
		return function(table, columns) {
			$Cayita_UI_TableHeader.$ctor1(table, function(th) {
				$Cayita_UI_TableRow.$ctor1(th, function(row) {
					for (var $t1 = 0; $t1 < columns.length; $t1++) {
						var col = columns[$t1];
						$(row).append(col.header);
					}
				});
			});
		};
	};
	$Cayita_UI_Ext.createFooter = function(T) {
		return function(table, columns) {
			$Cayita_UI_TableFooter.$ctor1(table, function(tf) {
				$Cayita_UI_TableRow.$ctor1(tf, function(row) {
					for (var $t1 = 0; $t1 < columns.length; $t1++) {
						var col = columns[$t1];
						$(row).append(col.footer);
					}
				});
			});
		};
	};
	$Cayita_UI_Ext.load$2 = function(T) {
		return function(table, data, columns, indexName) {
			var body;
			if (table.tBodies.length === 0) {
				body = $Cayita_UI_ElementBase.element($Cayita_UI_TableBody.$ctor(table));
			}
			else {
				body = table.tBodies[0];
				$(body).empty();
			}
			for (var $t1 = 0; $t1 < data.length; $t1++) {
				var d = { $: data[$t1] };
				$Cayita_UI_TableRow.$ctor1(body, Function.mkdel({ d: d }, function(row) {
					row.setAttribute('index', this.d.$[indexName]);
					for (var $t2 = 0; $t2 < columns.length; $t2++) {
						var col = columns[$t2];
						$(row).append(col.value(this.d.$));
					}
				}));
			}
		};
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Form
	var $Cayita_UI_Form = function() {
	};
	$Cayita_UI_Form.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_Form.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'form', parent, $Cayita_UI_FormConfig.$ctor());
		element($Cayita_UI_Form.element($this));
		return $this;
	};
	$Cayita_UI_Form.$ctor = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'form', parent, $Cayita_UI_FormConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.FormConfig
	var $Cayita_UI_FormConfig = function() {
	};
	$Cayita_UI_FormConfig.createInstance = function() {
		return $Cayita_UI_FormConfig.$ctor();
	};
	$Cayita_UI_FormConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.method = null;
		$this.action = null;
		$this.acceptCharset = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.HtmlList
	var $Cayita_UI_HtmlList = function() {
	};
	$Cayita_UI_HtmlList.creatNavList = function(parent) {
		var l = $Cayita_UI_HtmlList.$ctor1(parent, function(e) {
			e.className = 'nav nav-list';
		}, false);
		return l;
	};
	$Cayita_UI_HtmlList.creatNavList$1 = function(parent, element) {
		var nl = $Cayita_UI_HtmlList.creatNavList(parent);
		element($Cayita_UI_ElementBase.element(nl));
		return nl;
	};
	$Cayita_UI_HtmlList.$ctor1 = function(parent, element, ordered) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, (ordered ? 'ol' : 'ul'), parent, $Cayita_UI_ListConfig.$ctor());
		element($Cayita_UI_ElementBase.element($this));
		return $this;
	};
	$Cayita_UI_HtmlList.$ctor = function(parent, ordered) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, (ordered ? 'ol' : 'ul'), parent, $Cayita_UI_ListConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.HtmlOption
	var $Cayita_UI_HtmlOption = function() {
	};
	$Cayita_UI_HtmlOption.$init = function($this, parent) {
		$Cayita_UI_ElementBase.createElement($this, 'option', parent, $Cayita_UI_ElementConfig.$ctor());
	};
	$Cayita_UI_HtmlOption.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_HtmlOption.$ctor = function(element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_HtmlOption.$init($this, null);
		element($Cayita_UI_HtmlOption.element($this));
		return $this;
	};
	$Cayita_UI_HtmlOption.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_HtmlOption.$init($this, parent);
		element($Cayita_UI_HtmlOption.element($this));
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.HtmlSelect
	var $Cayita_UI_HtmlSelect = function() {
	};
	$Cayita_UI_HtmlSelect.init = function($this, parent) {
		$Cayita_UI_ElementBase.createElement($this, 'select', parent, $Cayita_UI_ElementConfig.$ctor());
	};
	$Cayita_UI_HtmlSelect.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_HtmlSelect.load = function(T) {
		return function($this, data, func) {
			$Cayita_UI_Ext.load$1(T).call(null, $Cayita_UI_HtmlSelect.element($this), data, func);
		};
	};
	$Cayita_UI_HtmlSelect.selectItem = function($this, value) {
		return $('#' + $Cayita_UI_HtmlSelect.element($this).id + ' option[value=$$__1__$$]').attr('selected', true);
	};
	$Cayita_UI_HtmlSelect.$ctor = function() {
		var $this = $Cayita_UI_ElementBase.$ctor();
		return $this;
	};
	$Cayita_UI_HtmlSelect.$ctor1 = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_HtmlSelect.init($this, parent);
		return $this;
	};
	$Cayita_UI_HtmlSelect.$ctor2 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_HtmlSelect.init($this, parent);
		element($Cayita_UI_HtmlSelect.element($this));
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.HtmlTable
	var $Cayita_UI_HtmlTable = function() {
	};
	$Cayita_UI_HtmlTable.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_HtmlTable.$ctor = function() {
		var $this = $Cayita_UI_ElementBase.$ctor();
		return $this;
	};
	$Cayita_UI_HtmlTable.$ctor2 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'table', parent, $Cayita_UI_ElementConfig.$ctor());
		element($Cayita_UI_HtmlTable.element($this));
		return $this;
	};
	$Cayita_UI_HtmlTable.$ctor1 = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'table', parent, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Icon
	var $Cayita_UI_Icon = function() {
	};
	$Cayita_UI_Icon.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'i', parent, $Cayita_UI_ElementConfig.$ctor());
		element($Cayita_UI_ElementBase.element($this));
		return $this;
	};
	$Cayita_UI_Icon.$ctor = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'i', parent, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.IconAnchor
	var $Cayita_UI_IconAnchor = function() {
	};
	$Cayita_UI_IconAnchor.$ctor = function(parent, element) {
		var $this = $Cayita_UI_Anchor.$ctor(parent);
		$Cayita_UI_Anchor.element($this).className = 'btn';
		var i = $Cayita_UI_Icon.$ctor($Cayita_UI_Anchor.element($this));
		element($Cayita_UI_Anchor.element($this), $Cayita_UI_ElementBase.element(i));
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.IconButton
	var $Cayita_UI_IconButton = function() {
	};
	$Cayita_UI_IconButton.$ctor = function(parent, element) {
		var $this = $Cayita_UI_Button.$ctor(parent);
		$Cayita_UI_ButtonBase.element($this).className = 'btn';
		var i = $Cayita_UI_Icon.$ctor($Cayita_UI_ButtonBase.element($this));
		element($Cayita_UI_ButtonBase.element($this), $Cayita_UI_ElementBase.element(i));
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Input
	var $Cayita_UI_Input = function() {
	};
	$Cayita_UI_Input.$ctor2 = function(parent, config, element) {
		var $this = $Cayita_UI_Input.$ctor3($Cayita_UI_ElementBase.element(parent), config, element);
		return $this;
	};
	$Cayita_UI_Input.$ctor3 = function(parent, config, element) {
		var $this = $Cayita_UI_InputBase.$ctor1(parent, config, '');
		element($Cayita_UI_InputBase.element($this));
		return $this;
	};
	$Cayita_UI_Input.$ctor1 = function(parent, config) {
		var $this = $Cayita_UI_InputBase.$ctor1(parent, config, '');
		return $this;
	};
	$Cayita_UI_Input.$ctor = function(parent, config) {
		var $this = $Cayita_UI_InputBase.$ctor1($Cayita_UI_ElementBase.element(parent), config, '');
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.InputBase
	var $Cayita_UI_InputBase = function() {
	};
	$Cayita_UI_InputBase.createInput = function($this, parent, config, type) {
		$Cayita_UI_ElementBase.createElement($this, 'input', parent, config);
		if (!String.isNullOrEmpty(type)) {
			$Cayita_UI_InputBase.element($this).type = type;
		}
		$Cayita_UI_InputBase.placeHolder$1($this, config.placeholder);
		$Cayita_UI_InputBase.required$1($this, config.required);
		if (!String.isNullOrEmpty(config.relativeSize)) {
			$Cayita_UI_InputBase.relativeSize($this, config.relativeSize);
		}
		if (!String.isNullOrEmpty(config.gridSize)) {
			$Cayita_UI_InputBase.gridSize($this, config.gridSize);
		}
		if (!String.isNullOrEmpty(config.value)) {
			$Cayita_UI_InputBase.value$1($this, config.value);
		}
	};
	$Cayita_UI_InputBase.placeHolder$1 = function($this, placeholder) {
		if (!String.isNullOrEmpty(placeholder)) {
			$Cayita_UI_InputBase.element($this).setAttribute('placeholder', placeholder);
		}
		else {
			$Cayita_UI_InputBase.element($this).removeAttribute('placeholder');
		}
	};
	$Cayita_UI_InputBase.placeHolder = function($this) {
		var placeholder = $Cayita_UI_InputBase.element($this).getAttribute('placeholder');
		return (ss.isNullOrUndefined(placeholder) ? String.empty : placeholder.toString());
	};
	$Cayita_UI_InputBase.required$1 = function($this, required) {
		if (required) {
			$Cayita_UI_InputBase.element($this).setAttribute('required', 'true');
		}
		else {
			$Cayita_UI_InputBase.element($this).removeAttribute('required');
		}
	};
	$Cayita_UI_InputBase.required = function($this) {
		var rq = $Cayita_UI_InputBase.element($this).getAttribute('required');
		return (ss.isNullOrUndefined(rq) ? false : ((rq.toString() === 'required' || rq.toString() === 'true') ? true : false));
	};
	$Cayita_UI_InputBase.relativeSize = function($this, relativeSize) {
		$Cayita_UI_ElementBase.addClass($this, relativeSize);
	};
	$Cayita_UI_InputBase.gridSize = function($this, gridSize) {
		$Cayita_UI_ElementBase.addClass($this, gridSize);
	};
	$Cayita_UI_InputBase.value$1 = function($this, value) {
		$Cayita_UI_InputBase.element($this).value = value;
	};
	$Cayita_UI_InputBase.value = function($this) {
		return $Cayita_UI_InputBase.element($this).value;
	};
	$Cayita_UI_InputBase.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_InputBase.$ctor = function() {
		var $this = $Cayita_UI_ElementBase.$ctor();
		return $this;
	};
	$Cayita_UI_InputBase.$ctor1 = function(parent, config, type) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_InputBase.createInput($this, parent, config, type);
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.InputCheckbox
	var $Cayita_UI_InputCheckbox = function() {
	};
	$Cayita_UI_InputCheckbox.init = function($this, parent, config) {
		$Cayita_UI_InputBase.createInput($this, parent, config, 'checkbox');
		$Cayita_UI_InputCheckbox.element($this).checked = config.checked;
	};
	$Cayita_UI_InputCheckbox.element = function($this) {
		return $Cayita_UI_InputBase.element($this);
	};
	$Cayita_UI_InputCheckbox.$ctor = function() {
		var $this = $Cayita_UI_InputBase.$ctor();
		return $this;
	};
	$Cayita_UI_InputCheckbox.$ctor2 = function(parent, element) {
		var $this = $Cayita_UI_InputBase.$ctor();
		var $t1 = $Cayita_UI_CheckboxConfig.$ctor();
		$t1.value = 'true';
		$Cayita_UI_InputCheckbox.init($this, parent, $t1);
		element($Cayita_UI_InputCheckbox.element($this));
		return $this;
	};
	$Cayita_UI_InputCheckbox.$ctor1 = function(parent) {
		var $this = $Cayita_UI_InputBase.$ctor();
		var $t1 = $Cayita_UI_CheckboxConfig.$ctor();
		$t1.value = 'true';
		$Cayita_UI_InputCheckbox.init($this, parent, $t1);
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.InputConfig
	var $Cayita_UI_InputConfig = function() {
	};
	$Cayita_UI_InputConfig.createInstance = function() {
		return $Cayita_UI_InputConfig.$ctor();
	};
	$Cayita_UI_InputConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.placeholder = null;
		$this.required = false;
		$this.relativeSize = null;
		$this.gridSize = null;
		$this.value = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.InputPassword
	var $Cayita_UI_InputPassword = function() {
	};
	$Cayita_UI_InputPassword.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_InputPassword.$ctor(parent);
		element($Cayita_UI_InputText.element($this));
		return $this;
	};
	$Cayita_UI_InputPassword.$ctor = function(parent) {
		var $this = $Cayita_UI_InputText.$ctor1(parent);
		$Cayita_UI_InputText.element($this).type = 'password';
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.InputText
	var $Cayita_UI_InputText = function() {
	};
	$Cayita_UI_InputText.element = function($this) {
		return $Cayita_UI_InputBase.element($this);
	};
	$Cayita_UI_InputText.$ctor = function() {
		var $this = $Cayita_UI_InputBase.$ctor();
		return $this;
	};
	$Cayita_UI_InputText.$ctor2 = function(parent, element) {
		var $this = $Cayita_UI_InputBase.$ctor1(parent, $Cayita_UI_TextConfig.$ctor(), 'text');
		element($Cayita_UI_InputText.element($this));
		return $this;
	};
	$Cayita_UI_InputText.$ctor1 = function(parent) {
		var $this = $Cayita_UI_InputBase.$ctor1(parent, $Cayita_UI_TextConfig.$ctor(), 'text');
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Label
	var $Cayita_UI_Label = function() {
	};
	$Cayita_UI_Label.$init = function($this, parent, config) {
		$Cayita_UI_ElementBase.createElement($this, 'label', parent, config);
		if (!String.isNullOrEmpty(config.textLabel)) {
			$Cayita_UI_Label.textLabel$1($this, config.textLabel);
		}
		if (!String.isNullOrEmpty(config.forField)) {
			$Cayita_UI_Label.forField$1($this, config.forField);
		}
	};
	$Cayita_UI_Label.textLabel$1 = function($this, textLabel) {
		$Cayita_UI_ElementBase.element($this).innerText = textLabel;
	};
	$Cayita_UI_Label.textLabel = function($this) {
		return $Cayita_UI_ElementBase.element($this).innerText;
	};
	$Cayita_UI_Label.forField$1 = function($this, fieldName) {
		if (!String.isNullOrEmpty(fieldName)) {
			$Cayita_UI_ElementBase.element($this).setAttribute('for', fieldName);
		}
		else {
			$Cayita_UI_ElementBase.element($this).removeAttribute('for');
		}
	};
	$Cayita_UI_Label.forField = function($this) {
		var forF = $Cayita_UI_ElementBase.element($this).getAttribute('for');
		return (ss.isNullOrUndefined(forF) ? String.empty : forF.toString());
	};
	$Cayita_UI_Label.createControlLabel = function(parent, textLabel, forField, visible) {
		return $Cayita_UI_Label.create(parent, textLabel, forField, 'control-label', visible);
	};
	$Cayita_UI_Label.create = function(parent, textLabel, forField, cssClass, visible) {
		var $t1 = $Cayita_UI_LabelConfig.$ctor();
		$t1.visible = visible;
		$t1.textLabel = textLabel;
		$t1.forField = forField;
		$t1.cssClass = cssClass;
		var l = $Cayita_UI_Label.$ctor(parent, $t1);
		return l;
	};
	$Cayita_UI_Label.$ctor1 = function(parent, config, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Label.$init($this, parent, config);
		element($Cayita_UI_ElementBase.element($this));
		return $this;
	};
	$Cayita_UI_Label.$ctor = function(parent, config) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Label.$init($this, parent, config);
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.LabelConfig
	var $Cayita_UI_LabelConfig = function() {
	};
	$Cayita_UI_LabelConfig.createInstance = function() {
		return $Cayita_UI_LabelConfig.$ctor();
	};
	$Cayita_UI_LabelConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.textLabel = null;
		$this.forField = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Legend
	var $Cayita_UI_Legend = function() {
	};
	$Cayita_UI_Legend.$init = function($this, parent, config) {
		$Cayita_UI_ElementBase.createElement($this, 'legend', parent, config);
		if (!String.isNullOrEmpty(config.text)) {
			$Cayita_UI_Legend.text$1($this, config.text);
		}
	};
	$Cayita_UI_Legend.text$1 = function($this, textLegend) {
		$Cayita_UI_ElementBase.element($this).innerText = textLegend;
	};
	$Cayita_UI_Legend.text = function($this) {
		return $Cayita_UI_ElementBase.element($this).innerText;
	};
	$Cayita_UI_Legend.$ctor1 = function(parent, config, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Legend.$init($this, parent, config);
		element($Cayita_UI_ElementBase.element($this));
		return $this;
	};
	$Cayita_UI_Legend.$ctor = function(parent, config) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Legend.$init($this, parent, config);
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.LegendConfig
	var $Cayita_UI_LegendConfig = function() {
	};
	$Cayita_UI_LegendConfig.createInstance = function() {
		return $Cayita_UI_LegendConfig.$ctor();
	};
	$Cayita_UI_LegendConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.text = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ListConfig
	var $Cayita_UI_ListConfig = function() {
	};
	$Cayita_UI_ListConfig.createInstance = function() {
		return $Cayita_UI_ListConfig.$ctor();
	};
	$Cayita_UI_ListConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.ordered = false;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ListItem
	var $Cayita_UI_ListItem = function() {
	};
	$Cayita_UI_ListItem.$init = function($this, parent, config) {
		$Cayita_UI_ElementBase.createElement($this, 'li', parent, config);
	};
	$Cayita_UI_ListItem.item = function($this, item) {
		$Cayita_UI_ElementBase.jSelect($this).text(item);
	};
	$Cayita_UI_ListItem.createNavListItem = function(parent, href, item) {
		var il = $Cayita_UI_ListItem.$ctor(parent, $Cayita_UI_ListItemConfig.$ctor());
		$Cayita_UI_Anchor.$ctor1($Cayita_UI_ElementBase.element(il), function(a) {
			a.href = href;
			a.innerText = item;
		});
		return il;
	};
	$Cayita_UI_ListItem.createNavListItem$1 = function(parent, href, item, element) {
		var il = $Cayita_UI_ListItem.$ctor(parent, $Cayita_UI_ListItemConfig.$ctor());
		var anchor = $Cayita_UI_Anchor.$ctor1($Cayita_UI_ElementBase.element(il), function(a) {
			a.href = href;
			a.innerText = item;
		});
		element($Cayita_UI_ElementBase.element(il), $Cayita_UI_Anchor.element(anchor));
		return il;
	};
	$Cayita_UI_ListItem.createNavHeader = function(parent, item) {
		var $t1 = $Cayita_UI_ListItemConfig.$ctor();
		$t1.cssClass = 'nav-header';
		$t1.item = item;
		return $Cayita_UI_ListItem.$ctor(parent, $t1);
	};
	$Cayita_UI_ListItem.$ctor1 = function(parent, config, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ListItem.$init($this, parent, config);
		element($Cayita_UI_ElementBase.element($this));
		return $this;
	};
	$Cayita_UI_ListItem.$ctor = function(parent, config) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ListItem.$init($this, parent, config);
		if (!String.isNullOrEmpty(config.item)) {
			$Cayita_UI_ElementBase.jSelect($this).text(config.item);
		}
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ListItemConfig
	var $Cayita_UI_ListItemConfig = function() {
	};
	$Cayita_UI_ListItemConfig.createInstance = function() {
		return $Cayita_UI_ListItemConfig.$ctor();
	};
	$Cayita_UI_ListItemConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.item = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Paragraph
	var $Cayita_UI_Paragraph = function() {
	};
	$Cayita_UI_Paragraph.$init = function($this, parent, config) {
		$Cayita_UI_ElementBase.createElement($this, 'p', parent, config);
		if (!String.isNullOrEmpty(config.text)) {
			$Cayita_UI_Paragraph.text$1($this, config.text);
		}
	};
	$Cayita_UI_Paragraph.text$1 = function($this, text) {
		$Cayita_UI_ElementBase.jSelect($this).text(text);
	};
	$Cayita_UI_Paragraph.text = function($this) {
		return $Cayita_UI_ElementBase.jSelect($this).text();
	};
	$Cayita_UI_Paragraph.$ctor1 = function(parent, config, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Paragraph.$init($this, parent, config);
		element($Cayita_UI_ElementBase.element($this));
		return $this;
	};
	$Cayita_UI_Paragraph.$ctor = function(parent, config) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_Paragraph.$init($this, parent, config);
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ParagraphConfig
	var $Cayita_UI_ParagraphConfig = function() {
	};
	$Cayita_UI_ParagraphConfig.createInstance = function() {
		return $Cayita_UI_ParagraphConfig.$ctor();
	};
	$Cayita_UI_ParagraphConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		$this.text = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.ResetButton
	var $Cayita_UI_ResetButton = function() {
	};
	$Cayita_UI_ResetButton.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ButtonBase.$ctor1(parent, $Cayita_UI_ButtonConfig.$ctor(), 'reset');
		element($Cayita_UI_ButtonBase.element($this));
		return $this;
	};
	$Cayita_UI_ResetButton.$ctor = function(parent) {
		var $this = $Cayita_UI_ButtonBase.$ctor1(parent, $Cayita_UI_ButtonConfig.$ctor(), 'reset');
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.SelectedRow
	var $Cayita_UI_SelectedRow = function() {
	};
	$Cayita_UI_SelectedRow.createInstance = function() {
		return $Cayita_UI_SelectedRow.$ctor();
	};
	$Cayita_UI_SelectedRow.$ctor = function() {
		var $this = {};
		$this.index = null;
		$this.row = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.SelectField
	var $Cayita_UI_SelectField = function() {
	};
	$Cayita_UI_SelectField.$ctor = function(parent, field) {
		var $this = $Cayita_UI_HtmlSelect.$ctor();
		$this.controlGroup = null;
		$this.label = null;
		$this.controls = null;
		$this.controlGroup = $Cayita_UI_Div.createControlGroup$1(parent, function(cgDiv) {
			$this.label = $Cayita_UI_Label.createControlLabel(cgDiv, '', null, true);
			$this.controls = $Cayita_UI_Div.createControls$1(cgDiv, function(ctDiv) {
				$Cayita_UI_HtmlSelect.init($this, ctDiv);
				$Cayita_UI_Label.forField$1($this.label, $Cayita_UI_HtmlSelect.element($this).id);
				field($Cayita_UI_ElementBase.element($this.label), $Cayita_UI_HtmlSelect.element($this));
			});
		});
		return $this;
	};
	$Cayita_UI_SelectField.$ctor1 = function(parent, field) {
		var $this = $Cayita_UI_HtmlSelect.$ctor();
		$this.controlGroup = null;
		$this.label = null;
		$this.controls = null;
		$this.controlGroup = $Cayita_UI_Div.createControlGroup$1(parent, function(cgDiv) {
			$this.label = $Cayita_UI_Label.createControlLabel(null, '', null, true);
			$this.controls = $Cayita_UI_Div.$ctor1(cgDiv, function(ctDiv) {
				$Cayita_UI_HtmlSelect.init($this, ctDiv);
				$Cayita_UI_Label.forField$1($this.label, $Cayita_UI_HtmlSelect.element($this).id);
				field($Cayita_UI_HtmlSelect.element($this));
			});
		});
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.Span
	var $Cayita_UI_Span = function() {
	};
	$Cayita_UI_Span.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'span', parent, $Cayita_UI_SpanConfig.$ctor());
		element($Cayita_UI_ElementBase.element($this));
		return $this;
	};
	$Cayita_UI_Span.$ctor = function(parent, config) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'span', parent, $Cayita_UI_SpanConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.SpanConfig
	var $Cayita_UI_SpanConfig = function() {
	};
	$Cayita_UI_SpanConfig.createInstance = function() {
		return $Cayita_UI_SpanConfig.$ctor();
	};
	$Cayita_UI_SpanConfig.$ctor = function() {
		var $this = $Cayita_UI_ElementConfig.$ctor();
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.SubmitButton
	var $Cayita_UI_SubmitButton = function() {
	};
	$Cayita_UI_SubmitButton.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ButtonBase.$ctor1(parent, $Cayita_UI_ButtonConfig.$ctor(), 'submit');
		element($Cayita_UI_ButtonBase.element($this));
		return $this;
	};
	$Cayita_UI_SubmitButton.$ctor = function(parent) {
		var $this = $Cayita_UI_ButtonBase.$ctor1(parent, $Cayita_UI_ButtonConfig.$ctor(), 'submit');
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.SystemExtensions
	var $Cayita_UI_SystemExt = function() {
	};
	$Cayita_UI_SystemExt.toJsDate = function(date) {
		if (Date.areEqual(date, null)) {
			return null;
		}
		var tick = parseInt(date.toString());
		var d = new Date(tick);
		return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
	};
	$Cayita_UI_SystemExt.format = function(date, format) {
		if (Date.areEqual(date, null)) {
			return String.empty;
		}
		return date.format(format);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TableBody
	var $Cayita_UI_TableBody = function() {
	};
	$Cayita_UI_TableBody.$ctor = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'tbody', parent, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TableCell
	var $Cayita_UI_TableCell = function() {
	};
	$Cayita_UI_TableCell.createInstance = function() {
		return $Cayita_UI_TableCell.$ctor();
	};
	$Cayita_UI_TableCell.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_TableCell.$ctor3 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'td', parent, $Cayita_UI_ElementConfig.$ctor());
		element($Cayita_UI_TableCell.element($this));
		return $this;
	};
	$Cayita_UI_TableCell.$ctor2 = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'td', parent, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	$Cayita_UI_TableCell.$ctor = function() {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'td', null, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	$Cayita_UI_TableCell.$ctor1 = function(element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'td', null, $Cayita_UI_ElementConfig.$ctor());
		element($Cayita_UI_TableCell.element($this));
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TableColumn
	var $Cayita_UI_TableColumn$1 = function(T) {
		var $type = function() {
		};
		$type.createInstance = function() {
			return $type.$ctor();
		};
		$type.$ctor = function() {
			var $this = {};
			$this.header = null;
			$this.value = null;
			$this.footer = null;
			return $this;
		};
		Type.registerGenericClassInstance($type, $Cayita_UI_TableColumn$1, [T], function() {
			return Object;
		}, function() {
			return [];
		});
		return $type;
	};
	Type.registerGenericClass(global, 'Cayita.UI.TableColumn$1', $Cayita_UI_TableColumn$1, 1);
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TableFooter
	var $Cayita_UI_TableFooter = function() {
	};
	$Cayita_UI_TableFooter.element = function($this) {
		return $Cayita_UI_HtmlTable.element($this);
	};
	$Cayita_UI_TableFooter.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_HtmlTable.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'tfoot', parent, $Cayita_UI_ElementConfig.$ctor());
		element($Cayita_UI_TableFooter.element($this));
		return $this;
	};
	$Cayita_UI_TableFooter.$ctor = function(parent) {
		var $this = $Cayita_UI_HtmlTable.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'tfoot', parent, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TableHeader
	var $Cayita_UI_TableHeader = function() {
	};
	$Cayita_UI_TableHeader.element = function($this) {
		return $Cayita_UI_HtmlTable.element($this);
	};
	$Cayita_UI_TableHeader.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_HtmlTable.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'thead', parent, $Cayita_UI_ElementConfig.$ctor());
		element($Cayita_UI_TableHeader.element($this));
		return $this;
	};
	$Cayita_UI_TableHeader.$ctor = function(parent) {
		var $this = $Cayita_UI_HtmlTable.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'thead', parent, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TableRow
	var $Cayita_UI_TableRow = function() {
	};
	$Cayita_UI_TableRow.element = function($this) {
		return $Cayita_UI_ElementBase.element($this);
	};
	$Cayita_UI_TableRow.$ctor1 = function(parent, element) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'tr', parent, $Cayita_UI_ElementConfig.$ctor());
		element($Cayita_UI_TableRow.element($this));
		return $this;
	};
	$Cayita_UI_TableRow.$ctor = function(parent) {
		var $this = $Cayita_UI_ElementBase.$ctor();
		$Cayita_UI_ElementBase.createElement($this, 'tr', parent, $Cayita_UI_ElementConfig.$ctor());
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TextConfig
	var $Cayita_UI_TextConfig = function() {
	};
	$Cayita_UI_TextConfig.createInstance = function() {
		return $Cayita_UI_TextConfig.$ctor();
	};
	$Cayita_UI_TextConfig.$ctor = function() {
		var $this = $Cayita_UI_InputConfig.$ctor();
		$this.minLength = null;
		$this.maxLength = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TextField
	var $Cayita_UI_TextField = function() {
	};
	$Cayita_UI_TextField.$ctor = function(parent, field) {
		var $this = $Cayita_UI_TextField.$ctor1($Cayita_UI_ElementBase.element(parent), field);
		return $this;
	};
	$Cayita_UI_TextField.$ctor1 = function(parent, field) {
		var $this = $Cayita_UI_InputText.$ctor();
		$this.controlGroup = null;
		$this.label = null;
		$this.controls = null;
		$this.controlGroup = $Cayita_UI_Div.createControlGroup$1(parent, function(cge) {
			$this.label = $Cayita_UI_Label.createControlLabel(cge, '', null, true);
			$this.controls = $Cayita_UI_Div.createControls$1(cge, function(cte) {
				$Cayita_UI_InputBase.createInput($this, cte, $Cayita_UI_TextConfig.$ctor(), 'text');
				$Cayita_UI_Label.forField$1($this.label, $Cayita_UI_InputText.element($this).id);
				field($Cayita_UI_ElementBase.element($this.label), $Cayita_UI_InputText.element($this));
			});
		});
		return $this;
	};
	$Cayita_UI_TextField.$ctor2 = function(parent, field) {
		var $this = $Cayita_UI_InputText.$ctor();
		$this.controlGroup = null;
		$this.label = null;
		$this.controls = null;
		$this.controlGroup = $Cayita_UI_Div.createControlGroup$1(parent, function(cge) {
			$this.label = $Cayita_UI_Label.createControlLabel(null, '', null, true);
			$this.controls = $Cayita_UI_Div.$ctor1(cge, function(cte) {
				$Cayita_UI_InputBase.createInput($this, cte, $Cayita_UI_TextConfig.$ctor(), 'text');
				$Cayita_UI_Label.forField$1($this.label, $Cayita_UI_InputText.element($this).id);
				field($Cayita_UI_InputText.element($this));
			});
		});
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Cayita.Javascript.UI.TopNavBar
	var $Cayita_UI_TopNavBar = function() {
	};
	$Cayita_UI_TopNavBar.$ctor = function(parent, brand, rightText, rightLinkText, navlist) {
		var $this = $Cayita_UI_Div.$ctor(parent);
		$this.containerFluid = null;
		$this.navCollapse = null;
		$this.brand = null;
		$this.pullRightParagraph = null;
		$this.pullRightAnchor = null;
		$this.navList = null;
		$Cayita_UI_Div.element($this).className = 'navbar navbar-inverse navbar-fixed-top';
		$Cayita_UI_Div.$ctor1($Cayita_UI_Div.element($this), function(inner) {
			inner.className = 'navbar-inner';
			$this.containerFluid = $Cayita_UI_Div.createContainerFluid$1(inner, function(fluid) {
				$Cayita_UI_Anchor.$ctor1(fluid, function(anchor) {
					anchor.className = 'btn btn-navbar';
					anchor.setAttribute('data-toggle', 'collapse');
					anchor.setAttribute('data-target', '.nav-collapse');
					for (var i = 0; i < 3; i++) {
						var $t1 = $Cayita_UI_SpanConfig.$ctor();
						$t1.cssClass = 'icon-bar';
						$Cayita_UI_Span.$ctor(anchor, $t1);
					}
				});
				$Cayita_UI_Anchor.$ctor1(fluid, function(brnd) {
					brnd.href = '#';
					brnd.innerText = brand;
					brnd.className = 'brand';
				});
				$this.navCollapse = $Cayita_UI_Div.$ctor1(fluid, function(collapse) {
					collapse.className = 'nav-collapse collapse';
					var $t2 = $Cayita_UI_ParagraphConfig.$ctor();
					$t2.text = rightText;
					$t2.cssClass = 'navbar-text pull-right';
					$this.pullRightParagraph = $Cayita_UI_ElementBase.element($Cayita_UI_Paragraph.$ctor1(collapse, $t2, function(paragraph) {
						$this.pullRightAnchor = $Cayita_UI_Anchor.$ctor1(paragraph, function(a) {
							a.href = '#';
							a.className = 'navbar-link';
							a.innerText = rightLinkText;
						});
					}));
					$Cayita_UI_HtmlList.creatNavList$1(collapse, navlist);
				});
			});
		});
		return $this;
	};
	Type.registerClass(global, 'Message', $Message, Object);
	Type.registerClass(global, 'MessageFor', $MessageFor, Object);
	Type.registerClass(global, 'Range', $Range, Object);
	Type.registerClass(global, 'Rule', $Rule, Object);
	Type.registerClass(global, 'RuleFor', $RuleFor, Object);
	Type.registerClass(global, 'ValidateOptions', $ValidateOptions, Object);
	Type.registerClass(global, 'Cayita.Ajax.AppError', $Cayita_Ajax_AppError, Object);
	Type.registerClass(global, 'Cayita.Ajax.ResponseError', $Cayita_Ajax_ResponseError, Object);
	Type.registerClass(global, 'Cayita.Ajax.ResponseStatus', $Cayita_Ajax_ResponseStatus, Object);
	Type.registerClass(global, 'Cayita.Javascript.ModuleBase', $Cayita_Javascript_ModuleBase, Object);
	Type.registerClass(global, 'Cayita.UI.ElementBase', $Cayita_UI_ElementBase, Object);
	Type.registerClass(global, 'Cayita.UI.Anchor', $Cayita_UI_Anchor);
	Type.registerClass(global, 'Cayita.UI.ButtonBase', $Cayita_UI_ButtonBase);
	Type.registerClass(global, 'Cayita.UI.Button', $Cayita_UI_Button);
	Type.registerClass(global, 'Cayita.UI.ElementConfig', $Cayita_UI_ElementConfig, Object);
	Type.registerClass(global, 'Cayita.UI.ButtonConfig', $Cayita_UI_ButtonConfig);
	Type.registerClass(global, 'Cayita.UI.InputConfig', $Cayita_UI_InputConfig);
	Type.registerClass(global, 'Cayita.UI.CheckboxConfig', $Cayita_UI_CheckboxConfig);
	Type.registerClass(global, 'Cayita.UI.InputBase', $Cayita_UI_InputBase);
	Type.registerClass(global, 'Cayita.UI.InputCheckbox', $Cayita_UI_InputCheckbox);
	Type.registerClass(global, 'Cayita.UI.CheckboxField', $Cayita_UI_CheckboxField);
	Type.registerClass(global, 'Cayita.UI.Div', $Cayita_UI_Div);
	Type.registerClass(global, 'Cayita.UI.DivConfig', $Cayita_UI_DivConfig);
	Type.registerClass(global, 'Cayita.UI.Ext', $Cayita_UI_Ext, Object);
	Type.registerClass(global, 'Cayita.UI.Form', $Cayita_UI_Form);
	Type.registerClass(global, 'Cayita.UI.FormConfig', $Cayita_UI_FormConfig);
	Type.registerClass(global, 'Cayita.UI.HtmlList', $Cayita_UI_HtmlList);
	Type.registerClass(global, 'Cayita.UI.HtmlOption', $Cayita_UI_HtmlOption);
	Type.registerClass(global, 'Cayita.UI.HtmlSelect', $Cayita_UI_HtmlSelect);
	Type.registerClass(global, 'Cayita.UI.HtmlTable', $Cayita_UI_HtmlTable);
	Type.registerClass(global, 'Cayita.UI.Icon', $Cayita_UI_Icon);
	Type.registerClass(global, 'Cayita.UI.IconAnchor', $Cayita_UI_IconAnchor);
	Type.registerClass(global, 'Cayita.UI.IconButton', $Cayita_UI_IconButton);
	Type.registerClass(global, 'Cayita.UI.Input', $Cayita_UI_Input);
	Type.registerClass(global, 'Cayita.UI.InputText', $Cayita_UI_InputText);
	Type.registerClass(global, 'Cayita.UI.InputPassword', $Cayita_UI_InputPassword);
	Type.registerClass(global, 'Cayita.UI.Label', $Cayita_UI_Label);
	Type.registerClass(global, 'Cayita.UI.LabelConfig', $Cayita_UI_LabelConfig);
	Type.registerClass(global, 'Cayita.UI.Legend', $Cayita_UI_Legend);
	Type.registerClass(global, 'Cayita.UI.LegendConfig', $Cayita_UI_LegendConfig);
	Type.registerClass(global, 'Cayita.UI.ListConfig', $Cayita_UI_ListConfig);
	Type.registerClass(global, 'Cayita.UI.ListItem', $Cayita_UI_ListItem);
	Type.registerClass(global, 'Cayita.UI.ListItemConfig', $Cayita_UI_ListItemConfig);
	Type.registerClass(global, 'Cayita.UI.Paragraph', $Cayita_UI_Paragraph);
	Type.registerClass(global, 'Cayita.UI.ParagraphConfig', $Cayita_UI_ParagraphConfig);
	Type.registerClass(global, 'Cayita.UI.ResetButton', $Cayita_UI_ResetButton);
	Type.registerClass(global, 'Cayita.UI.SelectedRow', $Cayita_UI_SelectedRow, Object);
	Type.registerClass(global, 'Cayita.UI.SelectField', $Cayita_UI_SelectField);
	Type.registerClass(global, 'Cayita.UI.Span', $Cayita_UI_Span);
	Type.registerClass(global, 'Cayita.UI.SpanConfig', $Cayita_UI_SpanConfig);
	Type.registerClass(global, 'Cayita.UI.SubmitButton', $Cayita_UI_SubmitButton);
	Type.registerClass(global, 'Cayita.UI.SystemExt', $Cayita_UI_SystemExt, Object);
	Type.registerClass(global, 'Cayita.UI.TableBody', $Cayita_UI_TableBody);
	Type.registerClass(global, 'Cayita.UI.TableCell', $Cayita_UI_TableCell);
	Type.registerClass(global, 'Cayita.UI.TableFooter', $Cayita_UI_TableFooter);
	Type.registerClass(global, 'Cayita.UI.TableHeader', $Cayita_UI_TableHeader);
	Type.registerClass(global, 'Cayita.UI.TableRow', $Cayita_UI_TableRow);
	Type.registerClass(global, 'Cayita.UI.TextConfig', $Cayita_UI_TextConfig);
	Type.registerClass(global, 'Cayita.UI.TextField', $Cayita_UI_TextField);
	Type.registerClass(global, 'Cayita.UI.TopNavBar', $Cayita_UI_TopNavBar);
	$Cayita_UI_ElementBase.$tags = new (Type.makeGenericType(ss.Dictionary$2, [String, ss.Int32]))();
})();

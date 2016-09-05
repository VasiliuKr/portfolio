var validation = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		$('form').on('focus', '.error', _removeError);
		$('form').on('reset', _clearForm);
	};

	var _removeError = function (item) {
		var item = $(this),
			tooltip = item.siblings('.tooltip');

		item.removeClass('error');	
		tooltip.hide();		
	};

	var _clearForm = function (form) {
		var form = $(this);
		form.find('.tooltip').hide();
		form.find('.error').removeClass('error');
	};

	var _createTooltip = function (element) {
		tooltip = element.siblings('.tooltip');
		tooltip.show();
	}
	// Универсальная функция

	var validateForm = function (form) {

		console.log('Привет! Я в модуле валидации, проверяю форму!');

		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;
		
		// Пройдемся по всем элементам формы
		$.each(elements, function (index, val) {
			var element = $(val),
				val = element.val();

			if(val.length === 0) {
				element.addClass('error');
				_createTooltip(element);
				valid = false;
			}
		});

		return valid;
	};

	return {
		init: init,
		validateForm: validateForm
	};

})();

validation.init();


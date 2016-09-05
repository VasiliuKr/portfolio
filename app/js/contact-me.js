
var contactMe = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		$('#contact-me').on('submit', _submitForm);
	};

	var _submitForm = function (e) {
		e.preventDefault();
		console.log('отправка формы');

		var form = $(this),
			url = 'contactme.php',
			defObj = _ajaxForm(form, url);

			// что-то будем делать с ответом с сервера defObj
	};

	var _ajaxForm = function (form, url) {
		console.log('ajax запрос, но с провекркой');
		if (!validation.validateForm(form)) return false;
		// если false то код ниж не произойдет
	};

	return {
		init: init
	};

})();

contactMe.init();


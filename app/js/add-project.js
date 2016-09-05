var myModule = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListeners();
	};

	// Прослушивает события
	var _setUpListeners = function () {
		$('#add-new-item').on('click', _showModal); // открыть модальное окно
		$('#add-new-project').on('submit', _addProject); // добавление проекта
	};

	// Работает с модальным окном
	var _showModal = function (e) {
		e.preventDefault();

		var divPopup = $('#new-project-popup');

		divPopup.bPopup({
			speed: 650,
            transition: 'slideDown',
            onClose: function () {
            	divPopup.find('.form_alert').hide();
            	divPopup.find('form').trigger('reset');
            }
		});
	};

	// Добавляет проект
	var _addProject = function (e) {
		e.preventDefault();

		// объявляем переменные
		var form = $(this),
			url = 'add_project.php',
			defObj = _ajaxForm(form, url),
			successBox = form.find('.form_alert-success'),
			errorBox = form.find('.form_alert-fail');
			if (validation.validateForm(form)) {
				errorBox.hide();
				successBox.show();
			}else{
				successBox.hide();
				errorBox.show();
			}
	};

	// Универсальная функция
	
	var _ajaxForm = function (form, url) {
		console.log('ajax запрос, но с провекркой');
		if (!validation.validateForm(form)) return false;
		// если false то код ниж не произойдет
	};

	// Возвращает объект (публичные методы)
	return {
		init: init
	};

})();

myModule.init();
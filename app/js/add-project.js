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
            }
		});
	};

	// Добавляет проект
	var _addProject = function (e) {
		e.preventDefault();

		// объявляем переменные
		var form = $(this),
			url = 'add_project.php',
			myServerGiveAnswer = _ajaxForm(form, url);
			

		console.log(data);

		// запрос на сервер
		
		myServerGiveAnswer.done(function(ans) {
			var successBox = form.find('.form_alert-success'),
				errorBox = form.find('.form_alert-fail');
			if (ans.status === 'OK') {
				errorBox.hide();
				successBox.show();
			}else{
				successBox.hide();
				errorBox.show();
			}
		})
	};

	// Универсальная функция
	// Для ее работы используются
	// @form - форма
	// @url - адрес php файла, к которому мы обращаемся
	// 1. собирает данные из формы
	// 2. проверяет форму
	// 3. делает запрос на сервер и возвращает ответ с сервера
	var _ajaxForm = function (form, url) {
		// if(!valid) return false;

		data = form.serialize();

		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		});

		return result;
	};

	// Возвращает объект (публичные методы)
	return {
		init: init
	};

})();

myModule.init();
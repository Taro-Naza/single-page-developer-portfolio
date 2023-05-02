// Just rushing this code, sorry
(function () {
	const app = {
		form: null,
		formNameInput: null,
		formEmailInput: null,
		formMessageInput: null,
		nameError: null,
		emailError: null,
		messageError: null,
		nameErrorMessage: null,
		emailErrorMessage: null,
		messageErrorMessage: null,
		emptyFieldError: 'Sorry, this field is required',
		invalidFormatError: 'Sorry, invalid format here',

		init: function () {
			this.cacheDom();
			this.bindEvents();
		},

		cacheDom: function () {
			this.form = document.querySelector('.form');
			this.formNameInput = document.getElementById('name');
			this.formEmailInput = document.getElementById('email');
			this.formMessageInput = document.getElementById('message');
			this.nameError = document.querySelector('[data-name]');
			this.emailError = document.querySelector('[data-email]');
			this.messageError = document.querySelector('[data-message]');
			this.nameErrorMessage = document.querySelector('[data-name] p');
			this.emailErrorMessage = document.querySelector('[data-email] p');
			this.messageErrorMessage =
				document.querySelector('[data-message] p');
		},

		bindEvents: function () {
			this.form.addEventListener('submit', this.handleInput.bind(this));
			this.formEmailInput.addEventListener(
				'input',
				handleEmailinput.bind(this)
			);
		},

		handleInput: function (event) {
			event.preventDefault();
			this.resetErrors();
			this.checkInput(
				this.formNameInput,
				this.nameError,
				this.nameErrorMessage,
				this.emptyFieldError
			);
			this.checkInput(
				this.formEmailInput,
				this.emailError,
				this.emailErrorMessage,
				this.emptyFieldError,
				this.invalidFormatError,
				this.checkEmailFormat
			);
			this.checkInput(
				this.formMessageInput,
				this.messageError,
				this.messageErrorMessage,
				this.emptyFieldError
			);
		},
		handleEmailinput: function (event) {},
		checkInput: function (
			input,
			error,
			errorMessage,
			emptyFieldError,
			invalidFormatError = '',
			validator = null
		) {
			if (!input.value) {
				this.displayError(input, error, errorMessage, emptyFieldError);
			} else if (validator && !validator(input.value)) {
				this.displayError(
					input,
					error,
					errorMessage,
					invalidFormatError
				);
			}
		},

		displayError: function (
			element,
			elementError,
			elementErrorMessage,
			errorMessage
		) {
			element.style.borderColor = '#ff6f5b';
			elementError.style.display = 'initial';
			elementErrorMessage.innerText = errorMessage;
		},

		checkEmailFormat: function (email) {
			const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
			return emailRegex.test(email);
		},

		resetErrors: function () {
			this.resetError(
				this.formNameInput,
				this.nameError,
				this.nameErrorMessage
			);
			this.resetError(
				this.formEmailInput,
				this.emailError,
				this.emailErrorMessage
			);
			this.resetError(
				this.formMessageInput,
				this.messageError,
				this.messageErrorMessage
			);
		},

		resetError: function (element, elementError, elementErrorMessage) {
			element.style.borderColor = '#4ee1a0';
			elementError.style.display = 'none';
			elementErrorMessage.innerText = '';
		},
	};

	app.init();
})();

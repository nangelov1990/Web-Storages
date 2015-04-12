(function () {
	'use strict'

	var output = $('#output');

	if (!localStorage["username"]) {
		var username = prompt("Please enter your username");
		localStorage.setItem('username', username);
	}

	greet();

	function greet () {
		$('<p>')
			.html('<strong>Hello, ' + localStorage["username"] + '</strong>')
			.appendTo(output);

		$('<p>')
			.html('Session count: ' + sessionCounter())
			.appendTo(output);

		$('<p>')
			.html('Total count: ' + localCounter())
			.appendTo(output);
	}

	function sessionCounter () {
		if (!sessionStorage['counter']){
			sessionStorage.setItem('counter', 0);
		}

		sessionStorage.setItem('counter', parseInt(sessionStorage.counter) + 1);

		return sessionStorage.counter;
	}

	function localCounter () {
		if (!localStorage['counter']){
			localStorage.setItem('counter', 0);
		}

		localStorage.setItem('counter', parseInt(localStorage.counter) + 1)

		return localStorage['counter'];
	}


}())
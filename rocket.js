// 
;(function(window, document) {
	var localStorage = window.localStorage;

	// not support localStorage
	// exist the logic
	if (!localStorage) {
		return false;
	}

	var Rocket = {
		version: "1.0"
	}

	// Storage module
	// only for String value
	var Storage = {
		get: function(key) {
			localStorage.getItem(key, value);
		},
		set: function(key, value) {
			localStorage.setItem(key, value);
		},
		remove: function(key) {
			localStorage.removeItem(key);
		}		
	}
	

	var inputArray = document.querySelectorAll("input");

	//expose rocket variable to window
	window.Rocket = Rocket;

})(window, document);
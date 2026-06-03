(function(){
	'use strict';

	function setTheme(mode){
		var body = document.body;
		var isDark = mode === 'dark';
		var toggles = document.querySelectorAll('[data-tow-theme-toggle]');

		body.classList.toggle('tow-theme-dark', isDark);
		body.classList.toggle('tow-theme-light', !isDark);
		document.documentElement.setAttribute('data-tow-theme', isDark ? 'dark' : 'light');

		toggles.forEach(function(toggle){
			var label = toggle.querySelector('[data-tow-theme-toggle-label]');
			toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
			toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

			if(label){
				label.textContent = isDark ? 'Light' : 'Dark';
			}
		});
	}

	document.addEventListener('DOMContentLoaded', function(){
		var body = document.body;
		var initialMode = body.classList.contains('tow-theme-dark') ? 'dark' : 'light';

		setTheme(initialMode);

		document.querySelectorAll('[data-tow-theme-toggle]').forEach(function(toggle){
			toggle.addEventListener('click', function(){
				var nextMode = body.classList.contains('tow-theme-dark') ? 'light' : 'dark';
				setTheme(nextMode);
			});
		});
	});
})();

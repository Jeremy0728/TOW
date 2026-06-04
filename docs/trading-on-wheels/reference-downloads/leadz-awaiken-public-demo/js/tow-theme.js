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

	function setActivePricingCard(card){
		var section = card.closest('.our-pricing');

		if(!section){
			return;
		}

		section.querySelectorAll('.pricing-box').forEach(function(item){
			item.classList.remove('highlighted-box', 'is-active');
		});

		card.classList.add('highlighted-box', 'is-active');
	}

	function initPricingCardActivation(){
		document.querySelectorAll('.our-pricing').forEach(function(section){
			var cards = section.querySelectorAll('.pricing-box');

			if(cards.length < 2){
				return;
			}

			var activeCard = section.querySelector('.pricing-box.highlighted-box') || cards[0];
			setActivePricingCard(activeCard);

			cards.forEach(function(card){
				if(!card.hasAttribute('tabindex')){
					card.setAttribute('tabindex', '0');
				}

				card.addEventListener('pointerenter', function(){
					setActivePricingCard(card);
				});

				card.addEventListener('focusin', function(){
					setActivePricingCard(card);
				});

				card.addEventListener('click', function(){
					setActivePricingCard(card);
				});
			});
		});
	}

	document.addEventListener('DOMContentLoaded', function(){
		var body = document.body;
		var initialMode = body.classList.contains('tow-theme-dark') ? 'dark' : 'light';

		setTheme(initialMode);
		initPricingCardActivation();

		document.querySelectorAll('[data-tow-theme-toggle]').forEach(function(toggle){
			toggle.addEventListener('click', function(){
				var nextMode = body.classList.contains('tow-theme-dark') ? 'light' : 'dark';
				setTheme(nextMode);
			});
		});
	});
})();

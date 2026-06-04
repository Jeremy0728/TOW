(function(){
	'use strict';

	var themePages = {
		'index.html': { light: 'index.html', dark: 'index-dark.html' },
		'index-dark.html': { light: 'index.html', dark: 'index-dark.html' },
		'about.html': { light: 'about.html', dark: 'about-dark.html' },
		'about-dark.html': { light: 'about.html', dark: 'about-dark.html' },
		'pricing.html': { light: 'pricing.html', dark: 'pricing-dark.html' },
		'pricing-dark.html': { light: 'pricing.html', dark: 'pricing-dark.html' },
		'service-single.html': { light: 'service-single.html', dark: 'service-single-dark.html' },
		'service-single-dark.html': { light: 'service-single.html', dark: 'service-single-dark.html' },
		'case-study.html': { light: 'case-study.html', dark: 'case-study-dark.html' },
		'case-study-dark.html': { light: 'case-study.html', dark: 'case-study-dark.html' },
		'contact.html': { light: 'contact.html', dark: 'contact-dark.html' },
		'contact-dark.html': { light: 'contact.html', dark: 'contact-dark.html' },
		'faqs.html': { light: 'faqs.html', dark: 'faqs-dark.html' },
		'faqs-dark.html': { light: 'faqs.html', dark: 'faqs-dark.html' }
	};

	function updateThemeLinks(mode){
		document.querySelectorAll('a[href]').forEach(function(link){
			var href = link.getAttribute('href');

			if(!href || href.charAt(0) === '#' || /^(mailto|tel|javascript):/i.test(href) || /^(https?:)?\/\//i.test(href)){
				return;
			}

			var match = href.match(/^([^?#]*)(.*)$/);
			var path = match ? match[1] : href;
			var suffix = match ? match[2] : '';
			var parts = path.split('/');
			var file = parts.pop() || 'index.html';
			var page = themePages[file];

			if(!page){
				return;
			}

			parts.push(page[mode]);
			link.setAttribute('href', parts.join('/') + suffix);
		});
	}

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

		updateThemeLinks(isDark ? 'dark' : 'light');
		syncThemeToggleLayout();
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

	function normalizeThemeToggles(){
		document.querySelectorAll('[data-tow-theme-toggle]').forEach(function(toggle){
			if(toggle.parentNode !== document.body){
				document.body.appendChild(toggle);
			}
		});
	}

	function syncThemeToggleLayout(){
		var isMobile = window.matchMedia('(max-width: 767px)').matches;

		document.querySelectorAll('[data-tow-theme-toggle]').forEach(function(toggle){
			if(isMobile){
				var isDark = document.body.classList.contains('tow-theme-dark');

				if(toggle.parentNode !== document.body){
					document.body.appendChild(toggle);
				}

				toggle.style.position = 'fixed';
				toggle.style.top = 'auto';
				toggle.style.right = '12px';
				toggle.style.bottom = '12px';
				toggle.style.left = 'auto';
				toggle.style.transform = 'none';
				toggle.style.width = '70px';
				toggle.style.height = '38px';
				toggle.style.marginLeft = '0';
				toggle.style.display = 'inline-flex';
				toggle.style.alignItems = 'center';
				toggle.style.justifyContent = 'center';
				toggle.style.flexShrink = '0';
				toggle.style.visibility = 'visible';
				toggle.style.opacity = '1';
				toggle.style.border = '1px solid #f7c600';
				toggle.style.borderRadius = '50px';
				toggle.style.background = isDark ? '#f7c600' : '#000000';
				toggle.style.color = isDark ? '#000000' : '#ffffff';
				toggle.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.32)';
				toggle.style.fontFamily = 'Bebas Neue, sans-serif';
				toggle.style.fontSize = '13px';
				toggle.style.lineHeight = '1';
				toggle.style.zIndex = '2147483000';
			}else{
				if(toggle.parentNode !== document.body){
					document.body.appendChild(toggle);
				}

				toggle.removeAttribute('style');
			}
		});
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

		normalizeThemeToggles();
		syncThemeToggleLayout();
		setTheme(initialMode);
		initPricingCardActivation();

		document.querySelectorAll('[data-tow-theme-toggle]').forEach(function(toggle){
			toggle.addEventListener('click', function(){
				var nextMode = body.classList.contains('tow-theme-dark') ? 'light' : 'dark';
				setTheme(nextMode);
			});
		});
	});

	window.addEventListener('resize', syncThemeToggleLayout);
})();

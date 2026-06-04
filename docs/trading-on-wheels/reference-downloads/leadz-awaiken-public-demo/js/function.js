(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	var towPageTransitioning = false;

	function getTowPreloaderParts(){
		var $preloader = $('.tow-page .preloader');

		if ($preloader.length && !$preloader.find('.tow-preloader-reveal').length) {
			setupTowPreloader();
		}

		var preloader = $preloader.get(0);

		return {
			$preloader: $preloader,
			preloader: preloader,
			loader: preloader ? preloader.querySelector('.loading-container') : null,
			masks: preloader ? preloader.querySelectorAll('.tow-preloader-mask') : []
		};
	}

	function setupTowPreloader(){
		var $preloader = $('.tow-page .preloader');

		if (!$preloader.length || $preloader.find('.tow-preloader-reveal').length) {
			return;
		}

		var $reveal = $('<div class="tow-preloader-reveal" aria-hidden="true"></div>');

		for (var i = 0; i < 5; i++) {
			$reveal.append('<span class="tow-preloader-mask"></span>');
		}

		$preloader.prepend($reveal);
		$preloader.addClass('tow-preloader-ready');
		$body.addClass('tow-preloader-active');
	}

	function finishTowPreloader($preloader){
		$preloader.hide().removeClass('tow-preloader-ready');
		$body.removeClass('tow-preloader-active');
		towPageTransitioning = false;
	}

	function runTowPreloader(){
		var parts = getTowPreloaderParts();
		var $preloader = parts.$preloader;

		if (!$preloader.length) {
			$('.preloader').fadeOut(600);
			return;
		}

		var preloader = parts.preloader;
		var loader = parts.loader;
		var masks = parts.masks;
		var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!window.gsap || reduceMotion || !masks.length) {
			$preloader.fadeOut(reduceMotion ? 0 : 300, function(){
				finishTowPreloader($preloader);
			});
			return;
		}

		var tweenTargets = [preloader].concat(loader ? [loader] : [], Array.prototype.slice.call(masks));

		gsap.killTweensOf(tweenTargets);
		gsap.set(preloader, { autoAlpha: 1, display: 'flex' });
		gsap.set(masks, { xPercent: 0, yPercent: 0 });

		gsap.timeline({
			defaults: { ease: 'power4.inOut' },
			onComplete: function(){
				finishTowPreloader($preloader);
			}
		})
		.to(loader, {
			autoAlpha: 0,
			scale: 0.92,
			duration: 0.22,
			ease: 'power2.out'
		})
		.to(masks, {
			yPercent: 90,
			duration: 0.95,
			stagger: {
				each: 0.085,
				from: 'start'
			}
		}, '-=0.04')
		.to(preloader, {
			autoAlpha: 0,
			duration: 0.18,
			ease: 'none'
		}, '-=0.08');
	}

	function getTowTransitionTarget(link){
		var href = link.getAttribute('href');

		if (!href || href.charAt(0) === '#' || link.hasAttribute('download')) {
			return null;
		}

		if (link.target && link.target !== '_self') {
			return null;
		}

		if (/^(mailto|tel|javascript):/i.test(href)) {
			return null;
		}

		var target;

		try {
			target = new URL(href, window.location.href);
		} catch (error) {
			return null;
		}

		if (target.origin !== window.location.origin) {
			return null;
		}

		if (target.pathname === window.location.pathname && target.search === window.location.search) {
			return target.hash ? null : target.href;
		}

		return target.href;
	}

	function goToTowPage(targetUrl){
		window.location.href = targetUrl;
	}

	function runTowPageTransition(targetUrl){
		var parts = getTowPreloaderParts();
		var $preloader = parts.$preloader;
		var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!$preloader.length || !parts.preloader || !parts.masks.length || !window.gsap || reduceMotion) {
			goToTowPage(targetUrl);
			return;
		}

		towPageTransitioning = true;

		var tweenTargets = [parts.preloader].concat(parts.loader ? [parts.loader] : [], Array.prototype.slice.call(parts.masks));

		$preloader.show().addClass('tow-preloader-ready');
		$body.addClass('tow-preloader-active');

		gsap.killTweensOf(tweenTargets);
		gsap.set(parts.preloader, { autoAlpha: 1, display: 'flex' });
		if (parts.loader) {
			gsap.set(parts.loader, { autoAlpha: 0, scale: 0.92 });
		}
		gsap.set(parts.masks, { xPercent: 0, yPercent: 92 });

		gsap.timeline({
			defaults: { ease: 'power4.inOut' },
			onComplete: function(){
				goToTowPage(targetUrl);
			}
		})
		.to(parts.masks, {
			yPercent: 0,
			duration: 0.82,
			stagger: {
				each: 0.08,
				from: 'start'
			}
		});
	}

	function initTowPageTransitions(){
		if (!$body.hasClass('tow-page')) {
			return;
		}

		$(document).on('click.towPreloader', 'a[href]', function(event){
			var originalEvent = event.originalEvent || {};

			if (towPageTransitioning || event.isDefaultPrevented() || originalEvent.button > 0 || originalEvent.metaKey || originalEvent.ctrlKey || originalEvent.shiftKey || originalEvent.altKey) {
				return;
			}

			var targetUrl = getTowTransitionTarget(this);

			if (!targetUrl) {
				return;
			}

			event.preventDefault();
			runTowPageTransition(targetUrl);
		});

		window.addEventListener('pageshow', function(event){
			if (event.persisted) {
				finishTowPreloader($('.tow-page .preloader'));
			}
		});
	}

	setupTowPreloader();
	initTowPageTransitions();

	/* Preloader Effect */
	$window.on('load', function(){
		if ($body.hasClass('tow-page')) {
			runTowPreloader();
		} else {
			$(".preloader").fadeOut(600);
		}
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
		}	
	
		$(window).on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header .header-sticky').outerHeight()
			$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	if($("a[href='#top']").length){
		$("a[href='#top']").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}

	/* Hero Slider Layout JS */
	const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.hero-pagination',
			clickable: true,
		},
	});

	/* testimonial Slider JS */
	if ($('.testimonial-slider').length) {
		const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 60,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			breakpoints: {
				768:{
				  	slidesPerView: 1,
				},
				991:{
				  	slidesPerView: 1,
				}
			}
		});
	}

	/* testimonial Slider JS */
	if ($('.faqs-client-slider').length) {
		const faqs_client_slider = new Swiper('.faqs-client-slider .swiper', {
			slidesPerView : 2,
			speed: 1000,
			spaceBetween: 40,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			breakpoints: {
				768:{
				  	slidesPerView: 3,
				},
				991:{
				  	slidesPerView: 5,
				}
			}
		});
	}

	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '50%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.03,
			 translateXValue	= 20,
			 delayValue 		= 0.1,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h4 text-success";
		} else {
			var msgClasses = "h4 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Our Project (filtering) Start */
	$window.on( "load", function(){
		if( $(".project-item-boxes").length ) {
				
			/* Init Isotope */
			var $menuitem = $(".project-item-boxes").isotope({
				itemSelector: ".project-item-box",
				layoutMode: "masonry",
				masonry: {
					// use outer width of grid-sizer for columnWidth
					columnWidth: 1,
				}
			});
				
			/* Filter items on click */
			var $menudisesnav=$(".project-nav li a");
				$menudisesnav.on('click', function (e) { 
			
				var filterValue = $(this).attr('data-filter');
				$menuitem.isotope({
					filter: filterValue
				}); 
				
				$menudisesnav.removeClass("active-btn"); 
				$(this).addClass("active-btn");
				e.preventDefault();
			});		
			$menuitem.isotope({ filter: "*" });
		}			
	});
	/* Our Project (filtering) End */

	/* Animated Wow Js */	
	new WOW().init();

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}
	
})(jQuery);

// ==================================================
// * Project Name   :  Synox – Finance & Consulting Site Template.
// * File           :  JS Base
// * Version        :  1.0.0
// * Author         :  XpressBuddy (https://themeforest.net/user/xpressbuddy/portfolio)
// * Developer      :  webrok (https://www.fiverr.com/webrok?up_rollout=true)
// ==================================================

(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(".scroll").on('click', function() {
    $("html, body").animate({scrollTop: 0}, 0);
    return false; 
  });
  // Back To Top - End
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  /*$(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
  });*/
  // preloader - end
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  $(".mobile_menu_btn").on('click', function(){
    $(".mobile_menu_btn > i").toggleClass("far fa-bars fa-solid fa-xmark");
  });
  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  if ($('.stricky').length) {
    $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
  }
  $(window).on('scroll', function () {
    if ($('.stricked-menu').length) {
      var headerScrollPos = 150;
      var stricky = $('.stricked-menu');
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass('stricky-fixed');
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass('stricky-fixed');
      }
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

  // Header Menu Item Effect - Start
  // --------------------------------------------------
  $('.site_header .main_menu_list > li:not(.active)').mouseover(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '0.5',
      'transition': 'opacity 0.3s'
    });
    $(this).css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });

  $('.site_header .main_menu_list > li:not(.active)').mouseout(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });
  // Header Menu Item Effect - End
  // --------------------------------------------------

  // Offcanvas - Start
  // --------------------------------------------------
  $(".offcanvas_btn").on('click', function() {
    $(".offcanvas_wrapper").addClass("active");
    $(".offcanvas_overlay").addClass("active");
  });
  $(".offcanvas_close_btn").on('click', function() {
    $(".offcanvas_wrapper").removeClass("active");
    $(".offcanvas_overlay").removeClass("active");
  });
  $(".offcanvas_overlay").on('click', function() {
    $(".offcanvas_wrapper").removeClass("active");
    $(this).removeClass("active");
  });
  // Offcanvas - End
  // --------------------------------------------------

  // Odometer Counter - Start
  // --------------------------------------------------
  jQuery('.odometer').appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
      var countNumber = jQuery(this).attr("data-count");
      jQuery(this).html(countNumber);
    });
  });
  // Odometer Counter - End
  // --------------------------------------------------

  // Pricing Toggle Button - Start
  // --------------------------------------------------
  var towMembershipPlans = {
    premium: {
      title: 'Premium Trading On Wheels',
      description: '5-year premium access to Trading On Wheels and the private Discord area.',
      features: [
        '5-year premium access',
        'Private Discord area',
        'Trading ideas and monitoring',
        'Market context briefings',
        'Educational content library',
        'Community reviews',
        'Long-term member continuity'
      ]
    },
    monthly: {
      title: 'TOW Membership',
      description: 'Monthly access to Trading On Wheels tools and the private Discord membership area.',
      features: [
        'Private community',
        'Trading ideas',
        'Discord access',
        'Trade monitoring',
        'Market context',
        'Educational content',
        'Community reviews'
      ]
    }
  };

  function renderTowMembershipPlan(pricingSection, planName) {
    var plan = towMembershipPlans[planName];
    if (!plan) {
      return;
    }

    var pricingBlock = pricingSection.find('[data-tow-pricing]');
    var toggleButton = pricingSection.find('[data-tow-pricing-toggle]');
    var featuresList = pricingSection.find('[data-tow-plan-features]');
    var checkIcon = 'assets/images/icons/icon_check.svg';

    pricingSection.find('[data-tow-plan-title]').text(plan.title);
    pricingSection.find('[data-tow-plan-description]').text(plan.description);
    pricingBlock.toggleClass('active', planName === 'monthly');
    toggleButton.toggleClass('active', planName === 'monthly');
    toggleButton.attr('aria-pressed', planName === 'monthly' ? 'true' : 'false');
    pricingSection.attr('data-active-plan', planName);

    featuresList.empty();
    $.each(plan.features, function(index, feature) {
      featuresList.append(
        '<li style="--tow-feature-index: ' + index + '">' +
          '<span class="iconlist_icon"><img src="' + checkIcon + '" alt="Icon Check"></span>' +
          '<span class="iconlist_text">' + feature + '</span>' +
        '</li>'
      );
    });
  }

  function updateTowMembershipPlan(pricingSection, planName, options) {
    options = options || {};

    var plan = towMembershipPlans[planName];
    if (!plan) {
      return;
    }

    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var shouldAnimate = options.animate && !prefersReducedMotion;

    if (!shouldAnimate) {
      renderTowMembershipPlan(pricingSection, planName);
      return;
    }

    if (pricingSection.hasClass('is-plan-changing')) {
      return;
    }

    var toggleButton = pricingSection.find('[data-tow-pricing-toggle]');
    pricingSection.addClass('is-plan-changing is-plan-exiting');
    toggleButton.prop('disabled', true);

    window.setTimeout(function() {
      renderTowMembershipPlan(pricingSection, planName);
      pricingSection.removeClass('is-plan-exiting').addClass('is-plan-entering');

      window.setTimeout(function() {
        pricingSection.removeClass('is-plan-changing is-plan-entering');
        toggleButton.prop('disabled', false);
      }, 520);
    }, 180);
  }

  $('[data-tow-pricing]').each(function() {
    updateTowMembershipPlan($(this).closest('.pricing_section'), 'monthly');
  });

  $(".pricing_toggle_btn").on('click', function(){
    var pricingSection = $(this).closest('.pricing_section');
    if (pricingSection.find('[data-tow-pricing]').length) {
      var nextPlan = pricingSection.attr('data-active-plan') === 'monthly' ? 'premium' : 'monthly';
      updateTowMembershipPlan(pricingSection, nextPlan, { animate: true });
      return;
    }

    $(this).toggleClass("active");
    pricingSection.find(".pricing_block").toggleClass("active");
  });
  // Pricing Toggle Button - End
  // --------------------------------------------------

  // TOW Story Slider - Start
  // --------------------------------------------------
  document.querySelectorAll('[data-tow-story-slider]').forEach(function(slider) {
    var track = slider.querySelector('.tow_story_slider_track');
    if (!track) {
      return;
    }

    var originalItems = Array.prototype.slice.call(track.children);
    if (!originalItems.length) {
      return;
    }

    var cardsPerPage = parseInt(slider.getAttribute('data-tow-slider-page-size'), 10) || 3;
    var pages = [];
    for (var startIndex = 0; startIndex < originalItems.length; startIndex += cardsPerPage) {
      var pageItems = originalItems.slice(startIndex, startIndex + cardsPerPage);
      var fillIndex = 0;
      while (pageItems.length < cardsPerPage) {
        pageItems.push(originalItems[fillIndex % originalItems.length]);
        fillIndex += 1;
      }
      pages.push(pageItems.map(function(item) { return item.cloneNode(true); }));
    }

    if (pages.length < 2) {
      pages.push(originalItems.slice(0, cardsPerPage).map(function(item) { return item.cloneNode(true); }));
    }
    var activePage = 0;
    var isDragging = false;
    var startX = 0;
    var currentX = 0;
    var isAnimating = false;
    var swipeThreshold = 56;

    slider.style.overflow = 'hidden';
    slider.style.position = 'relative';
    track.style.willChange = 'transform';

    function setTrackItems(pageIndex) {
      track.innerHTML = '';
      pages[pageIndex].forEach(function(item) {
        track.appendChild(item.cloneNode(true));
      });
      track.style.transition = '';
      track.style.transform = 'translateX(0)';
    }

    function getNextPage(direction) {
      var nextPage = activePage + direction;
      if (nextPage < 0 || nextPage >= pages.length) {
        return activePage;
      }
      return nextPage;
    }

    function animateToPage(nextPage, direction) {
      if (nextPage === activePage || isAnimating) {
        track.style.transition = 'transform 220ms ease';
        track.style.transform = 'translateX(0)';
        return;
      }

      isAnimating = true;
      var nextTrack = track.cloneNode(false);
      nextTrack.innerHTML = '';
      pages[nextPage].forEach(function(item) {
        nextTrack.appendChild(item.cloneNode(true));
      });

      nextTrack.style.position = 'absolute';
      nextTrack.style.top = track.offsetTop + 'px';
      nextTrack.style.left = '0';
      nextTrack.style.width = '100%';
      nextTrack.style.transform = 'translateX(' + (direction > 0 ? '100%' : '-100%') + ')';
      nextTrack.style.transition = 'transform 320ms ease';
      nextTrack.style.willChange = 'transform';
      slider.appendChild(nextTrack);

      track.style.transition = 'transform 320ms ease';

      requestAnimationFrame(function() {
        track.style.transform = 'translateX(' + (direction > 0 ? '-100%' : '100%') + ')';
        nextTrack.style.transform = 'translateX(0)';
      });

      window.setTimeout(function() {
        activePage = nextPage;
        setTrackItems(activePage);
        slider.removeChild(nextTrack);
        isAnimating = false;
      }, 340);
    }

    slider.addEventListener('pointerdown', function(event) {
      if (isAnimating) {
        return;
      }

      isDragging = true;
      startX = event.clientX;
      currentX = 0;
      slider.classList.add('is-dragging');
      track.style.transition = '';
      slider.setPointerCapture(event.pointerId);
    });

    slider.addEventListener('pointermove', function(event) {
      if (!isDragging) {
        return;
      }

      currentX = event.clientX - startX;
      track.style.transform = 'translateX(' + currentX + 'px)';
      event.preventDefault();
    });

    function stopDragging(event) {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      slider.classList.remove('is-dragging');
      if (slider.hasPointerCapture(event.pointerId)) {
        slider.releasePointerCapture(event.pointerId);
      }

      if (Math.abs(currentX) < swipeThreshold) {
        track.style.transition = 'transform 220ms ease';
        track.style.transform = 'translateX(0)';
        return;
      }

      var direction = currentX < 0 ? 1 : -1;
      animateToPage(getNextPage(direction), direction);
    }

    slider.addEventListener('pointerup', stopDragging);
    slider.addEventListener('pointercancel', stopDragging);
    slider.addEventListener('pointerleave', stopDragging);

    setTrackItems(activePage);
  });
  // TOW Story Slider - End
  // --------------------------------------------------

  // TOW Course Curriculum Slider - Start
  // --------------------------------------------------
  if (document.querySelector('.tow_course_curriculum_slider')) {
    const towCourseCurriculumSlider = new Swiper('.tow_course_curriculum_slider', {
      speed: 700,
      spaceBetween: 28,
      grabCursor: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3200,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.tow_course_curriculum_dots',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 36,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 52,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 72,
        },
      },
    });
  }
  // TOW Course Curriculum Slider - End
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  $('.video_btn').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
  // Videos & Images popup - End
  // --------------------------------------------------

  // Wow JS - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // Wow JS - End
  // --------------------------------------------------
  
  // Background Parallax - Start
  // --------------------------------------------------
  $('.parallaxie').parallaxie({
    speed: 0.5,
    offset: 0,
  });
  // Background Parallax - End
  // --------------------------------------------------
  
  // Filter Elements - Start
  // --------------------------------------------------
  $(".filter_elements_nav > ul > li").click(function(){
    var filterValue = $(this).attr('data-filter');
    if(filterValue == "all") {
      $(".filter_elements_wrapper > div").show();
    } else {
      $(".filter_elements_wrapper > div").not('.' + filterValue).hide();
      $(".filter_elements_wrapper > div").filter('.' + filterValue).show();
    }
  });
  $(".filter_elements_nav > ul > li").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
  });
  // Filter Elements - End
  // --------------------------------------------------

  // Clients Logo Carousel - Start
  // --------------------------------------------------
  const clientsLogoCarousel = new Swiper('.clients_logo_carousel', {
    loop: true,
    speed: 5000,
    freeMode: true,
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });
  // Clients Logo Carousel - End
  // --------------------------------------------------

  // Review Carousel - Start
  // --------------------------------------------------
  const reviewCarousel = new Swiper('.review_carousel', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".review_pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  const reviewCarouselTwo = new Swiper('.review_carousel_2', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".rc2-swiper-button-next",
      prevEl: ".rc2-swiper-button-prev",
    },
  });

  const reviewMarqueeVerticalUp = new Swiper(".review_marquee_vertical_up", {
    loop: true,
    speed: 16000,
    freeMode: true,
    slidesPerView: 2,
    direction: "vertical",
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: true,
    },
  });

  const reviewMarqueeVerticalBottom = new Swiper(".review_marquee_vertical_bottom", {
    loop: true,
    speed: 16000,
    freeMode: true,
    slidesPerView: 2,
    direction: "vertical",
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  });
  // Review Carousel - End
  // --------------------------------------------------


})(jQuery);

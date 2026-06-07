// =================== preloader js  ================== //
document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.querySelector('.preloader');
    if (!preloader) {
        return;
    }
    preloader.style.transition = 'opacity 0.5s ease';
    // Hide the preloader 1 second (1000 milliseconds) after DOM content is loaded
    setTimeout(function () {
        preloader.style.opacity = '0';
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 500); // .5 seconds for the fade-out transition
    }, 1000); // 1 second delay before starting the fade-out effect
});
// =================== preloader js end ================== //


// =================== light and dark start ================== //

const colorSwitcher = document.getElementById('btnSwitch');


switchThemeByUrl();
updateThemeColor(localStorage.getItem('theme') || document.documentElement.getAttribute('data-bs-theme') || 'light')


if (colorSwitcher) {
    colorSwitcher.addEventListener('click', () => {

        const theme = localStorage.getItem('theme');

        if (theme && theme === 'dark') {

            updateThemeColor('light');

        } else {
            updateThemeColor('dark');

        }

    });
}

function updateThemeColor(themeMode = 'light') {

    document.documentElement.setAttribute('data-bs-theme', themeMode);
    localStorage.setItem('theme', themeMode)

    if (themeMode === 'dark') {
        if (colorSwitcher) {
            colorSwitcher.classList.add('dark-switcher');
        }

    } else {
        if (colorSwitcher) {
            colorSwitcher.classList.remove('dark-switcher');
        }
    }

    changeImage(themeMode);

}



function switchThemeByUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    if (theme) {
        localStorage.setItem("theme", theme);
    }

}

// =================== light and dark end ================== //




// =================== Change image path start ================== //


function changeImage(themeMode = 'light') {

    const icon = document.querySelector('#btnSwitch img');
    var images = document.querySelectorAll('img.dark');


    if (themeMode === "dark") {

        if (icon) {
            icon.src = './assets/images/icon/sun.svg';
        }

        for (var i = 0; i < images.length; i++) {
            var normalSrc = images[i].dataset.normalSrc || images[i].src.replace("-dark.", ".");
            images[i].dataset.normalSrc = normalSrc;

            var oldIndex = normalSrc.lastIndexOf(".");
            var baseName = normalSrc.slice(0, oldIndex);
            var extension = normalSrc.slice(oldIndex);
            var darkSrc = baseName + "-dark" + extension;

            images[i].onerror = function () {
                this.onerror = null;
                this.src = this.dataset.normalSrc;
            };
            images[i].src = darkSrc;
        }
    } else {
        if (icon) {
            icon.src = './assets/images/icon/moon.svg';
        }

        for (var i = 0; i < images.length; i++) {
            images[i].onerror = null;
            var normalSrc = images[i].dataset.normalSrc || images[i].src.replace("-dark.", ".");
            images[i].dataset.normalSrc = normalSrc;
            images[i].src = normalSrc;
        }
    }

}


// =================== Change image path end ================== //









// =================== header js start here ===================


// Add class 'menu-item-has-children' to parent li elements of '.submenu'
var submenuList = document.querySelectorAll("ul>li>.submenu");
submenuList.forEach(function (submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
        parentLi.classList.add("menu-item-has-children");
    }
});

// Fix dropdown menu overflow problem
var menuList = document.querySelectorAll("ul");
menuList.forEach(function (menu) {
    var parentLi = menu.parentElement;
    if (parentLi) {
        parentLi.addEventListener("mouseover", function () {
            var menuPos = menu.getBoundingClientRect();
            if (menuPos.left + menu.offsetWidth > window.innerWidth) {
                menu.style.left = -menu.offsetWidth + "px";
            }
        });
    }
});



// Toggle menu on click

var menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent the event from bubbling up to parent elements
        var element = link.parentElement;
        var childMenu = element ? element.querySelector("ul") : null;
        if (parseInt(window.innerWidth, 10) < 1200) {
            if (!childMenu) {
                return;
            }
            if (element.classList.contains("open")) {
                element.classList.remove("open");
                childMenu.style.display = "none";
            } else {
                element.classList.add("open");
                childMenu.style.display = "block";
            }
        }
    });
});




// Toggle header bar on click
var headerBars = document.querySelectorAll(".header-bar");
headerBars.forEach(function (headerBar) {
    headerBar.addEventListener("click", function () {
        headerBar.classList.toggle("active");
        var header = headerBar.closest("header");
        var menu = header ? header.querySelector(".menu") : document.querySelector(".menu");
        if (menu) {
            var isActive = menu.classList.toggle("active");
            headerBar.setAttribute("aria-expanded", isActive ? "true" : "false");
        }
    });
});




//Header
var fixedTop = document.querySelector("header");
if (fixedTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            fixedTop.classList.add("header-fixed", "fadeInUp");
        } else {
            fixedTop.classList.remove("header-fixed", "fadeInUp");
        }
    });
}


// =================== header js end here =================== //




//Animation on Scroll initializing
if (typeof AOS !== 'undefined') {
    AOS.init();
}




// =================== custom trk slider js here =================== //

// component slider here
if (typeof Swiper !== 'undefined' && document.querySelector('.partner__slider')) {
    const Partner = new Swiper('.partner__slider', {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 2,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 25,
            },
        },
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        speed: 2000,
    });
}



// blog  slider here
if (typeof Swiper !== 'undefined' && document.querySelector('.blog__slider')) {
    const blog = new Swiper('.blog__slider', {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },

        autoplay: true,
        speed: 500,
        navigation: {
            nextEl: ".blog__slider-next",
            prevEl: ".blog__slider-prev",
        },
    });
}

// testimonial slider

if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial__slider')) {
    const testimonial = new Swiper('.testimonial__slider', {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
        },

        autoplay: true,
        speed: 500,

        navigation: {
            nextEl: ".testimonial__slider-next",
            prevEl: ".testimonial__slider-prev",
        },
    });
}


// testimonial slider 2
if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial__slider2')) {
    const testimonial2 = new Swiper('.testimonial__slider2', {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },

        autoplay: true,
        speed: 500,

        navigation: {
            nextEl: ".testimonial__slider-next",
            prevEl: ".testimonial__slider-prev",
        },
    });
}



// testimonial slider

if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial__slider3')) {
    const testimonial3 = new Swiper('.testimonial__slider3', {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        autoplay: true,
        speed: 500,
    });
}

if (typeof Swiper !== 'undefined' && document.querySelector('.tow-testimonial-marquee')) {
    const testimonialMarquees = document.querySelectorAll('.tow-testimonial-marquee');
    const testimonialMarqueeCardHeight = 340;

    testimonialMarquees.forEach(function (slider) {
        const reverseDirection = slider.classList.contains('tow-testimonial-marquee--reverse');
        slider.style.minHeight = testimonialMarqueeCardHeight + 'px';
        slider.querySelectorAll('.testimonial__item-inner').forEach(function (card) {
            card.style.height = testimonialMarqueeCardHeight + 'px';
        });

        new Swiper(slider, {
            spaceBetween: 24,
            loop: true,
            loopedSlides: 6,
            allowTouchMove: false,
            slidesPerView: 1,
            speed: 6000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: reverseDirection,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1.2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1600: {
                    slidesPerView: 5,
                },
            },
            on: {
                init: function () {
                    this.wrapperEl.style.transitionTimingFunction = 'linear';
                },
                slideChangeTransitionStart: function () {
                    this.wrapperEl.style.transitionTimingFunction = 'linear';
                },
            },
        });
    });
}

// roadmap slider 
if (typeof Swiper !== 'undefined' && document.querySelector('.roadmap__slider')) {
    const roadmapSlider = new Swiper('.roadmap__slider', {

        grabCursor: true,
        // loop: true,
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 10,
            }

        },

        autoplay: true,
        speed: 500,

    });
}

// =================== custom trk slider end here =================== //




// =================== scroll js start here =================== //

// Show/hide button on scroll
window.addEventListener('scroll', function () {
    var scrollToTop = document.querySelector('.scrollToTop');

    if (scrollToTop) {
        if (window.pageYOffset > 300) {
            scrollToTop.style.bottom = '7%';
            scrollToTop.style.opacity = '1';
            scrollToTop.style.transition = 'all .5s ease';
        } else {
            scrollToTop.style.bottom = '-30%';
            scrollToTop.style.opacity = '0';
            scrollToTop.style.transition = 'all .5s ease';
        }
    }
});

var scrollToTop = document.querySelector('.scrollToTop');

if (scrollToTop) {

    // Click event to scroll to top
    scrollToTop.addEventListener('click', function (e) {
        e.preventDefault();
        var scrollDuration = 100; // Set scroll duration in milliseconds
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });
}

// =================== scroll js end here =================== //



// =================== count start here =================== //
if (typeof PureCounter !== 'undefined') {
    new PureCounter();
}
// =================== count end here =================== //




// =================== rtl icon direction chnage start here =================== //
// Get the HTML tag
const htmlTag = document.querySelector('html');

// Function to toggle the icon directions
function toggleAllIconsDirection() {
    const icons = document.querySelectorAll('i');

    icons.forEach((icon) => {
        if (icon.classList.contains("fa-arrow-right") || icon.classList.contains("fa-angle-right")) {
            icon.classList.remove("fa-arrow-right", "fa-angle-right");
            icon.classList.add("fa-arrow-left", "fa-angle-left");
        } else if (icon.classList.contains("fa-arrow-left") || icon.classList.contains("fa-angle-left")) {
            icon.classList.remove("fa-arrow-left", "fa-angle-left");
            icon.classList.add("fa-arrow-right", "fa-angle-right");
        }
    });
}

// Check if the HTML tag has the dir="rtl" attribute
if (htmlTag.getAttribute('dir') === 'rtl') {
    toggleAllIconsDirection();
}
// =================== rtl icon direction chnage end here =================== //

(function ($) {
	"use strict";
      
	$(window).on('load', function () {
        preloader();
		// aosAnimation();
	});

    $(document).ready(function() {
        if (window.matchMedia("(min-width: 991px)").matches) {
            $('.has-megamenu').hover(function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(200);
                }, function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
            });
        }
    });
    

	/*=============================================
		=    		 Preloader			      =
	=============================================*/
    function preloader() {
        // Code to run when the document is ready.
        $("#preloader").css({ left: "100%" });
    }

	/*=============================================
		=    		 Swiper Slider			      =
	=============================================*/
	if ($('[df-slider]').length) {
		$('[df-slider]').each(function() {
			var SwiperCarousel = $(this);
			var breakpoints = {
				480: { slidesPerView: SwiperCarousel.data('sm-items') || 1, loop: SwiperCarousel.data('sm-loop') || true, autoplay: SwiperCarousel.data('sm-autoplay') || false, spaceBetween: SwiperCarousel.data('sm-space') || 30 },
				640: { slidesPerView: SwiperCarousel.data('md-items') || 1, loop: SwiperCarousel.data('md-loop') || true, autoplay: SwiperCarousel.data('md-autoplay') || false, spaceBetween: SwiperCarousel.data('md-space') || 30 },
				991: { slidesPerView: SwiperCarousel.data('lg-items') || 1, loop: SwiperCarousel.data('lg-loop') || true, autoplay: SwiperCarousel.data('lg-autoplay') || false, spaceBetween: SwiperCarousel.data('lg-space') || 30 },
				1199: { slidesPerView: SwiperCarousel.data('xl-items') || 1, loop: SwiperCarousel.data('xl-loop') || true, autoplay: SwiperCarousel.data('xl-autoplay') || false, spaceBetween: SwiperCarousel.data('xl-space') || 30 }
			};
	
			var swiper = new Swiper(SwiperCarousel[0], {
				slidesPerView: SwiperCarousel.data('items') || 1,
				loop: SwiperCarousel.data('loop') || true,
				speed: SwiperCarousel.data('speed') || 600,
				lazy: SwiperCarousel.data('lazy') || true,
				spaceBetween: SwiperCarousel.data('space') || 30,
				navigation: { nextEl: SwiperCarousel.data('next'), prevEl: SwiperCarousel.data('prev') },
				pagination: { el: SwiperCarousel.data('pagination'), clickable: true,},
				scrollbar: { el: SwiperCarousel.data('scrollbar'), hide: false },
				fadeEffect: { crossFade: true },
				autoplay: SwiperCarousel.data('autoplay') || false,
				breakpoints: breakpoints
			});
		});
	}

	/*=============================================
		=    		 Aos Active  	         =
	=============================================*/
	// function aosAnimation() {
	// 	AOS.init({
	// 		duration: 1000,
	// 		mirror: true,
	// 		once: true,
	// 		disable: 'mobile',
	// 	});
	// }

	/*=============================================
		=    		 Scroll Top Button	         =
	=============================================*/
    $(".scroll-top-btn").on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });

})(jQuery);

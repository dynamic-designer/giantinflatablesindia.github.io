var $ = jQuery.noConflict();
$mainHeaderHeight = $('.main-header').outerHeight();
$stickyHeaderHeight = $('.header-sticky').outerHeight();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	/* Responsive/dropdown Navigation */
	$('.main-dropdown-nav, .main-dropdown-nav ul li ul').slideUp();
	if (window.matchMedia('(max-width: 1199px)').matches) {
		$('.main-dropdown-nav-wrap .hamburger').click(function() {
			$(this).toggleClass('is-open');
			$(this).parents('.main-dropdown-nav-wrap').find('.main-dropdown-nav').slideToggle();
		});
	};
	$(document).mouseup(function (e) {
		var maindropdown = $(".main-dropdown-nav-wrap");
		if(!maindropdown.is(e.target) && maindropdown.has(e.target).length === 0) {
			$('.main-dropdown-nav-wrap .hamburger').removeClass('is-open');
			$('.main-dropdown-nav').slideUp(); 
		}
	});
	$('.main-dropdown-nav ul li ul').parent().addClass('has-child');
	$('.main-dropdown-nav ul li.has-child').prepend('<button class="menu-open-button">+</button>');
	$('.menu-open-button').click( function() {
		$(this).toggleClass('child-open');
		$(this).parent().find('ul').slideToggle();
	} );
	/* header sticky */
	$(window).scroll(function() {
		if ($(this). scrollTop() > $mainHeaderHeight){
			$('.header-sticky').addClass("sticky");
		} else{
			$('.header-sticky').removeClass("sticky");
		}
	});
	/* home-slider */
	setInterval(function () {
	    $(".boxnav__item--next").click();
	}, 5000);
	/* mobile search */
	$('.mobile-header-search').click(function(){
		$(this).addClass('active');
		$(this).find('input[type="search"]').focus();
	});
	$(document).mouseup(function (e) {
		var maindropdown = $(".mobile-header-search");
		if(!maindropdown.is(e.target) && maindropdown.has(e.target).length === 0) {
			$('.mobile-header-search').removeClass('active');
		}
	});
	/* Home banner slider */
	if ($('.home-banner-slider').length > 0) {
		var homeBannerSliderActive = ".home-banner-slider";
		var homeBannerSliderInit = new Swiper(homeBannerSliderActive, {
			loop: true,
			slidesPerView: 1,
			effect: "fade",
			speed: 3000,
			autoplay: {
				delay: 7000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: ".home-banner-slider-dots",
				clickable: true,
			},
		});
		/* Home banner slide animation */
		function animated_swiper(selector, init) {
			var animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					var anim = $(this).data("animation");
					var delay = $(this).data("delay");
					var duration = $(this).data("duration");
					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one("animationend", function () {
							$(this).removeClass(anim + " animated");
						});
				});
			};
			animated();
			init.on("slideChange", function () {
				$(homeBannerSliderActive + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}
		animated_swiper(homeBannerSliderActive, homeBannerSliderInit);
	}
	/* Home banner end */
	setOwnCarousalPosition();
	$('.ourProcess-wrapper .owl-carousel').owlCarousel({
		autoWidth: true,
		autoHeight: true,
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		autoplay: 2000,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1,
				autoWidth: false,
			},
			575: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
	$('.ourClients-wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		autoplay: 2000,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
	$('.ourBlogs-wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		items: 1,
		autoplay: 2000,
		autoplaySpeed: 1000,
	});
	$('.ourCategories-wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		autoplay: 2000,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});
	$('.ourVentures-wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 50,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		autoplay: 2000,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1,
				margin: 10,
			},
			768: {
				items: 2,
				margin: 20,
			},
			992: {
				items: 3,
				margin: 30,
			},
			1200: {
				items: 3,
				margin: 40,
			}
		}
	});

	/* subCatDetail-pills slider */
	if ($('.subCatDetail-pills-slider').length > 0) {
		$('.subCatDetail-pills-slider').slick({
			infinite: true,
			slidesToShow: 4,
			prevArrow:"<button class='slick-prev'><img src='images/icons/arrow.png'></button>",
			nextArrow:"<button class='slick-next'><img src='images/icons/arrow.png'></button>",
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					},
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					},
				}, {
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	}
	/* subCatProducts-pills slider */
	if ($('.subCatProducts-pills-main-slider').length > 0) {
		$('.subCatProducts-pills-main-slider').slick({
			infinite: true,
			variableWidth: true,
			prevArrow:"<button class='slick-prev'><img src='images/icons/arrow.png'></button>",
			nextArrow:"<button class='slick-next'><img src='images/icons/arrow.png'></button>",
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 575,
					settings: {
						variableWidth: false,
						slidesToShow: 1,
					},
				},
			],
		});
	}
	if ($('.subCatProducts-pills-inner-slider').length > 0) {
		$('.subCatProducts-pills-inner-slider').slick({
			infinite: true,
			variableWidth: true,
			prevArrow:"<button class='slick-prev'><img src='images/icons/arrow.png'></button>",
			nextArrow:"<button class='slick-next'><img src='images/icons/arrow.png'></button>",
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 575,
					settings: {
						variableWidth: false,
						slidesToShow: 1,
					},
				},
			],
		});
	}
	/* footer sliders */
	$('.connect-with-us .owl-carousel').owlCarousel({
		loop: true,
		margin: 50,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		autoplay: 2000,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1,
				margin: 10,
			},
			640: {
				items: 2,
				margin: 20,
			},
			992: {
				items: 3,
				margin: 30,
			},
			1400: {
				items: 4,
				margin: 40,
			}
		}
	});
	$('.footer-bottom-row.owl-carousel').owlCarousel({
		dots: false,
		mouseDrag: false,
		nav:true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		autoplay: 2000,
		autoplaySpeed: 1000,
		responsive:{
			0:{
				items:1,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			575:{
				items:2,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			992:{
				items:3,
			},
		}
	});
	/* product slider with tabs */
	if ($('.ourProducts-wrapper').length > 0) {
		$('.ourProducts-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
    		speed: 1000,
			asNavFor: '.ourProducts-wrapper .tabs'
		  });
		  $('.ourProducts-wrapper .tabs').slick({
			variableWidth: true,
			slidesToScroll: 1,
			speed: 1000,
			asNavFor: '.ourProducts-content',
			prevArrow:"<button class='slick-prev'><img src='images/icons/arrow.png'></button>",
			nextArrow:"<button class='slick-next'><img src='images/icons/arrow.png'></button>",
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 575,
					settings: {
						variableWidth: false,
						slidesToShow: 1,
					},
				},
			],
		  });
	};	
	/* client tabs */
	$('.client-tabs-body .client-tabs-content:first-child').fadeIn();
	$('.client-tabs-col:first-child button').addClass('active');
	$('.client-tabs-col button').click(function() {
		$('.client-tabs-col button').removeClass('active');
		$(this).addClass('active');
		let match1 = $('.client-tabs-col button.active').attr('data-tab');
		$('.client-tabs-content').removeClass('active').hide();
		$(`.client-tabs-content[data-content="${match1}"]`).fadeIn();
	});
	/* sticky sidebar top space */
	$('.connect-block.stick').css('top', $stickyHeaderHeight + 10);
	/* sub-categoty-detail slider */
	if ($('.catDetailThumb').length > 0) {
		var thumbnailSlider = new Swiper(".catDetailThumb", {
			loop: true,
			freeMode: true,
			watchSlidesProgress: true,
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			breakpoints: {  
				'0': {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				'480': {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				'768': {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				'992': {
					slidesPerView: 4,
					spaceBetween: 25, 
				},
				'1200': {
					slidesPerView: 5,
					spaceBetween: 25, 
				},
				'1500': {
					slidesPerView: 6,
					spaceBetween: 30, 
				},
			},
		});
		var catDetailBig = new Swiper(".catDetailBig", {
			loop: true,
			spaceBetween: 30,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			thumbs: {
			  swiper: thumbnailSlider,
			},
		});
	};
	/* blog-content-height */
	ourBlogsBox = $('.ourBlogs-box').outerHeight();
	ourBlogsHead = $('.ourBlogs-head').outerHeight();
	$('.ourBlogs-desc').css('height', ourBlogsBox - ourBlogsHead - 57);
	lineclamp();
	blogDetailTitle = $('.blog-detail-title').outerHeight();
	$('.blog-detail-connect-block').css('margin-top',blogDetailTitle + 14);
	/* fancybox */
	if ($("[data-fancybox]").length > 0) {
		Fancybox.bind("[data-fancybox]", {
			// Your custom options
		});
	}
} );

/* Script on load
------------------------------------------------------------------------------*/
$( window ).on( 'load',function() {

} );

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {
     
} );

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {
	setOwnCarousalPosition();
	lineclamp();
} );

/* Script all functions
------------------------------------------------------------------------------*/
function setOwnCarousalPosition() {
	var leftSideOffset = $(".heading").offset().left;
	$(".ourProcess-wrapper").css("padding-left", (leftSideOffset - 16) + "px");
}
function lineclamp() {
	var lineheight = parseFloat($('.ourBlogs-desc p').css('line-height'));
	var calc = parseInt(ourBlogsBox/lineheight);
	$(".ourBlogs-desc").css({"-webkit-line-clamp": "" + calc + ""});
}
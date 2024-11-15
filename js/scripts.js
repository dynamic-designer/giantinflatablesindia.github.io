var $ = jQuery.noConflict();
$mainHeaderHeight = $('.main-header').outerHeight();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
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
	$(document).on("click", function (event) {
		if ($(event.target).closest(".mobile-header-search").length === 0) {
			$('.mobile-header-search').removeClass('active');
		}
	});

	setOwnCarousalPosition();
	$('.ourProcess-wrapper .owl-carousel').owlCarousel({
		autoWidth: true,
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
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
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
	$('.ourBlogs-wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		items: 1
	});
	$('.ourCategories-wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	$('.ourVentures-wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 50,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
	// DOTS - NOT WORKING!!!
	var slider1 = $('#pillsCarousel');
	var slider2 = $('#previewCarousel');
	var slider1FirstSlideIndex; // to determine clone
	var prevIndex = 0; // to determine the direction
	// slider1
	slider1.owlCarousel({
		loop: true,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		smartSpeed: 800,
		dots: false,
		autoWidth: true,
		items: 4,
		margin: 40,
		onInitialized: function (event) {
			slider1FirstSlideIndex = event.item.index; // to determine clone
			highlightActiveItem(event);
		},
		onTranslate: function (event) {
			sliderSync(event);
			highlightActiveItem(event);
		}
	});
	function sliderSync(event) {
		var index = event.item.index;
		var loop = event.relatedTarget.options.loop;
		var slider2CloneCount = slider2.find('.owl-item.cloned').length / 2;

		if (loop) {
			if (index < slider1FirstSlideIndex) { // if active slide is clone
				slider2.trigger('prev.owl.carousel');
			} else {
				if (event.item.count === 2 && event.item.index === 2 && prevIndex === 3) { // if two slides and trigger = next
					slider2.trigger('next.owl.carousel');
				} else {
					slider2.trigger('to.owl.carousel', index - slider2CloneCount);
				}
			}

			prevIndex = event.item.index; // to determine the direction
		} else {
			slider2.trigger('to.owl.carousel', index);
		}
	}
	function highlightActiveItem(event) {
		// Remove custom class from all items
		slider1.find('.owl-item').removeClass('active-item');

		// Add custom class to the currently active item
		var activeIndex = event.item.index;
		slider1.find('.owl-item').eq(activeIndex).addClass('active-item');
	}
	// slider2
	slider2.owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 800,
		items: 1
	});
	$('.ourProcess-wrapper .owl-carousel').owlCarousel({
		autoWidth: true,
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='images/icons/arrow.png'>", "<img src='images/icons/arrow.png'>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
	// Select all elements with the class 'theme-stroke-heading .letters'
	$('.theme-stroke-heading .letters').each(function () {
		var $textWrapper = $(this);

		// Split each character into a span, adding an extra class if it's inside the <span>
		$textWrapper.html($textWrapper.html().replace(/(<\/?span[^>]*>)|(\S)/g, function (match, p1, p2) {
			if (p2) {
				// Check if we are inside the <span> tag
				var insideSpan = $textWrapper.find('span').length > 0 && $textWrapper.find('span').contents().filter(function () {
					return this.nodeType === 3 && this.nodeValue === p2;
				}).length > 0;

				return `<span class='letter'>${p2}</span>`;
			}
			// Keep the original <span> tags
			return p1 || '';
		}));

		// Function to play the animation
		function playAnimation() {
			anime.timeline({ loop: false })
				.add({
					targets: $textWrapper.find('.letter').toArray(),
					translateX: [-100, 0],
					translateY: [50, 0],
					scale: [0, 1],
					rotate: [45, 0],
					opacity: [0, 1],
					duration: 1500,
					easing: "easeOutElastic",
					delay: anime.stagger(70),
				}).add({
					targets: $textWrapper.get(0),
					opacity: 1,
					duration: 1000,
					easing: "easeOutExpo",
					delay: 1000
				});
		}

		// Add hover event listeners using jQuery
		$textWrapper.on('mouseenter', playAnimation);
	});
	$('.move-to-prev').click(function () {
		$('.ourProducts-topbar').find('.owl-next').click(); // Trigger the click event on Slider Arrow Next
	});
	$('.move-to-next').click(function () {
		$('.ourProducts-topbar').find('.owl-prev').click(); // Trigger the click event on Slider Arrow Prev
	});
	
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
} );

/* Script all functions
------------------------------------------------------------------------------*/
function setOwnCarousalPosition() {
	var leftSideOffset = $(".heading").offset().left;
	$(".ourProcess-wrapper").css("padding-left", (leftSideOffset - 16) + "px");
}
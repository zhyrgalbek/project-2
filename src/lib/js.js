$(document).ready(function () {
	$("#carousel-1").owlCarousel({
		items: 1,
		loop: true,
		center: false,
		rewind: false,
		checkVisibility: true,
		nav: true,
		navText: ["", ""],
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab',
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});
	var p = "%";
	$("#carousel-2").owlCarousel({
		loop: true,
		margin: 260,
		// autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		// nav:true,
		navText: ["prev", "next"],
		items: 2,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			}
		}
	});
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function (e) {
		e.preventDefault;
		$hamburger.toggleClass("is-active");
		$("ul.nav").toggleClass("nav-hamb");
	});

	$(".tab_content").hide();
	$(".tab_content:first").show();
	$(".main-tabs li:first").addClass("main-tabs_active");

	$(".main-tabs li").click(function () {
		$(".main-tabs li").removeClass("main-tabs_active");
		$(this).addClass("main-tabs_active");
		// $(".tab_content").slideUp();
		$(".tab_content").hide();
		// var selectTab = $(this).find("a").attr("href");
		var selectTab = $(this).find("a").attr("data-tab");
		// var selectTab = $(this).children().attr("href");
		var contentOne = $('.tab_content[data-tab="'+selectTab+'"]');
		contentOne.fadeIn();
		// contentOne.slideDown();
		// $(selectTab).show();
	});
	$('ul.nav li.nav-li a[href^="#"].nav-link').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
			// scrollTop: $(target).fadeIn()
		}, 500);
	});
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		if( top < 550)
			$(".header-container").removeClass("fixed");
		else
			$(".header-container").addClass("fixed");
	});
});
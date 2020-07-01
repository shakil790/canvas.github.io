//header-slider//
	
	var slider = tns({
		container: '.header-slider-active',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		nav: false,
		navPosition: 'bottom',
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-chevron-right"></i>' , '<i class="fas fa-chevron-left"></i>']
	});
	
	
	//counter-up//
	
	$('.number').counterUp({
		delay: 10,
		time: 1000
	});
	
	
	// testimonial slider //
	
	var slider = tns({
		container: '.testimonial-slider-active',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		nav: false,
		navPosition: 'bottom',
		mouseDrag: true,
		controls: false,
	});
	
	//logo-slider//
	
	var slider = tns({
		container: '.logo-slider-active',
		items: 5,
		slideBy: 'page',
		autoplay: true,
		nav: false,
		navPosition: 'bottom',
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-angle-right"></i>' , '<i class="fas fa-angle-left"></i>'],
		responsiveClass: true,
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },
		  540: {
			items: 2
		  },
		  768: {
			items: 3
		  },
		  1169: {
			items: 4
		  }
		}
	});
	
	
	//blog-------page//
	
	
	
	// scroll-top
	
	
	$(window).scroll(function () {
		if($(this).scrollTop() > 200) {
			$('.scroll-top').fadeIn ();
		} else {
			$('.scroll-top').fadeOut ();
		}	
	});
			
	$('.scroll-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	
	// mean-menu 
	
	 jQuery('#mean-menu').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "992"
    });
	
})
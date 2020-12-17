$(function () {
	$('.highlight--content').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

	$('.nav-button').click(function(){
		if (!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
			$('.nav-menu').addClass('nav-menu--open');
			$('.nav-menu').removeClass('nav-menu--close');
		} else {
			$(this).removeClass('is-active');
			$('.nav-menu').removeClass('nav-menu--open');
			$('.nav-menu').addClass('nav-menu--close');
		}
	});
});
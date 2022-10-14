$('.videocourse__review-carousel-big').slick({
	dots: false,
	// arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	asNavFor: '.videocourse__review-carousel-small',
	prevArrow: '.videocourse__review-carousel-arrow-left',
	nextArrow: '.videocourse__review-carousel-arrow-right'
});

$('.videocourse__review-carousel-small').slick({
	dots: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
	asNavFor: '.videocourse__review-carousel-big',
	// adaptiveHeight: true
	// fade: true,
	// cssEase: 'linear'
});
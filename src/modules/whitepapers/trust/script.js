// $('.whitepapers__trust-big-carousel').slick({
// 	dots: false,
// 	// arrows: false,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	speed: 500,
// 	fade: true,
// 	cssEase: 'linear',
// 	asNavFor: '.whitepapers__trust-small-carousel',
// 	prevArrow: '.videocourse__review-carousel-arrow-left',
// 	nextArrow: '.videocourse__review-carousel-arrow-right'
// });

// $('.whitepapers__trust-small-carousel').slick({
// 	dots: true,
// 	arrows: false,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	speed: 500,
// 	// lazyLoad: 'ondemand',
// 	asNavFor: '.whitepapers__trust-big-carousel',
// 	// adaptiveHeight: true
// 	// fade: true,
// 	// cssEase: 'linear'
// });

// $('.whitepapers__trust-small-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   let srcIframe = $('slick-current.slick-active .whitepapers__trust-iframe').attr('data-lazy');
// 	$('slick-current.slick-active .whitepapers__trust-iframe').attr('src', srcIframe);
// });


$('.whitepapers__trust-big-carousel-link').click(function(e){
	e.preventDefault();
	$('.whitepapers__trust-iframe').attr('src', $(this).attr('href'));
	let carouselNum = $(this).parent().attr('data-carousel');
	$('.whitepapers__trust-big-carousel').slick('slickGoTo', carouselNum);
	console.log(carouselNum);
});

$('.whitepapers__trust-big-carousel').slick({
	vertical: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '.whitepapers__trust__prev',
	nextArrow: '.whitepapers__trust__next',
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				centerMode: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				vertical: false,
				fade: true,
				cssEase: 'linear'
			}
		}
	]
});

$('.whitepapers__trust-big-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
	let href = $('.whitepapers__trust-big-carousel .slick-slide.slick-current.slick-active .whitepapers__trust-big-carousel-link').attr('href');
	$('.whitepapers__trust-iframe').attr('src', href);
});
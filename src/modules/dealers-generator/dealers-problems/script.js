$(window).resize(function(){
	if ($(window).width() < 768 && !$(".mobile_slider").hasClass('slick-initialized')) {
			$(".mobile_slider").slick({
					infinite: true,
					arrows: true,
					dots: true,
					autoplay: true, //автовоспроизведение
					speed: 800, //скорость переключение слайдов
					slidesToShow: 1,
					slidesToScroll: 1,
			});
	} else if ($(window).width() > 767 && $(".mobile_slider").hasClass('slick-initialized')) {
			$(".mobile_slider").slick('unslick');
	}
}); 

if ($(window).width() < 768) {
	$(".mobile_slider").slick({
			infinite: true,
			arrows: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			dots: true,
			autoplay: true, //автовоспроизведение
			speed: 800, //скорость переключение слайдов
			slidesToShow: 1,
			slidesToScroll: 1,
	});
}

$('.step__list-item-link').click(function(e){
	e.preventDefault();
	let text = $(this).find('.step__list-item-link-text').text();
	let num = $(this).find('.step__list-item-link-num').text();
	let carousel_param = $(this).data('link');
	if (!$(this).parent().hasClass('active')) {
		console.log(carousel_param);
		$('.step__list-item').removeClass('active');
		$(this).parent().addClass('active');
		$('.step__container').removeClass('step__container-active');
		$('.step__container[data-show='+carousel_param+']').addClass('step__container-active');
		$('.step__heading-num').text(num);
		$('.step__heading-name').text(text);
		$(".step__carousel").slick('slickGoTo', parseInt(carousel_param));
	}
});

$('.step__carousel').on('beforeChange', function(event, slick, currentSlide,nextSlide){
	console.log(nextSlide);
	if (!$('.step__list-item-link[data-link='+nextSlide+']').parent().hasClass('active')) {
		$('.step__list-item').removeClass('active');
		$('.step__container').removeClass('step__container-active');
		$('.step__container[data-show='+nextSlide+']').addClass('step__container-active');
		$('.step__list-item-link[data-link='+nextSlide+']').parent().addClass('active');
		let text = $('.step__list-item-link[data-link='+nextSlide+']').find('.step__list-item-link-text').text();
		let num = $('.step__list-item-link[data-link='+nextSlide+']').find('.step__list-item-link-num').text();
		$('.step__heading-num').text(num);
		$('.step__heading-name').text(text);
	}
});

$(".step__carousel").slick({
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	dots: false,
	arrows: false,
	fade: true,
  cssEase: 'linear'
});

$('.step__next').click(function(e){
	e.preventDefault();
	$(".step__carousel").slick('slickNext');
})

$('.step__prev').click(function(e){
	e.preventDefault();
	$(".step__carousel").slick('slickPrev');
})
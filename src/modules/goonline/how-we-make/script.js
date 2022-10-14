$(".carousel__list-carousel").slick({
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	dots: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	cssEase: 'linear',
});

$('.carousel__list-block-item-link').click(function(e){
	e.preventDefault();
	if (!$(this).parent().hasClass('active')) {
		$('.carousel__list-block-item').removeClass('active');
		let num = $(this).attr('data-link');
		$(".carousel__list-carousel").slick('slickGoTo', parseInt(num));
		$(this).parent().addClass('active');
	}
});

$('.carousel__list-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	if (!$('.carousel__list-block-item-link[data-link='+nextSlide+']').parent().hasClass('active')) {
		$('.carousel__list-block-item').removeClass('active');
		$('.carousel__list-block-item-link[data-link='+nextSlide+']').parent().addClass('active');
	}
});
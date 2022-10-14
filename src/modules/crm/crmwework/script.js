$('.carousel__list-block-crm .carousel__list-block-item-link').click(function(){
	let link = $(this).data('link');
	$('.crm-block').removeClass('crm-block-active');
	$('.crm-block[data-show='+link+']').addClass('crm-block-active');
});

$('.carousel__list-carousel-crm').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$('.crm-block').removeClass('crm-block-active');
	$('.crm-block[data-show='+nextSlide+']').addClass('crm-block-active');
});
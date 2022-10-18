const owl = $('.mission__slider')

owl.owlCarousel({
	items: 1,
	dots: true,
	autoplay: true,
	autoplayTimeout: 8000,
	autoHeight: true,
	loop: true,
	animateOut: 'fadeOut',
	dotsContainer: '.mission__slider-dots'
});

$('.mission__slider-dot').click(function () {
	owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});
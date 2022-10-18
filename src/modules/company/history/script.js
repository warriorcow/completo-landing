$('.company-history__slider').owlCarousel({
	items: 1,
	dots: true,
	animateOut: 'fadeOut',
	dotsContainer: '.company-history__slider-dots'
});

$('.company-history__slider-dot').click(function () {
	$('.company-history__slider').trigger('to.owl.carousel', [$(this).index(), 300]);
});
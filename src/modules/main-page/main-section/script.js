$('.main-section').slick({
	dots: true,
	arrows: true,
	adaptiveHeight: true,
	infinite: true,
	fade: true,
	cssEase: 'linear',
	//autoplay: true,
	swipe: false,
	pauseOnHover: false,
});
$('.main-section__lang-eng').click(function(e){
	e.preventDefault();
	$(this).animate({opacity: 0}, 100).css('pointer-events', 'none');
	$(this).parent().addClass('no-animate');
	$('.main-section__lang-ru').css('transform', 'translateX(51px)');
	setTimeout(function(){document.location.href = '/eng'}, 600);
});
$('.main-section__lang-ru').click(function(e){
	e.preventDefault();
	$(this).animate({opacity: 0}, 100).css('pointer-events', 'none');
	//$(this).parent().addClass('no-animate');
	$('.main-section__lang-eng').css('transform', 'translateX(-39px)');
	setTimeout(function(){document.location.href = '/'}, 600);
});
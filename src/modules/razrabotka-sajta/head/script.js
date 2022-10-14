$(".primary-head-slider").slick({
	infinite: true,
	arrows: true,
	dots: true,
	speed: 800, //скорость переключения
	fade: true,
	autoplay: true, //автовоспроизведение
	slidesToScroll: 1,
	slidesToShow: 1,
	pauseOnHover: false,
	pauseOnFocus: false,
	cssEase: 'linear',
});

// $('.animation').waypoint(function(direction){
// 	var animation = $(this[0,'element']).attr('data-animate');
// 	$(this[0,'element']).addClass('visible animated ' + animation);}, {
// 			offset: '60%'
// });


if (document.querySelector(".primary-head-slider-block-razrabotka") ) {
	
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var t = $('.primary-head-slider-block').offset();
		var h = $('.primary-head-slider-block').outerHeight();
		var top = t.top;
		if (x > top  && x < top + h) {
			$('.primary-head-slider-block .paralax-item').css('transform', 'translateY('+ parseInt((x-top)) + 'px');
		}
	});
	
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var t = $('.make-sites-section-main').offset();
		var h = $('.make-sites-section-main').outerHeight();
		var top = t.top - 350;
		if (x > top  && x < top + h + 350) {
			$('.make-sites-section-main .paralax-item').css('transform', 'translateY('+ parseInt((x-top)) + 'px');
		} else if (x<top) {
			$('.make-sites-section-main .paralax-item').css('transform', 'translateY(0px)');
		}
	});
	
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var t = $('.make-sites-section').offset();
		var h = $('.make-sites-section').outerHeight();
		var top = t.top - 325;
		if (x > top  && x < top + h + 325) {
			$('.make-sites-section .paralax-item').css('transform', 'translateY('+ parseInt((x-top)) + 'px');
		}
		else if (x<top) {
			$('.make-sites-section .paralax-item').css('transform', 'translateY(0px)');
		}
	});
	
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var t = $('.no-typical').offset();
		var h = $('.no-typical').outerHeight();
		var top = t.top - 325;
		if (x > top  && x < top + h + 325) {
			$('.no-typical .paralax-item').css('transform', 'translateY('+ parseInt((x-top)) + 'px');
		}
		else if (x<top) {
			$('.no-typical .paralax-item').css('transform', 'translateY(0px)');
		}
	});
	
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var t = $('.steps').offset();
		var h = $('.steps').outerHeight();
		var top = t.top - 325;
		if (x > top  && x < top + h + 325) {
			$('.steps .paralax-item').css('transform', 'translateY('+ parseInt((x-top)) + 'px');
		}
		else if (x<top) {
			$('.steps .paralax-item').css('transform', 'translateY(0px)');
		}
	});
	
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var t = $('.coast').offset();
		var h = $('.coast').outerHeight();
		var top = t.top - 325;
		if (x > top  && x < top + h + 325) {
			$('.coast .paralax-item').css('transform', 'translateY('+ parseInt((x-top)) + 'px');
		}
		else if (x<top) {
			$('.coast .paralax-item').css('transform', 'translateY(0px)');
		}
	});
}
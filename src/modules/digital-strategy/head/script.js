if (document.querySelector(".primary-head-slider-block-digital") ) {
	
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var t = $('.primary-head-slider-block').offset();
		var h = $('.primary-head-slider-block').outerHeight();
		var top = t.top;
		if (x > top  && x < top + h) {
			$('.primary-head-slider-block .paralax-item').css('transform', 'translateY('+ parseInt((x-top)) + 'px');
		}
	});

}
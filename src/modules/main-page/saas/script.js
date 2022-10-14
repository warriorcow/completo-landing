$(window).scroll(function() {
	var x = jQuery(this).scrollTop(); // Pos
	var r = 2; // Rate
	var t = $('.saas').offset();
	var h = $('.saas').outerHeight();
	var top = t.top -300;
	if (x > top  && x < top + h) {
		$('.saas__circle').css('transform', 'translateY('+ parseInt((x-top)/r) + 'px');
	}
});

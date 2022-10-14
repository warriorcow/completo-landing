if (document.querySelector(".power") ) {

$(window).scroll(function() {
	var x = jQuery(this).scrollTop(); // Pos
	var r = 10; // Rate
	var r2 = 4;
	var t = $('.power').offset();
	var h = $('.power').outerHeight();
	var top = t.top -300;
	if (x > top  && x < top + 500) {
		$('.power-mouse-paralax__block').css('transform', 'translate('+ parseInt((top-x)/r) + 'px,'+ parseInt((x-top)/r) + 'px');
		//$('.power-paralax').css('transform', 'translateY('+ parseInt((x-top)/r2) + 'px');
	}
});

}

if (document.querySelector(".remove") ) {

$(window).scroll(function() {
	var x = jQuery(this).scrollTop(); // Pos
	var r = 10; // Rate
	var t = $('.remove').offset();
	var h = $('.remove').outerHeight();
	var top = t.top -300;
	if (x > top  && x < top + 500) {
		$('.remove-mouse-paralax__block').css('transform', 'translate('+ parseInt((top-x)/r) + 'px,'+ parseInt((x-top)/r) + 'px');
	}
});

}
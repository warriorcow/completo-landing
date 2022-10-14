if (document.querySelector(".maed") ) {

	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var r = 5; // Rate
		var t = $('.maed').offset();
		var top = t.top -300;
		if (x > top  && x < top + 900) {
			$('.maed__paralax').css('transform', 'translateY('+ parseInt((x-top)/r) + 'px');
		}
	});

	$(".maed__custom-scrollbar").mCustomScrollbar({
		axis:"x"
	});

}

/*
$(window).resize(function(){
	if ($(window).width() > 767) {
		$('.maed__custom-scrollbar').mCustomScrollbar('destroy');
	} else {
			$(".maed__custom-scrollbar").mCustomScrollbar({
				axis:"x"
			});
	}
});

if ($(window).width() < 768) {
	$(".maed__custom-scrollbar").mCustomScrollbar({
		axis:"x"
	});
} */
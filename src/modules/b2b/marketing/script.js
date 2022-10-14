if (document.querySelector(".marketing") ) {

	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var r = 2; // Rate
		var t = $('.marketing').offset();
		var h = $('.marketing').outerHeight();
		var top = t.top -300;
		if (x > top  && x < top + h) {
			$('.marketing__circle').css('transform', 'translateY('+ parseInt((x-top)/r) + 'px');
		}
	});

}

$('.select2').select2({
	minimumResultsForSearch: 1 / 0,
	dropdownPosition: "below"
});

$('.select2').change(function(){
	var val = $('#myTabselect').val();
	//var id_val = '#' + val;
	$('.slick-slider-mob').slick('slickGoTo',val);
  //$('.marketing .tab-pane').removeClass('show active');
  //$(id_val).addClass('show active');
});

$('.slick-slider-mob').slick({
	arrows: false,
	dots:true,
	fade: true,
	cssEase: 'linear'
});
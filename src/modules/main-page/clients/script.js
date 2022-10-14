$(window).on("load",function(){
	$(".clients-container__custom-scrollbar").mCustomScrollbar({
		axis:"x"
	});
});

/*

$(window).resize(function(){
	if ($(window).width() > 1280) {
		$('.clients-container__custom-scrollbar').mCustomScrollbar('destroy');
	} else {
			$(".clients-container__custom-scrollbar").mCustomScrollbar({
				axis:"x"
			});
	}
});
 */
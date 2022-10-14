$(window).on('load', function(){
	$(window).scroll(function(){
		if ($('#form-content').length) {
			var top_position = $('#form-content').offset().top - 80;
			if($(this).scrollTop()>=top_position){
				$('.new-cases__fixed').addClass('new-cases__fixed-hide');
			} else {
				$('.new-cases__fixed').removeClass('new-cases__fixed-hide');
			}
		}
	});
});

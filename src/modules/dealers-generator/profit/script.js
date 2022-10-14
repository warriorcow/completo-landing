$('.profit__list a').click(function(e){
	e.preventDefault();
	$('.profit__list li').removeClass('profit__list-active');
	$(this).parent().addClass('profit__list-active');
	if ($(window).width() > 991) {
		let link = $(this).attr('href');
		let item = $(link).offset().top - 199;
		$("body,html").animate({scrollTop: item}, 800);
	} else {
		let link = $(this).attr('href');
		$('.profit__calc-container-item').removeClass('profit__calc-container-item-active');
		$(link).addClass('profit__calc-container-item-active');
	}
});

$('.profit__calc-percent').mask('#0%*', {reverse: true});
$('.profit__calc-percent-2').mask('##.0%', {reverse: true});
$('.profit__calc-price').mask('# ### ### р.', {reverse: true});
$('.profit__calc-dealers').mask('00', {reverse: true});
$('.profit__calc-coast').mask('#000', {reverse: true});

$('#dealers-site input').on('input', function(){
	let param1 = $('#profit-1').val();
	let param2 = (($('#profit-2').val()).slice(0, -2)).replace(/\s/g, '');
	let result = +param1 * +param2;
	$('#dealers-site .profit__calc-result .num').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
});

$('#personal-seo input').on('input', function(){
	let param1 = $('#profit-3').val();
	let param2 = (($('#profit-4').val()).slice(0, -2)).replace(/\s/g, '');
	let param3 = $('#profit-5').val();
	let result = +param1 * +param2 * +param3;
	$('#personal-seo .profit__calc-result .num').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
});

$('#ad-item input').on('input', function(){
	let param1 = $('#profit-6').val();
	let param2 = (($('#profit-7').val()).slice(0, -2)).replace(/\s/g, '');
	let param3 = $('#profit-8').val().slice(0, -2);
	let param4 = (($('#profit-9').val()).slice(0, -2)).replace(/\s/g, '');
	let param5 = $('#profit-10').val();
	let result = +param1 * +param2 * +param3/100 * (+param4/(+param5));
	$('#ad-item .profit__calc-result .num').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
});

$('#dealers-control input').on('input', function(){
	let param1 = $('#profit-11').val();
	let param2 = $('#profit-12').val();
	let param3 = (($('#profit-13').val()).slice(0, -2)).replace(/\s/g, '');
	let param4 = $('#profit-14').val().slice(0, -1);
	let param5 = $('#profit-15').val().slice(0, -1);
	let result = +param1 * +param2 * +param3 * ((+param4 - (+param5))/100);
	$('#dealers-control .profit__calc-result .num').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
});

if (document.querySelector(".profit") ) {

	$(window).scroll(function(){
		let top_position = $('.profit').offset().top;
		let top_height = $('.profit').outerHeight() - $('.profit__list').height() - $('.profit__title-container').height() - 100;
		if($(this).scrollTop()>=top_position && $(this).scrollTop()<=top_position + top_height){
			$('.profit__title-absolute').addClass('fixed-title');
			$('.profit__list-block').addClass('fixed-title');
		} else {
			$('.profit__title-absolute').removeClass('fixed-title');
			$('.profit__list-block').removeClass('fixed-title');
		}
	});

	$('.profit__calc-container-item').waypoint(function(direction) {
		if (direction === 'down') {
			$('.profit__list li').removeClass('profit__list-active');
			var selector = ".profit__list a[href='#" + this.element.id + "']"; 
			$(selector).parent().addClass('profit__list-active');
		}
		}, {
		offset: '450px'
	});
	$('.profit__calc-container-item').waypoint(function(direction) {
		if (direction === 'up') {
			$('.profit__list li').removeClass('profit__list-active');
			var selector = ".profit__list a[href='#" + this.element.id + "']"; 
			$(selector).parent().addClass('profit__list-active');
		}
		}, {
		offset: '-450px'
	}); 

	$('.profit__select').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below'
	});

	$('.profit__select').change(function(){
		var val = $(this).val();
		$('.profit__calc-container-item').removeClass('profit__calc-container-item-active');
			$(val).addClass('profit__calc-container-item-active');
	});

}
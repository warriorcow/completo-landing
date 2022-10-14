$('.videocourse-cert-block__card-text-content').each(function(index, element) {
	$clamp(element, { clamp: 3 });
});

$('.videocourse-cert-block__card-input-radio').on('change', function(){
	let id = $(this).attr('id');
	let regexp = /\d+/;
	let initialArray = id.match(regexp);
	let initialNum = initialArray[0];
	let fullItems = $('.videocourse-cert-block__card-input-radio').length;
	let num = $('.videocourse-cert-block__card-input-radio:checked').length;
	// console.log(`всего элементов: ${fullItems}, просмотренных: ${num}`);
	let cookieinitialNum = 'browsing_' + initialNum;
	let cookiefullItems = Cookies.get('total_browsing') || 0;
	if ($(this).is(':checked')) {
		$('.videocourses__timeline-list-item[data-num="'+initialNum+'"]').addClass('videocourses__timeline-list-item-active');
		$('.videocourses__timeline-num').text(num);
		Cookies.set(cookieinitialNum, 'true', {expires: 365, path: ''});
		cookiefullItems++;
	} else {
		$('.videocourses__timeline-list-item[data-num="'+initialNum+'"]').removeClass('videocourses__timeline-list-item-active');
		$('.videocourses__timeline-num').text(num);
		Cookies.remove(cookieinitialNum, {path: ''});
		cookiefullItems--;
	}
	if (fullItems == num) {
		$('.videocourse-cert-block-cert-link').addClass('videocourse-cert-block-cert-link-active');
		$('.cert-modal-btn').removeClass('d-none');
		$('.videocourse-modal').modal('hide');
		$('#videocourses-cert-modal').modal();
	} else {
		$('.videocourse-cert-block-cert-link').removeClass('videocourse-cert-block-cert-link-active');
		$('.cert-modal-btn').addClass('d-none');
	}
	if (cookiefullItems) {
		Cookies.set('total_browsing', cookiefullItems, {expires: 365, path: ''});
	} else {
		Cookies.remove('total_browsing', {path: ''});
	}
});

$(window).on("load",function(){
	$(".custom-scrollbar-y").mCustomScrollbar({
		axis:"y"
	});
});

document.addEventListener('DOMContentLoaded', function () {

});

$('.videocourse-cert-block__card-nav').click(function(){
	let current = $(this).data('current');
	let id = $(this).data('next');
	if ($('#videocourses-video-'+id+'').length !== 0) {
		$('#videocourses-video-'+current+'').modal('hide');
		$('#videocourses-video-'+id+'').modal('show');
		setTimeout(function () {
			$('body').addClass('modal-open');
		}, 500);
	}
});

$('.videocourse-cert-block-cert-link').click(function(e){
	e.preventDefault();
	let modal = $(this).attr('href');
	$(this).parents('.videocourse-modal').modal('hide');
	$(modal).modal();
	setTimeout(function () {
		$('body').addClass('modal-open');
	}, 500);
});

$('.videocourse-modal').on('show.bs.modal', function () {
	let link = $(this).data('link');
	if ($(this).find('.videocourse-cert-block__card-video').attr('src') === '') {
		$(this).find('.videocourse-cert-block__card-video').attr('src', link);
	}
});
$('.videocourse-modal').on('hidden.bs.modal', function (e) {
	let $iframes = $(e.target).find('iframe');
	$iframes.each(function (index, iframe) {
		$(iframe).attr('src', $(iframe).attr('src'));
	});
});

// $('.form-certificate-modal').validate({
// 	errorPlacement: function(error, element) {  },
// 	submitHandler: function submitHandler(form) {
// 		var validator = this;
//
// 		let user_sname = $(form).find('input[name="surname"]').val();
// 		let user_fname = $(form).find('input[name="name"]').val();
// 		let user_mail = $(form).find('input[name="email"]').val();
// 		let path = $(form).find('input[name="videocourse"]').val();
// 		let sert = $(form).find('input[name="sert"]').val();
// 		let type = $(form).find('input[name="type"]').val();
// 		let referer = document.referrer;
// 		let fromsite = document.location.href;
//
// 		var data = {
// 			'user_fname' : user_fname,
// 			'user_sname' : user_sname,
// 			'user_mail' : user_mail,
// 			'type' : type,
// 			'refer' : referer,
// 			'clientid' : gaCid,
// 			'user_from_url' : fromsite,
// 		};
//
// 		$.ajax({
// 			type: 'POST',
// 			url: location.origin + '/' + path + '/php/send_mail.php',
// 			dataType: 'json',
// 			data: data,
// 			success: function (data) {
// 			},
// 			error: function (data) {
// 			},
// 			complete: function (data) {
// 				let parent = $(form).parents('.form-certificate-modal-container');
// 				if (data.responseText == 'false' || data.responseText == 'Не могу выбрать базу данных') {
// 					parent.find('.form-certificate-modal-container-link a').replaceWith($('<div>Что-то пошло не так, попробуйте повторить запрос позже.</div>'));
// 				} else if (data.responseText == 'email is already') {
// 					parent.find('.form-certificate-modal-container-link a').replaceWith($('<div>Вам уже был выслан сертификат, если вы не получили его, свяжитесь с нами: <a href="mailto: press-room@completo.ru">press-room@completo.ru</a></div>'));
// 					$(this).parents('.form-certificate-modal-container').find('.form-certificate-modal-container-link').show();
// 				} else {
// 					$('.videocourse-certificate-title').text('Вы настоящий ');
// 					$('.videocourse-certificate-title-yellow').text('молодец');
//
// 					let linkPdf = '/'+ path +'/php/tmp/' + gaCid + '-certificate.pdf';
// 					let linkJpg = '/'+ path +'/php/tmp/' + gaCid + '-certificate.jpg';
// 					parent.find('.form-certificate-modal-container-link a').attr('href', linkPdf);
//
// 					Cookies.set(sert, 'true', {expires: 365, path: ''});
// 					dataLayer.push({
// 							'eventCategory': 'Видеокурс',
// 							'eventAction': 'Курс пройден',
// 							'eventLabel': data.responseText,
// 							'event': 'gaEvent'
// 						}
// 					);
// 				}
// 				parent.find('.form-certificate-modal-container-link').show();
// 			}
// 		});
//
// 		$(form).find('input, button').attr('disabled', false);
// 		validator.resetForm();
// 		form.reset();
//
// 		return false;
// 	}
// });
//
// $('.form-certificate-modal .form_btn').click(function(e){
// 	let form = $(this).parents('.form-certificate-modal');
// 	if (form.valid()) {
// 		e.preventDefault();
// 		setTimeout(function(){form.submit();},200);
// 		form.find('input, button').attr('disabled', true);
// 		$(this).parents('.form-certificate-modal-block').hide();
// 	} else {
// 	}
// });

$('._sendCertificate').validate({
	errorPlacement: function(error, element) {  },
	submitHandler: function submitHandler(form) {
		var validator = this;

		let user_sname = $(form).find('input[name="surname"]').val();
		let user_fname = $(form).find('input[name="name"]').val();
		let user_mail = $(form).find('input[name="email"]').val();
		let path = $(form).find('input[name="videocourse"]').val();
		let sert = $(form).find('input[name="sert"]').val();
		let type = $(form).find('input[name="type"]').val();
		let courseName = $(form).find('input[name="videocourse_name"]').val();
		let referer = document.referrer;
		let fromsite = document.location.href;

		var data = {
			'user_fname' : user_fname,
			'user_sname' : user_sname,
			'user_mail' : user_mail,
			'type' : type,
			'refer' : referer,
			'clientid' : gaCid,
			'user_from_url' : fromsite,
			'videocourse_name': courseName
		};

		$.ajax({
			type: 'POST',
			url: '/ajax/certificate/create-pdf.php',
			data: data,
			success: function (data) {
			},
			error: function (data) {
			},
			complete: function (data) {
				let parent = $(form).parents('.form-certificate-modal-container');
				if (data.responseText === 'Курс пройден') {
					parent.find('.form-certificate-modal-container-link a').replaceWith($('<div>Вам уже был выслан сертификат, если вы не получили его, свяжитесь с нами: <a href="mailto: press-room@completo.ru">press-room@completo.ru</a></div>'));
					$(this).parents('.form-certificate-modal-container').find('.form-certificate-modal-container-link').show();
				}
				else {
					$('.videocourse-certificate-title').text('Вы настоящий ');
					$('.videocourse-certificate-title-yellow').text('молодец');

					let linkPdf = data.responseText;
					parent.find('.form-certificate-modal-container-link a').attr('href', linkPdf);

					Cookies.set(sert, 'true', {expires: 365, path: ''});
					dataLayer.push({
							'eventCategory': 'Видеокурс',
							'eventAction': 'Курс пройден',
							'eventLabel': data.responseText,
							'event': 'gaEvent'
						}
					);
				}
				parent.find('.form-certificate-modal-container-link').show();
			}
		});

	}
})

$('._sendCertificate .form_btn').click(function(e){
	let form = $(this).parents('._sendCertificate');
	if (form.valid()) {
		e.preventDefault();
		setTimeout(function() {
			form.submit();
		},200);
		form.find('input, button').attr('disabled', true);
		$(this).parents('.form-certificate-modal-block').hide();
	}
});
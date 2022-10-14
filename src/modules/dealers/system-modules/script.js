$('.form-container-modal').each(function () {
	$(this).validate({
		errorPlacement: function(error, element) {  },
		submitHandler: function(form) {
			let name = $(form).find('input[name="name"]').val();
			let email = $(form).find('input[name="email"]').val();
			let phone = $(form).find('input[name="phone"]').val();
			let form_id = $(form).attr('data-form');
			let form_type = $(form).attr('data-formtype');
			let name_form = $(form).attr('data-param-name_form');
			let referer = document.referrer;
			let location = document.location.href;
			let params = {};
			let type = $(form).attr('data-type');

			if (type === 'subscribe') {
				params = {
					'form_type' : form_type,
					'form' : form_id,
					'type_scm': 'bind',
					'email' : email,
					'firstname' : name,
					'source' : location,
					'fromsite' : location,
					'mmerge4' : name_form
				};
			} else {
				params = {
					'form_type': form_type,
					'form': form_id,
					'type_scm': 'bind',
					'user_mail': email,
					'user_name': name,
					'user_phone': phone,
					'name_form': name_form,
					'user_from_url': location,
					'location': location,
					'referer': referer,
				};
			}
			if (type === 'subscribe') {
				$.ajax({
					type: 'POST',
					url:"/ajax/leadsToGetResponse.php",
					data: {
						firstname: name,
						email: email,
						fromsite: location,
						mmerge4: name_form
					},
					success: function (data) {}
				});

				$.post('/ajax/subscribe.php', {
					firstname: name,
					email: email,
					fromsite: location,
					listid: 'ffdfc7979d',
					mmerge4: name_form
				});
			}

			if (typeof window['SCMFormWidjetOntime'] !== undefined) {
				if (typeof SCMFormWidjetOntime == 'function') {
					SCMFormWidjetOntime = new SCMFormWidjetOntime();
				}
				SCMFormWidjetOntime.send(params, function (callback) {
					if (callback['data']['result_id'] && type !== 'subscribe') {
						var data = callback['data']['post'];
						$.ajax({
							type: 'POST',
							url: location.origin + '/ajax/send_mail_small.php',
							dataType: 'json',
							data: data,
						});

						dataLayer.push({
							'event':'send_successful_zayavka_sotrudnichestvo',
							'form_name':name_form
						});
					}
				});
			}
			return false;
		}
	});
});

$(document).on('hidden.bs.modal', '.modal', function (event) {
	if ($('.modal:visible').length) {
		$('body').addClass('modal-open');
	}
});

$('.form-container-modal .form_btn, .form-container-modal-new .form_btn-new').click(function(e) {
	e.preventDefault();
	let form = $(this).parents('.form-container-modal');
	if (form.valid()) {
		setTimeout(function(){form.submit();},200);
		form.find('input, button').attr('disabled', true);
		if ($(this).parents('.system-modules-container__form-container').hasClass('subscribe__head-form')) {
			$('#subscribe-modal-done').modal();
		} else if($(this).parents('.system-modules-container__form-container').hasClass('show-modal-done')) {
			$('#subscribe-modal-done').modal();
		} else if(form.hasClass('show-modal-done')) {
			$('#subscribe-modal-done').modal();
		}
	} else {
	}
});

$('.form-container-modal-2').validate({
	errorPlacement: function(error, element) {  },
});

$('.form-container-modal-2 .form_btn').click(function(e){
	e.preventDefault();
	if ($(this).parents('.form-container-modal-2').valid()) {
		let form = $(this).parents('.form-container-modal-2');
		setTimeout(function(){form.submit();},200);
		$(this).parents('.form-container-modal-2').find('input, button').attr('disabled', true);
		$('#subscribe-modal-done').modal();
	} else {
	}
});
if (document.querySelector(".blog") ) { //
	function getMyHashNow(email) {
		var response = $.ajax({
			url: '/ajax/hash_hmac.php',
			type: 'POST',
			datatype: 'json',
			data: {'EMAIL': email},
			success: function (data) {
				// console.log(data);
			}
		});
		return response;
	}
	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var r = 5; // Rate
		var t = $('.blog').offset();
		var top = t.top -300;
		if (x > top  && x < top + 500) {
			//$('.blog__paralax').css('transform', 'translateY('+ parseInt((x-top)/r) + 'px');
		}
	});

	$('#depesha').validate({
		errorPlacement: function(error, element) {  },
		submitHandler: function submitHandler(form) {
			var validator = this;
			var data = $(form).serialize();
			var form_id = $(form).attr('data-form');
			var form_type = $(form).attr('data-formtype');
			var name = $(form).find('input[name="firstname"]').val();
			var email = $(form).find('input[name="email"]').val();
			var fromsite = $(form).find('input[name="fromsite"]').val();
			var mmerge4 = $(form).find('input[name="mmerge4"]').val();
			$(form).html('<div class="dep-descrip">Отправка данных на сервер ... <img class="loading" src="/php_old/loading.gif"></div>').css('color', '#999');
			$(form).find('input, button').attr('disabled', true);
			$.ajax({
				type: 'POST',
				url: "/ajax/leadsToGetResponse.php",
				data: data,
				success: function (data) {
				}
			});
			if (typeof window['SCMFormWidjetOntime'] !== undefined) {
				if (typeof SCMFormWidjetOntime == 'function') {
					SCMFormWidjetOntime = new SCMFormWidjetOntime();
				}
				SCMFormWidjetOntime.send({
					'form_type': form_type,
					'form': form_id,
					'type_scm': 'bind',
					'email': email,
					'firstname': name,
					'fromsite': fromsite,
					'source': fromsite,
					'mmerge4': mmerge4
				}, function (callback) {
					if (callback['data'] != '') {
						// $('#depesha').before("<div class='dep-descrip'>" + callback['data'] + "</div>");
						// $('.dep-title').empty();
						// $('#depesha').empty();
					}
				});
			}
			$.ajax({
				url: '/ajax/subscribe.php', /* url: action, */
				type: 'POST', /* type: method, */
				data: data,
				success: function (data) {
					$(form).before("<div class='dep-descrip'>" + data + "</div>");
					$('.dep-title').empty();
					$(form).empty().hide();
					//setcookie(my_name_cookie, true, day_time_delay);
					if (data !== "Вы уже зарегистрированы!") {
						dataLayer.push({'event': 'send_successful_podpiska_depesha'});
						var carrotvalue = getMyHashNow(email),
						interval = setInterval(function () {
							if (carrotvalue) {
								var response = JSON.parse(carrotvalue.responseText);
								clearInterval(interval);
								dataLayer.push({'UserID': response['userId'], 'event': 'setUserID'});
								carrotquest.auth(response['userId'], response['hash']);
							}
						}, 500);
					}
				}
			});

			$(form).find('input, button').attr('disabled', false);
			validator.resetForm();
			form.reset();

			return false;
		}
	});

	$(".blog__btn").click(function (e) {
		e.preventDefault();

		let form = $(this).parents('#depesha');
		if (form.valid()) {
			setTimeout(function(){form.submit();},200);
		} else {
		}
	});
}
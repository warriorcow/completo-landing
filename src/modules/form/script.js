$('.phone').mask('999999999990000');
$('#new-form').validate({
    rules: {
        file: {
            accept: "image/*,application/pdf,application/vnd.ms-excel,application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-word,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/plain",
        }
    },
    errorPlacement: function(error, element) {  },
    submitHandler: function submitHandler(form) {
        var name = $(form).find('input[name="name"]').val();
        var email = $(form).find('input[name="email"]').val();
        var company = $(form).find('input[name="name-company"]').val();
        var project = $(form).find('textarea[name="message"]').val();
        var money = $(form).find('input[name="money"]').val();
        var phone = $(form).find('input[name="phone"]').val();
        var file = $(form).find('input[name="file"]');
        var marketing = $(form).find('input[name="marketing"]').val();
        var template = $(form).find('input[name="template"]').val();
        var form_id = $(form).attr('data-form');
        var form_type = $(form).attr('data-formtype');
        var referer  = document.referrer;
        var location = document.location.href;
        // if (typeof window['SCMFormWidjetOntime'] !== undefined) {
        //     SCMFormWidjetOntime = new SCMFormWidjetOntime();
        //     SCMFormWidjetOntime.send({
        //         'form_type' : form_type,
        //         'form' : form_id,
        //         'type_scm': 'bind',
        //         'user_mail' : email,
        //         'user_name' : name,
        //         'user_phone' : phone,
        //         'user_project' : project,
        //         'user_site' : company,
        //         'user_budget' : money,
        //         'location' : location,
        //         'referer' : referer,
        //     }, function (callback) {});
            var formData = new FormData();
            formData.append('form_type', form_type);
            formData.append('form', form_id);
            formData.append('user_mail', email);
            formData.append('user_name', name);
            formData.append('user_phone', phone);
            formData.append('user_project', project);
            formData.append('user_site', company);
            formData.append('user_budget', money);
            formData.append('referer', referer);
            formData.append('location', location);
            formData.append('marketing', marketing);
            formData.append('template', template);
            if (file[0].files.length > 0) {
                formData.append('file', file[0].files[0]);
            }
            $.ajax({
                type: 'POST',
                url:"https://www.completo.ru/ajax/send_mail_copy_lead.php",
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (data) {}
            });
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
            }
        // }
        return false;
    }
});

$('#new-form .form_btn').click(function(e){
	if ($(this).parents('#new-form').valid()) {
		e.preventDefault();
		$('#myModal').modal();
		dataLayer.push({'event': 'send_successful_zayavka_sotrudnichestvo', 'form_name':'Запросить предложение'});
		$('.modal').fadeIn().css('display', 'flex').addClass('open');
		setTimeout(function(){$('#new-form').submit();},200);
	} else {
	}
});

$('.data-scroll').click(function(e) {
	var scroll_block = $(this).attr('data-scroll');
	/*if ($(window).width() < 767) {
		var scroll_block_mobile = $(this).attr('data-scroll-mobile');
		var scroll_there_mobile = '#' + scroll_block_mobile;
		var scroll_item_mobile = $(scroll_there_mobile).offset().top - 70;
		$("body,html").animate({scrollTop: scroll_item_mobile}, 800);
	}*/
	var scroll_there = '#' + scroll_block;
	var scroll_item = $(scroll_there).offset().top - 70;
$("body,html").animate({scrollTop: scroll_item}, 800);
});

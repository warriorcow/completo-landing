$('.form-content').each(function () {
    $(this).validate({
        errorPlacement: function(error, element) {  },
        submitHandler: function submitHandler(form) {
            var validator = this;
            var funcName = $(form).attr('data-success-callback');
            if (typeof window[funcName] === 'function') {
                let call = eval(funcName)(form);
                console.log(call);
            }
            var submitJS = $(form).attr('data-success-submit');
            if (submitJS !== undefined && submitJS.length > 0) {
                submitJS = htmlspecialchars_decode(submitJS);
                eval(submitJS);
            }
            $(form).find('input, button').attr('disabled', false);
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Contact');
            }
            // validator.resetForm();
            form.reset();

            return false;
        }
    });
});

$('.form-content .form_btn').click(function(e){
    let form = $(this).parents('.form-content');
	if (form.valid()) {
		e.preventDefault();

        setTimeout(function(){form.submit();},200);
        form.find('input, button').attr('disabled', true);
        if(form.hasClass('show-modal-done')) {
            $('#content-modal-done').modal();
            $('#content-modal-done .modal-title h2').text('Спасибо за интерес!');
            $('#content-modal-done .modal-body').removeClass('d-none');
        }
	} else {
	}
});

$('.form-content .chat-bot').click(function(e){
    let form = $(this).parents('.form-content');

    if (form.valid()) {
        form.find('.valid').removeClass('valid');
        // setTimeout(function(){form.submit();},200);
        // form.find('input, button').attr('disabled', true);
    } else {
        form.find('.error').removeClass('error');
    }
    if(form.hasClass('show-modal-done')) {
        $('#content-modal-done').modal();
        $('#content-modal-done .modal-title h2').text('Спасибо! Мы отправили материалы вам в мессенджер.');
        $('#content-modal-done .modal-body').addClass('d-none');
    }
});

function htmlspecialchars_decode(string, quoteStyle) {
    var optTemp = 0
    var i = 0
    var noquotes = false

    if (typeof quoteStyle === 'undefined') {
        quoteStyle = 2
    }
    string = string.toString()
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE': 1,
        'ENT_HTML_QUOTE_DOUBLE': 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE': 4
    }
    if (quoteStyle === 0) {
        noquotes = true
    }
    if (typeof quoteStyle !== 'number') {
        quoteStyle = [].concat(quoteStyle)
        for (i = 0; i < quoteStyle.length; i++) {
            if (OPTS[quoteStyle[i]] === 0) {
                noquotes = true
            } else if (OPTS[quoteStyle[i]]) {
                optTemp = optTemp | OPTS[quoteStyle[i]]
            }
        }
        quoteStyle = optTemp
    }
    if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/&#0*39;/g, "'")
    }
    if (!noquotes) {
        string = string.replace(/&quot;/g, '"')
    }
    string = string.replace(/&amp;/g, '&')

    return string
}
$('.data-scroll').click(function(e) {
    var scroll_block = $(this).attr('data-scroll');
    var scroll_there = '#' + scroll_block;
    var scroll_item = $(scroll_there).offset().top - 70;
    $("body,html").animate({scrollTop: scroll_item}, 800);
});

(function () {
    $('.animation').waypoint(function(direction){
        var animation = $(this[0,'element']).attr('data-animate');
        $(this[0,'element']).addClass('visible animated ' + animation);}, {
        offset: '60%'
    });
})();

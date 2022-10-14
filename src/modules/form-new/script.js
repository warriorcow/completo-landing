$("#new-form-min").validate({
    errorPlacement: function (error, element) {},
    submitHandler: function submitHandler(form) {
        var name = $(form).find('input[name="name"]').val();
        var email = $(form).find('input[name="email"]').val();
        var company = $(form).find('input[name="name-company"]').val();
        var project = $(form).find('textarea[name="message"]').val();
        var money = $(form).find('input[name="money"]').val();
        var phone = $(form).find('input[name="phone"]').val();
        var form_id = $(form).attr("data-form");
        var form_type = $(form).attr("data-formtype");
        var referer = document.referrer;
        var location = document.location.href;
        // if (typeof window["SCMFormWidjetOntime"] !== undefined) {
        //     SCMFormWidjetOntime = new SCMFormWidjetOntime();
        //     SCMFormWidjetOntime.send(
        //         {
        //             form_type: form_type,
        //             form: form_id,
        //             type_scm: "bind",
        //             user_mail: email,
        //             user_name: name,
        //             user_phone: phone,
        //             user_project: project,
        //             user_site: company,
        //             user_budget: money,
        //             location: location,
        //             referer: referer,
        //         },
        //         function (callback) {}
        //     );

            $.ajax({
                type: "POST",
                url: "https://www.completo.ru/ajax/send_mail_copy_lead.php",
                data: {
                    form_type: form_type,
                    form: form_id,
                    user_mail: email,
                    user_name: name,
                    user_phone: phone,
                    user_project: project,
                    user_site: company,
                    user_budget: money,
                    referer: referer,
                    location: location,
                },
                success: function (data) {},
            });
        // }
        return false;
    },
});

$("#new-form-min button").click(function (e) {
    if ($(this).parents("#new-form-min").valid()) {
        e.preventDefault();
        let initialModal = $(this).data("modal");
        $(initialModal).modal();
        dataLayer.push({
            event: "send_successful_zayavka_sotrudnichestvo",
            form_name: "Запросить предложение",
        });
        // $(".modal").fadeIn().css("display", "flex").addClass("open");
        setTimeout(function () {
            $("#new-form").submit();
        }, 200);
    } else {
    }
});
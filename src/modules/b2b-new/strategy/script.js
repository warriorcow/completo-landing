$(document).ready(function () {
    $('.b2b__work-mobileList').each(function (index, value) {
        let block = '._workMobileList_'+index;
        $(block).slick({
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    });

})

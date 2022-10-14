$('._marathonProgramSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        }
    ]
})
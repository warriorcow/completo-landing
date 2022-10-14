$('._toggleMobileMenu').on('click', function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active')
});
$('._closeMenu').on('click', function () {
    $('.header__menu').removeClass('active');
})
if ($(window).width() < 992) {
    $('._dropdownMenu').on('click', function (e) {
        e.preventDefault();
        let parent = $(this).parent();
        $(parent).toggleClass('active');
        if ($(parent).hasClass('active')) {
            $(parent).find('.menu__dropdown').slideDown();
        } else {
            $(parent).find('.menu__dropdown').slideUp();
        }
    })
    $('._dropdownMenuItem').on('click', function (e) {
        e.preventDefault();
        let parent = $(this).parent();
        $(parent).toggleClass('active');
        let height = 0;
        if ($(parent).hasClass('active')) {
            $(parent).find('ul').slideDown();
        } else {
            $(parent).find('ul').slideUp();
        }
    })

}
// $('._dropdownMenu').on('mouseenter', function () {
//     debugger
//     $('._dropdownMenu').parent().removeClass('active');
//     $(this).parent().addClass('active');
// });
// $('.menu__item-dropdown .menu__dropdown').on('mouseleave', function () {
//     debugger;
//     $(this).parent().removeClass('active');
// });
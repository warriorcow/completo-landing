// $('.footer__title-xs').click(function(e){
// 		e.preventDefault();
// 		if ($(this).hasClass('dropdown-element_active')) {
// 				$(this).next().slideUp();
// 				$(this).removeClass('dropdown-element_active');
// 		} else {
// 				$('.footer__title-xs').removeClass('dropdown-element_active');
// 				$('.footer__ul').slideUp().removeClass('footer__active-ul');
// 				$(this).next().slideDown();
// 				$(this).addClass('dropdown-element_active');
// 		}
// });

// дата

var date = new Date();
$('.footer-date').text(date.getFullYear());
$('.big-slick').slick({
  centerMode: true,
  variableWidth: true,
	dots: true,
	autoplay: true,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
      }
    },
  ]
}).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
  if (currentSlide !== nextSlide) {
      document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
          // timeout required or Slick will overwrite the classes
          setTimeout(() => next.classList.add('slick-current', 'slick-center'));
      });
  }
});

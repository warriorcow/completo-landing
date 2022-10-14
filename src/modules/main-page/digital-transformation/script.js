function responseTarifOwl() {
  console.log(this);
  if ($(window).width() > 992) {
    this.options.items = 3;
    this.options.stagePadding = 0;
  } else {
    this.options.items = 1;
    this.options.stagePadding = 30;
  }
}

$(".owl-tarifs").owlCarousel({
  margin: 15,
  items: 1,
  stagePadding: 30,
  dots: true,
  touchDrag: true,
  mouseDrag: false,
  onResize: responseTarifOwl,
  onInitialize: responseTarifOwl,
});

$(".tarif-card__next").click(function () {
  $(".owl-tarifs").trigger("next.owl.carousel");
});
$(".tarif-card__prev").click(function () {
  $(".owl-tarifs").trigger("prev.owl.carousel");
});

$(".owl-right").owlCarousel({
  loop: true,
  autoWidth: true,
  items: 4,
  center: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
});

$(".owl-left").owlCarousel({
  loop: true,
  autoWidth: true,
  items: 4,
  center: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 3500,
  rtl: true,
  autoplayHoverPause: true,
});

if (document.querySelector(".digital-transformation")) {
  $(window).scroll(function () {
    var x = jQuery(this).scrollTop(); // Pos
    var r = 2; // Rate
    var t = $(".digital-transformation").offset();
    var h = $(".digital-transformation").outerHeight();
    var top = t.top - 300;
    if (x > top && x < top + h) {
      $(".digital-transformation__circle").css(
        "transform",
        "translateY(" + parseInt((x - top) / r) + "px"
      );
    }
  });
}

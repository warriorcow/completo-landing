$(window).scroll(function () {
	if ($(window).scrollTop() > 0) {
		$(".header").addClass("header_floating");
	} else {
		$(".header").removeClass("header_floating");
	}
});

$(document).on(
	{
		mouseenter: function () {
			$(".header-xl .nav-link-dropdown").hide();
			$("header.header-xl").addClass("expand");
			$(".header-xl .cases__row").css("display", "flex");
		},
	},
	".header-xl .nav-item"
);

$(document).on(
	{
		mouseenter: function () {
			$(this).children().next().css("display", "flex");
		},
	},
	".header-xl .dropdown-element"
);

$(document).on(
	{
		mouseleave: function () {
			$(".header-xl .nav-link-dropdown").hide();
			$(".header-xl .cases__row").hide();
			$(this).removeClass("expand");
		},
	},
	".header.header-xl"
);

$(document).on(
	{
		click: function (e) {
			e.preventDefault();
			$(".dropdown-link_md").removeClass("dropdown-link_md--active");
			$(this).addClass("dropdown-link_md--active");
			if ($(this).hasClass("dropdown-link_md-1")) {
				if (!$(".dropdown_md-1").is(":visible")) {
					$(".dropdown_md").slideUp();
					$(".dropdown_md-1").slideDown();
				}
			} else if ($(this).hasClass("dropdown-link_md-2")) {
				if (!$(".dropdown_md-2").is(":visible")) {
					$(".dropdown_md").slideUp();
					$(".dropdown_md-2").slideDown();
				}
			} else if ($(this).hasClass("dropdown-link_md-3")) {
				if (!$(".dropdown_md-3").is(":visible")) {
					$(".dropdown_md").slideUp();
					$(".dropdown_md-3").slideDown();
				}
			} else if ($(this).hasClass("dropdown-link_md-4")) {
				if (!$(".dropdown_md-4").is(":visible")) {
					$(".dropdown_md").slideUp();
					$(".dropdown_md-4").slideDown();
				}
			} else if ($(this).hasClass("dropdown-link_md-5")) {
				if (!$(".dropdown_md-5").is(":visible")) {
					$(".dropdown_md").slideUp();
					$(".dropdown_md-5").slideDown();
				}
			}
		},
	},
	".dropdown-link_md"
);

$(document).on(
	{
		click: function () {
			if ($(this).parent().hasClass("dropdown-element_active")) {
				$(this).parent().removeClass("dropdown-element_active");
				$(this).parent().children().next().slideUp();
			} else {
				$(".dropdown-element-xs").removeClass("dropdown-element_active");
				$(this).parent().addClass("dropdown-element_active");
				$(".dropdown-xs").slideUp();
				$(this).parent().children().next().slideDown();
			}
		},
	},
	".dropdown-element-xs .nav-link-xs"
);

$(document).on(
	{
		click: function (e) {
			e.preventDefault();
		},
	},
	".nav-link-xs"
);

$(".navbar-toggler").click(function () {
	$(this).parent().parent().parent().parent().parent().toggleClass("expand");
	$(".dropdown-link_md").removeClass("dropdown-link_md--active");
	$(".dropdown_md").hide();
	$(".cases__tab-title").attr("aria-expanded", false);
	$(".cases__tab .collapse").removeClass("show");
});

$("footer").mouseup(function (e) {
	var div = $(".header");
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		div.removeClass("expand");
	}
});

$(".slick-example").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
});

$(".animation").waypoint(
	function (direction) {
		var animation = $(this[(0, "element")]).attr("data-animate");
		$(this[(0, "element")]).addClass("visible animated " + animation);
	},
	{
		offset: "60%",
	}
);

$(".file-input-file").on("change", function () {
	let inputVal = $(this).val().split(`\\`);
	$(this)
		.parents(".file-input")
		.find(".file-input-item-text")
		.text(inputVal[inputVal.length - 1]);
});

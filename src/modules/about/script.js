if ($(window).width() > 1200) {
	var n = 1;
	while (n <= 7) {
			var about_text = '.about__p-' + n;
			var about_num = '.about__num-' + n;
			var text_width = $(about_text).width();
			$(about_num).css('width', text_width);
			n++;
	}
}
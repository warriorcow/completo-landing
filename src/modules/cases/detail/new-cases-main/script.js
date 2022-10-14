$(window).on('load', function(){

	if ($('.case-detail').length) {
		if ($('#form-content').length) {
			$(window).scroll(function(){
				var top_position = $('#form-content').offset().top - 80;
				if($(this).scrollTop()>=top_position){
					$('.new-cases__fixed').addClass('new-cases__fixed-hide');
				} else {
					$('.new-cases__fixed').removeClass('new-cases__fixed-hide');
				}
			});
		}

		function rounded(number){
			return +number.toFixed(2);
		}

		function syncViewScroll() {
			let $container = $('.case-detail-page-present_normal .case-detail-page-present__view-content'),
				$mainView = $container.find('.case-detail-page-present__view-main')[0],
				$mobileView = $container.find('.case-detail-page-present__view-mobile')[0],
				$mobileViewImg = $container.find('.case-detail-page-present__view-mobile img')[0],
				$mobileViewWrapper = $container.find('.case-detail-page-present__view-mobile-wrapper'),
				$mainHeight = $mainView.getBoundingClientRect().height,
				$mobileHeight = $mobileViewImg.height,
				$curMainScroll = $mainView.getBoundingClientRect().top,
				$mobileViewWrapperHeight = $mobileViewWrapper.find('.case-detail-page-present__view-mobile-img')[0].height,
				$percent = 0,
				$mobileMaxScroll = $mobileHeight - $mobileView.offsetHeight;
			$mobileViewWrapper[0].style.height = $mobileViewWrapperHeight + 'px';
			function changeCustomScroll() {
				let $tmpCurScroll = $mainView.getBoundingClientRect().top,
					$tmpPercent, $tmpToScroll;
				if ($tmpCurScroll < 0 && Math.abs($tmpCurScroll) < Math.abs($mainHeight)) {
					$curMainScroll = $tmpCurScroll;
					$tmpPercent = rounded(Math.abs($tmpCurScroll)/Math.abs(($mainHeight - $mobileViewWrapperHeight + 100)));
					$tmpToScroll = $mobileViewImg.offsetHeight*$tmpPercent;
					if ($percent !== $tmpPercent) {
						$percent = $tmpPercent;
						if (Math.abs($tmpToScroll) > Math.abs($mobileMaxScroll)) {
							$tmpToScroll = $mobileMaxScroll;
						}
						$mobileViewImg.style.transform = "translate(0,-"+$tmpToScroll+"px)";
					}
				}
			}
			window.addEventListener('scroll', changeCustomScroll);
		}
		function syncViewScroll2() {
			let $container = $('.case-detail-page-present_revers .case-detail-page-present__view-content'),
				$mainView = $container.find('.case-detail-page-present__view-main')[0],
				$mobileView = $container.find('.case-detail-page-present__view-mobile')[0],
				$mobileViewImg = $container.find('.case-detail-page-present__view-mobile img')[0],
				$mobileViewWrapper = $container.find('.case-detail-page-present__view-mobile-wrapper'),
				$mainHeight = $mainView.getBoundingClientRect().height,
				$mobileHeight = $mobileViewImg.height,
				$curMainScroll = $mainView.getBoundingClientRect().top,
				$mobileViewWrapperHeight = $mobileViewWrapper.find('.case-detail-page-present__view-mobile-img')[0].height,
				$percent = 0,
				$mobileMaxScroll = $mobileHeight - $mobileView.offsetHeight;
			$mobileViewWrapper[0].style.height = $mobileViewWrapperHeight + 'px';
			function changeCustomScroll2() {
				let $tmpCurScroll = $mainView.getBoundingClientRect().top,
					$tmpPercent, $tmpToScroll;
				if ($tmpCurScroll < 0 && Math.abs($tmpCurScroll) < Math.abs($mainHeight)) {
					$curMainScroll = $tmpCurScroll;
					$tmpPercent = rounded(Math.abs($tmpCurScroll)/Math.abs(($mainHeight - $mobileViewWrapperHeight + 100)));
					$tmpToScroll = $mobileViewImg.offsetHeight*$tmpPercent;
					if ($percent !== $tmpPercent) {
						$percent = $tmpPercent;
						if (Math.abs($tmpToScroll) > Math.abs($mobileMaxScroll)) {
							$tmpToScroll = $mobileMaxScroll;
						}
						$mobileViewImg.style.transform = "translate(0,-"+$tmpToScroll+"px)";
					}
				}
			}
			window.addEventListener('scroll', changeCustomScroll2);
		}
		syncViewScroll();
		syncViewScroll2();
	}
});

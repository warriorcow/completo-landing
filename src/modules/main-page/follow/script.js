
	
	$(window).on('load', function(){
		if (document.querySelector("#vk_groups") ) {
		function initWidget() {
			$.getScript("//vk.com/js/api/openapi.js?162")
			.then(function () {
				VK.init({apiId: vk_groups, onlyWidgets: true});
				VK.Widgets.Group("vk_groups", {
					mode: 3,
					width: "auto",
					height: "260",
					color3: 'FECC2F'}, 
					66714099);
			});
			$.getScript("https://apis.google.com/js/platform.js")
			.then(function(){

			});
			$("#fb-container").append('<div id="fb-root"></div> <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v4.0"></script><div class="fb-page" data-href="https://www.facebook.com/completo.ru" data-tabs="timeline" data-width="" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/completo.ru" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/completo.ru">Комплето - Системный Электронный Маркетинг</a></blockquote></div>');
		}
		setTimeout(initWidget, 5000);
	}
	});
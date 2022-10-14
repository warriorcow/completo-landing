// menu = new Vue({
// 	el: '#webinar',
// 	data: {
// 			items: []
// 	},
// 	mounted: function () {
// 			let $menu = this;

// 			$.ajax({
// 					type: 'get',
// 					dataType: "text",
// 					url: './../menu/webinar.json',
// 					xhrFields: {
// 							withCredentials: false
// 					},
// 					success: function (data) {
// 						try {
// 							var output = JSON.parse(data);
// 							$menu.items = output;
// 							setTimeout( function () {
// 								//setWidthSubmenu();
// 								//initMenuEvents();
// 							}, 500);
// 						} catch (e) {
// 							// console.log("Output is not valid JSON: " + data);
// 						}
// 					},
// 					error: function (xhr, status, error) {
// 							console.log(error);
// 					}
// 			});
// 	}
// });
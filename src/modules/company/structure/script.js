// $('.company-structure__tab').each(function() {
// 	$(this).click(function() {
// 		let tabId = $(this).attr('data-id');
// 		$('.company-structure__tab-content').each(function() {
// 			console.log(tabId)
// 			if (tabId === $(this).attr('data-id')) {
// 				$(this).addClass('active')
// 			}
// 	})
// })

$('.company-structure__tab').click(function() {
	$('.company-structure__tab').removeClass('active');
	$(this).addClass('active');
	$(`.company-structure__tab-content`).removeClass('active');
	$(`.company-structure__tab-content[data-id=${$(this).attr('data-id')}]`).addClass('active');
});

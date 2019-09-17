$(document).ready(function() {
	$('.menu__list__link').on('click',function() {
		$('.menu__drop').slideToggle('menu__drop__list');
	});
});
$(document).ready(function() {
	$('.recomend__categories').on('click',function() {
		$('.recomend__list').slideToggle('recomend__list__item');
	});
});
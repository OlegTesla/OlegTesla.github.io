$(function() {
	$('#datepicker').datepicker({ 
	});
});


$(function() {
	$('.burger,.navmob__menu').on('click',function() {
		$('.header__navmob__list').slideToggle('.header__item');
	});
});
$(function() {
	$('#datepicker').datepicker({ 
	});
});

$(function() {
	$('.burger,.navmob__menu').on('click',function() {
		$('.header__navmob__list').slideToggle('.header__item');
	});
});

$(document).ready(function() {
$(".up__btn").click(function() {
     $('html, body').animate({
         scrollTop: $(".header").offset().top
     }, 1500);
 });
});
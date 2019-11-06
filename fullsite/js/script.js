$(function() {
	$('.burger,.navmob__menu').on('click',function() {
		$('.mobile__navmob__list').slideToggle('.mobile__item__list');
	});
});

$(document).ready(function() {
$(".up__btn").click(function() {
     $('html, body').animate({
         scrollTop: $(".header").offset().top
     }, 1500);
 });
});
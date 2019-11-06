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


//navmob menu scroll function

$(document).ready(function() {
	$(".header__navmob").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$(".header__navmob").addClass("default").fadeIn("2000");
		} else {
			$(".header__navmob").removeClass("default").fadeIn("slow");
		};
	});
});
$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$('.navmob').toggleClass('menu_active');
	$('.content').toggleClass('content_active');
});

/*$("a[href='#akita']").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});*/

$(document).ready(function() {
$(".header__scroll__circle").click(function() {
     $('html, body').animate({
         scrollTop: $(".akita").offset().top
     }, 1500);
 });
});

$(document).ready(function() {
$(".btn-up").click(function() {
     $('html, body').animate({
         scrollTop: $(".header").offset().top
     }, 1000);
 });
});
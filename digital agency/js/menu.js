$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$('.navmob').toggleClass('menu_active');
	$('.content').toggleClass('content_active');
});
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

$(".form__input").click(function() {
	$('.name').toggleClass('input-active');
});

$(document).ready(function(){
    $("#head__top").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
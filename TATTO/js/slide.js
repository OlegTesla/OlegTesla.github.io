$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
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


 const ball = document.querySelector('.ball');
const ballY = value(0, styler(ball).set('y'));

const gravity = physics({
  acceleration: 2500,
  restSpeed: false
}).start(ballY);

listen(ball, 'mousedown touchstart').start(() => {
  gravity
    .set(ballY.get())
    .setVelocity(-1200);
});
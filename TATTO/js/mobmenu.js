$(document).ready(function () {
  $('.navmob__burger').click(function (event) {
    $('.navmob__burger,.navmob__right').toggleClass('active');
    $('body').toggleClass('lock');
  })
})
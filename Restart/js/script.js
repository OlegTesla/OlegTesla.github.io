$(document).ready(function(){
	$('.header__burger').click(function(event){
		$(".header__nav,.header__burger").toggleClass('active');
		$('body').toggleClass('lock');
	})
});
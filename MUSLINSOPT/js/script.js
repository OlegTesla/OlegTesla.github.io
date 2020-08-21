$(document).ready(function(){
	$('.header__burger').click(function(event){
		$(".header__inner,.header__burger").toggleClass('active');
		$('body').toggleClass('lock');
	})
});

// accordion
$(document).ready(function(){
	$(".accordion-item__triger").click(function(){
		$(this).next('.accordion-item__content').slideToggle(200);
	});
});
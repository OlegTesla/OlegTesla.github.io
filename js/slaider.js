$(document).ready(function(){
  $('.head__slaider__slide, .clients__slaider__slide, .reviews__slide').slick({
  	 dots: true,
	  arrows: true
  });	
    $('.navmob__menu__hide').hide();
    $('.navmob__container__left').click(function(){
    	$(this).children('.hamb__active');
    	$('.navmob__menu__hide').slideToggle();
    	$('.hamb').toggleClass("hamb__active");
    });
});


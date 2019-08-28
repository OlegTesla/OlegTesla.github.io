$(document).ready(function(){
  $('.head__slaider__slide, .clients__slaider__slide, .reviews__slide').slick({
  	 dots: true,
	  arrows: true
  });
    $(".navmob__down").click(function(){
  	$(this).next(".navmob__submenu").slideToggle();
  });
    $('.navmob__menu').hide();
    $('.hamb__container').click(function(){
    	$(this).children('.hamb__active');
    	$('.navmob__menu').slideToggle();
    	$('.hamb').toggleClass("hamb__active");
    });
});


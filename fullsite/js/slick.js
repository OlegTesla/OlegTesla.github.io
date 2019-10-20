// first slaider
$('.header__slaider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false
});

// second slaider
$('.best__container,.best__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true
});

// third slaider
$('.clients__sliader').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	dots: true,
	arrows: false
});

// tabs
$(".tab_item").not(":first").hide();
$(".wrapper,.tab").click(function() {
	$(".wrapper,.tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
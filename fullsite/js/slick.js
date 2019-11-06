// first slaider
$('.header__slaider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	cssEase: 'ease-out',
	verticalSwiping: true,
	vertical: true
});

// second slaider
$('.best__container,.best__slider,.related__container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'ease-out',
  dots: true,
  arrows: true
});

// third slaider
$('.clients__sliader').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	cssEase: 'ease-out',
	dots: true,
	arrows: false
});

// four slaider
$('.awards__container__slaider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	cssEase: 'ease-out',
	dots: true,
	arrows: true
});

// tabs
$(".tab_item").not(":first").hide();
$(".wrapper,.tab").click(function() {
	$(".wrapper,.tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
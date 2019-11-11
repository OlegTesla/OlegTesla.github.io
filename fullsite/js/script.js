$(function() {
	$('.burger,.navmob__menu').on('click',function() {
		$('.mobile__navmob__list').slideToggle('.mobile__item__list');
	});
});

$(document).ready(function() {
$(".up__btn").click(function() {
     $('html, body').animate({
         scrollTop: $(".header").offset().top
     }, 1500);
 });
});


//navmob menu scroll function

$(document).ready(function() {
	$(".header__navmob").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$(".header__navmob").addClass("default");
		} else {
			$(".header__navmob").removeClass("default");
		};
	});
});
/*
// scroll to top
$("a[href='#scroll']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
*/

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  $('html,body').animate({ scrollTop: 0 }, 'slow');
  document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$(".header__nav,.header__burger").toggleClass('active');
		$('body').toggleClass('lock');
	})
});

//  Set caption from card text
$('.video a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});
//  Set caption from card text
$('.road__block a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});
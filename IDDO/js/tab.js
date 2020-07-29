$(function() {
	let filter = $("[data-filter]");
	filter.on("click", function(event){
		event.preventDefault();
		let cat = $(this).data('filter');
		if(cat == "all") {
			$("[data-cat]").removeClass('hide');
		} else {
			$("[data-cat]").each(function(){
				let workCat = $(this).data('cat');
				if(workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});
});

// slider
$(document).ready(function(){
  $('.slaider__box').slick({
  	arrows: false,
  	dots: true
  });
});
// progress bar 
function Circlle(el) {
 	$(el).circleProgress({fill: {color: "#ca3c3c"}})
 	.on("circle-animation-progress" , function(event, progress, stepValue) {
 		$(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+"%");
 	});
 };
 Circlle(".round");



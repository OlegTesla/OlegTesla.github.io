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
// filter 
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

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};

tab();
// arrow class in accordion
$(".accordion-item__triger").on("click", function() {
	$(this).children('.arrow').toggleClass('active');
});


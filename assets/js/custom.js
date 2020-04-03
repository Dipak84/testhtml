$(document).ready(function(){
	// start your custom js

	// Responsive function
	checkSize();
	$(window).resize(checkSize);
    
	//FORM FLOATING LABEL
	$('.floating-label .form-control, [floating-label] .form-control').on('focus blur', function (e) {
		$(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
	}).trigger('blur');
	
	//Slider js
	$('.bike-slider').slick({
		arrows: true,
		draggable: false,
		dots: true,
		slidesToShow: 1,
		prevArrow: '<button type="button" data-role="none" class="slick-prev">Previos</button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',

		responsive: [{
	
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				infinite: true
			}
	
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				dots: true
			}
	
		}, {
			breakpoint: 300,
	
		}]
	});

	//Popover
	$("[data-toggle=popover-price]").popover({
		html: true,
		content: function() {
			  return $('#popover-content-price').html();
			}
	});

	$("[data-toggle=popover-advanced]").popover({
		html: true, 
		content: function() {
			return $('#popover-content-advanced').html();
		} 
	});

	// $('.performance-list li').click(function(){
	// 	$(this).siblings().removeClass('active');
	// 	$(this).addClass('active');
	// 	$('.feature-item-content').removeClass('active');
	// 	$($(this).attr('data-target')).addClass('active');
	// });
	
	

	$('.target-link').on('click', function(e){
		var screenWidth = window.outerWidth;
		e.preventDefault();
		var targetValue = $(this).attr('href');
		tabsTarget = $(this).attr('data-target');
		if (tabsTarget){
			$('#pills-tab a[href="' + tabsTarget + '"]').tab('show');
		}
        if (tabsTarget){
            $('#pills-tab a[href="' + tabsTarget + '"]').tab('show');
        }
		var htmlString = $(this).html();
		$('.responsive-link').text(htmlString);
		if(targetValue === '#smartXonnect-section'){

			if(screenWidth > 992){
				$('html, body').animate({
					scrollTop: $(targetValue).offset().top
				}, 1000);
			} else if (screenWidth < 991.98){
				$('html, body').animate({
					scrollTop: $(targetValue).offset().top - 50
				}, 1000);
			}
			
		} else{

			if(screenWidth > 992){
				$('html, body').animate({
					scrollTop: $(targetValue).offset().top - 50
				}, 1000);
			} else if (screenWidth < 991.98){
				$('html, body').animate({
					scrollTop: $(targetValue).offset().top - 80
				}, 1000);
			}
		}
	});
	
	// Logout Menu
	logoutDpMenu();
	
});

//Function to the css rule


function checkSize(){
	var screenWidth = window.outerWidth;
    if(screenWidth < 991.98){
		mobilePerformance();
		responsiveStickyMenu();
	} else if(screenWidth > 992){
		desktopPerformance()
	} else if (screenWidth < 767){
		dashboardMobile()
	}
}

function desktopPerformance(){
	var tabs = $('#performance-list li');
	var autoTabs = setInterval(tabChange, 3000);
	
	function tabChange(){
		var onTab = tabs.filter('.active');
		var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
		nextTab.click();
	}

	tabs.click(function(e) {
		e.preventDefault();
		clearInterval(autoTabs);
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.feature-item-content').removeClass('active');
		$($(this).attr('data-target')).addClass('active');

		setTimeout(function(){
			autoTabs = setInterval(tabChange, 3000)
		}, 0);
	});
}


function mobilePerformance(){
	var tabs = $('#performance-list li');
	tabs.click(function(e) {
		e.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
		$('.feature-item-content').removeClass('active');
		$($(this).attr('data-target')).addClass('active');
	});
}

function dashboardMobile(){
	$('.js-toggle').click(function() {
		$('.js-visible').slideToggle();
		$("h3", this).toggleClass("expand step-title");
		$("i", this).toggleClass("icon-arrow-up icon-arrow-down");
	});
}

function responsiveStickyMenu(){
	$('.responsive-link').on('click', function(e){
		e.stopPropagation();
		$(this).parents().toggleClass('open-sticky-menu');
	})
	$('body').on('click', function(){
		$('nav').removeClass('open-sticky-menu');
	})
}

function logoutDpMenu(){
	/* Logout toggle*/
	$(".logout-toggle").on('click', function(e){
		e.stopPropagation();
		$(".js-div").toggleClass('open-dp-menu');
	});
	$('body').on('click', function(){
		$(".js-div").removeClass('open-dp-menu');
	}) 
}
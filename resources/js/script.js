/*=====================================
            exam pop up
=====================================*/

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})


/*=====================================
            show hide
=====================================*/
$(document).ready(function () {
    $('.nav-tabs > li > a').click(function (event) {
        event.preventDefault(); //stop browser to take action for clicked anchor
        //get displaying tab content jQuery selector
        var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');
        //find actived navigation and remove 'active' css
        var actived_nav = $('.nav-tabs > li.active');
        actived_nav.removeClass('active');
        //add 'active' css into clicked navigation
        $(this).parents('li').addClass('active');
        //hide displaying tab content
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide');
        //show target tab content
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');
    });
});

/*=====================================
                 tutors
=====================================*/
$(function () {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});






/*=====================================
            accordion
=====================================*/
/* accordion */
const accordions_items = document.querySelectorAll('.accordion-item');

accordions_items.forEach(elem =>
    elem.addEventListener('click', () => {
        if (elem.classList.contains('open')) {
            elem.classList.remove('open');
        } else {
            accordions_items.forEach(elem2 => elem2.classList.remove('open'));
            elem.classList.add('open');
        }
    }))
/*=====================================
        data selection blog
=====================================*/

$('.btn').click(function () {
    $('.btn').removeClass("btn-outline-primary");
    $(this).addClass("btn-outline-primary");
})

$(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
        $('.filter').show('1000');
    } else {
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');
    }
});
/*=====================================
            pop up form
=====================================*/
function popupOpenClose(popup) {

    /* Add div inside popup for layout if one doesn't exist */
    if ($(".wrapper").length == 0) {
        $(popup).wrapInner("<div class='wrapper'></div>");
    }

    /* Open popup */
    $(popup).show();

    /* Close popup if user clicks on background */
    $(popup).click(function (e) {
        if (e.target == this) {
            if ($(popup).is(':visible')) {
                $(popup).hide();
            }
        }
    });

    /* Close popup and remove errors if user clicks on cancel or close buttons */
    $(popup).find("button[name=close]").on("click", function () {
        if ($(".formElementError").is(':visible')) {
            $(".formElementError").remove();
        }
        $(popup).hide();
    });
}

$(document).ready(function () {
    $("[data-js=open]").on("click", function () {
        popupOpenClose($(".popup"));
    });
});

/*===============================================
                    Blog share
===============================================s*/

$(document).ready(function ($) {

    $('.card__share > a').on('click', function (e) {
        e.preventDefault() // prevent default action - hash doesn't appear in url
        $(this).parent().find('div').toggleClass('card__social--active');
        $(this).toggleClass('share-expanded');
    });

});

/*===============================================
                    NAVBAR
===============================================s*/
$('.js--navbar').waypoint(function (direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
});





/*===============================================
            show hide phone design
===============================================s*/


$(document).ready(function(){

  $('.showBtn').click(function() {
    //$('.hideme').hide();  
    if ($(this).hasClass('active')) {    
      $(this).removeClass('active');
      $('.hideme').slideUp();
    } 
    else {
      $('.hideme').slideUp();
      $('.showBtn').removeClass('active');
      $(this).addClass('active');
      $(this).next().filter('.hideme').slideDown();
    }
  });
})







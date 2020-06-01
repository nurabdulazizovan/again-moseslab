/*===============================================
            show hide phone design
===============================================s*/


$(document).ready(function(){

  $('.showbtn').click(function() {
    //$('.hideme').hide();  
    if ($(this).hasClass('active')) {    
      $(this).removeClass('active');
      $('.hideme').slideUp();
    } 
    else {
      $('.hideme').slideUp();
      $('.showbtn').removeClass('active');
      $(this).addClass('active');
      $(this).next().filter('.hideme').slideDown();
    }
  });
})
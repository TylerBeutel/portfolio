$(document).ready(function(){

  // Toggle Menu
  $('#mobile-menu').click(function(){
    $('#nav-links').slideToggle();
    $(this).toggleClass('close');
  });

  // If link is clicked
  $('#nav-links a').click(function(){
    if ( $('#mobile-menu').css('display') != 'none' ) {      
      $('#nav-links').slideUp('fast');
      $('#mobile-menu').removeClass('close');
    }
  });

});

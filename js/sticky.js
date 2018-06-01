$(document).ready(function(){
  var $nav = $('nav');
  var $navTop = $nav.offset().top;

  $(window).scroll(function() {
      if ($(window).scrollTop() > $navTop) {
          $nav.addClass('stick');
      }
      else {
          $nav.removeClass('stick');
      }
  });
});

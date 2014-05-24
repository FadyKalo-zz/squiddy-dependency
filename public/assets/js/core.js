//******************************* Bind Functions Jquery- LAYOUT OPTIONS API ***************

(function ($) {
  //Show/Hide Main Menu
  $.fn.toggleMenu = function () {
    var windowWidth = window.innerWidth;
    if(windowWidth >768){
      $(this).toggleClass('hide-sidebar');
    }
  };
  //Condense Main Menu
  $.fn.condensMenu = function () {
    var windowWidth = window.innerWidth;
    if(windowWidth >768){
      if ($(this).hasClass('hide-sidebar')) $(this).toggleClass('hide-sidebar');

      $(this).toggleClass('condense-menu');
      $(this).find('#main-menu').toggleClass('mini');
    }
  };
  //Toggle Fixed Menu Options
  $.fn.toggleFixedMenu = function () {
    var windowWidth = window.innerWidth;
    if(windowWidth >768){
      $(this).toggleClass('menu-non-fixed');
    }
  };

  $.fn.toggleHeader = function () {
    $(this).toggleClass('hide-top-content-header');
  };

  $.fn.toggleChat = function () {
    if ($.fn.unveil) {
      if ($(this).hasClass('sidr')) $.sidr('open', 'sidr');
      else $.sidr('close', 'sidr');
    }
  };

})(jQuery);
'use strict';

window.a = {
  //-----------------------------------------------------
  init: function() {

    console.log('Exciting Times')


    // INITIATE ALL THE THINGS
    if ( $('.wrapper-page.project').length ) {

      // $('.wrapper-page > nav').headroom({
      //   tolerance: { top:20, bottom:4 }
      // });

      $("section.feature .description").stick_in_parent({
        offset_top:80,
      })
        .on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
          $(this).parent().css('position', 'relative');
        });
    } else if ( $('.wrapper-page.index').length ) {

      console.log('true')
      $('header a.scroll-down').on('click', function (e) {

        var target = $(this).attr('href')
        console.log(target)

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);

        return false;
       
      });

    }

    // this.navController.init();

  },
  //-----------------------------------------------------
};


$(document).ready(function () {
  a.init();
});
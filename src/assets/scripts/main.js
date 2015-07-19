'use strict';

window.a = {
  //-----------------------------------------------------
  init: function() {

    console.log('Exciting Times')


    // INITIATE ALL THE THINGS
    if ( $('.wrapper-page.project').length ) {

      this.project.stickyDescriptions()

    } else if ( $('.wrapper-page.index').length ) {

      this.index.resizeHeader()
      this.index.scrollToContent()

    }

    // this.navController.init();

  },
  utils: {
    breakpoint: function () {
      $('body').append('<div class="js-bp-check"></div>');
      var bp = $('.js-bp-check').css('z-index');
      console.log('breakpoint:',bp);
      return bp;
    },
  },
  /////////--------------------- INDEX
  index: {
    resizeHeader: function() {

      var $header = $('header');
      $header.height( $(window).height() );
      //Gotta get the height again bc of mn-height issues
      $('.wrapper-scrollable').css('margin-top', $header.height());

    },
    scrollToContent: function () {

      $('header a.scroll-down').on('click', function (e) {
        var target = $(this).attr('href')
        console.log(target)
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
      });

    }
  },
  /////////--------------------- PROJECT
  project: {
    stickyDescriptions: function () {

      $(window).load(function() {

        $("section.feature .description").stick_in_parent({
          offset_top:80,
        })
        .on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
          $(this).parent().css('position', 'relative');
        });

      });

    },
  },
//-----------------------------------------------------

};


$(document).ready(function () {
  a.init();
});
'use strict';

window.a = {
  //-----------------------------------------------------
  init: function() {

    console.log('Exciting Times')
    if (a.utils.breakpoint() >= 2) {
      $(".animsition").animsition({
        inClass               :   'fade-in',
        outClass              :   'fade-out',
        inDuration            :    1500,
        outDuration           :    800,
        linkElement           :   '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading               :    true,
        loadingParentElement  :   'body', //animsition wrapper element
        loadingClass          :   'animsition-loading',
        unSupportCss          :   [],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay               :   false,

        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'
      });
    }

    // INITIATE ALL THE THINGS
    if ( $('.wrapper-page.project').length ) {

      this.project.stickyDescriptions()

    } else if ( $('.wrapper-page.index').length ) {

      if (a.utils.breakpoint() >= 2) {
        console.log('shit runs')
        this.index.resizeHeader()
        this.index.scrollToContent()
      }

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
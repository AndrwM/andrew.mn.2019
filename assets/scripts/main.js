(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.a = {
  //-----------------------------------------------------
  init: function() {

    // if (a.utils.breakpoint() >= 2) {

    //   // Add the body class required for animsition
    //   $('body > .wrapper-page').addClass('animsition');

    //   $(".animsition").animsition({
    //     inClass               :   'fade-in',
    //     outClass              :   'fade-out',
    //     inDuration            :    1500,
    //     outDuration           :    800,
    //     linkElement           :   '.animsition-link',
    //     // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    //     loading               :    true,
    //     loadingParentElement  :   'body', //animsition wrapper element
    //     loadingClass          :   'animsition-loading',
    //     unSupportCss          :   [],
    //     //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //     //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

    //     overlay               :   false,

    //     overlayClass          :   'animsition-overlay-slide',
    //     overlayParentElement  :   'body'
    //   });
    // }

    // // Initiate Things On A Per Page Basis
    // if ( $('.wrapper-page.project').length ) {

    //   this.project.stickyDescriptions()

    // } else if ( $('.wrapper-page.index').length ) {

    //   this.index.resizeHeader()

    // }

    // this.utils.scrollToContent()

  },
  utils: {
    breakpoint: function () {

      // Double check that the div doesn't already exist..
      if ( $('body > .js-bp-check').length <= 0 ) {
        $('body').append('<div class="js-bp-check"></div>');
      }

      var bp = $('.js-bp-check').css('z-index');
      // console.log('breakpoint:',bp);
      return bp;

    },
    scrollToContent: function () {

      $('.js-scroll-to').on('click', function (e) {
        var target = $(this).attr('href')
        // console.log(target)
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
      });

    },
  },
  /////////--------------------- INDEX
  index: {
    resizeHeader: function() {

      var $header = $('header');
      $header.height( $(window).height() );

      $('.wrapper-scrollable').css('margin-top', $header.height());

    },
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
  console.log('Interested in what\'s going on under the hood? Contact me: Studio@Andrew.mn');
  console.log('Thanks for visiting!');
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS9wZXJzb25hbC1sYW5kaW5nLXBhZ2Uvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FuZHJldy9Ecm9wYm94L0FuZHJldyBNY0ludGVlL3BlcnNvbmFsLWxhbmRpbmctcGFnZS9zcmMvYXNzZXRzL3NjcmlwdHMvZmFrZV8zNjBjMzVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuYSA9IHtcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbml0OiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGlmIChhLnV0aWxzLmJyZWFrcG9pbnQoKSA+PSAyKSB7XG5cbiAgICAvLyAgIC8vIEFkZCB0aGUgYm9keSBjbGFzcyByZXF1aXJlZCBmb3IgYW5pbXNpdGlvblxuICAgIC8vICAgJCgnYm9keSA+IC53cmFwcGVyLXBhZ2UnKS5hZGRDbGFzcygnYW5pbXNpdGlvbicpO1xuXG4gICAgLy8gICAkKFwiLmFuaW1zaXRpb25cIikuYW5pbXNpdGlvbih7XG4gICAgLy8gICAgIGluQ2xhc3MgICAgICAgICAgICAgICA6ICAgJ2ZhZGUtaW4nLFxuICAgIC8vICAgICBvdXRDbGFzcyAgICAgICAgICAgICAgOiAgICdmYWRlLW91dCcsXG4gICAgLy8gICAgIGluRHVyYXRpb24gICAgICAgICAgICA6ICAgIDE1MDAsXG4gICAgLy8gICAgIG91dER1cmF0aW9uICAgICAgICAgICA6ICAgIDgwMCxcbiAgICAvLyAgICAgbGlua0VsZW1lbnQgICAgICAgICAgIDogICAnLmFuaW1zaXRpb24tbGluaycsXG4gICAgLy8gICAgIC8vIGUuZy4gbGlua0VsZW1lbnQgICA6ICAgJ2E6bm90KFt0YXJnZXQ9XCJfYmxhbmtcIl0pOm5vdChbaHJlZl49I10pJ1xuICAgIC8vICAgICBsb2FkaW5nICAgICAgICAgICAgICAgOiAgICB0cnVlLFxuICAgIC8vICAgICBsb2FkaW5nUGFyZW50RWxlbWVudCAgOiAgICdib2R5JywgLy9hbmltc2l0aW9uIHdyYXBwZXIgZWxlbWVudFxuICAgIC8vICAgICBsb2FkaW5nQ2xhc3MgICAgICAgICAgOiAgICdhbmltc2l0aW9uLWxvYWRpbmcnLFxuICAgIC8vICAgICB1blN1cHBvcnRDc3MgICAgICAgICAgOiAgIFtdLFxuICAgIC8vICAgICAvL1widW5TdXBwb3J0Q3NzXCIgb3B0aW9uIGFsbG93cyB5b3UgdG8gZGlzYWJsZSB0aGUgXCJhbmltc2l0aW9uXCIgaW4gY2FzZSB0aGUgY3NzIHByb3BlcnR5IGluIHRoZSBhcnJheSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3Nlci5cbiAgICAvLyAgICAgLy9UaGUgZGVmYXVsdCBzZXR0aW5nIGlzIHRvIGRpc2FibGUgdGhlIFwiYW5pbXNpdGlvblwiIGluIGEgYnJvd3NlciB0aGF0IGRvZXMgbm90IHN1cHBvcnQgXCJhbmltYXRpb24tZHVyYXRpb25cIi5cblxuICAgIC8vICAgICBvdmVybGF5ICAgICAgICAgICAgICAgOiAgIGZhbHNlLFxuXG4gICAgLy8gICAgIG92ZXJsYXlDbGFzcyAgICAgICAgICA6ICAgJ2FuaW1zaXRpb24tb3ZlcmxheS1zbGlkZScsXG4gICAgLy8gICAgIG92ZXJsYXlQYXJlbnRFbGVtZW50ICA6ICAgJ2JvZHknXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyBJbml0aWF0ZSBUaGluZ3MgT24gQSBQZXIgUGFnZSBCYXNpc1xuICAgIC8vIGlmICggJCgnLndyYXBwZXItcGFnZS5wcm9qZWN0JykubGVuZ3RoICkge1xuXG4gICAgLy8gICB0aGlzLnByb2plY3Quc3RpY2t5RGVzY3JpcHRpb25zKClcblxuICAgIC8vIH0gZWxzZSBpZiAoICQoJy53cmFwcGVyLXBhZ2UuaW5kZXgnKS5sZW5ndGggKSB7XG5cbiAgICAvLyAgIHRoaXMuaW5kZXgucmVzaXplSGVhZGVyKClcblxuICAgIC8vIH1cblxuICAgIC8vIHRoaXMudXRpbHMuc2Nyb2xsVG9Db250ZW50KClcblxuICB9LFxuICB1dGlsczoge1xuICAgIGJyZWFrcG9pbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gRG91YmxlIGNoZWNrIHRoYXQgdGhlIGRpdiBkb2Vzbid0IGFscmVhZHkgZXhpc3QuLlxuICAgICAgaWYgKCAkKCdib2R5ID4gLmpzLWJwLWNoZWNrJykubGVuZ3RoIDw9IDAgKSB7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJqcy1icC1jaGVja1wiPjwvZGl2PicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnAgPSAkKCcuanMtYnAtY2hlY2snKS5jc3MoJ3otaW5kZXgnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdicmVha3BvaW50OicsYnApO1xuICAgICAgcmV0dXJuIGJwO1xuXG4gICAgfSxcbiAgICBzY3JvbGxUb0NvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgJCgnLmpzLXNjcm9sbC10bycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCh0YXJnZXQpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCA1MDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgIH0sXG4gIH0sXG4gIC8vLy8vLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJTkRFWFxuICBpbmRleDoge1xuICAgIHJlc2l6ZUhlYWRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciAkaGVhZGVyID0gJCgnaGVhZGVyJyk7XG4gICAgICAkaGVhZGVyLmhlaWdodCggJCh3aW5kb3cpLmhlaWdodCgpICk7XG5cbiAgICAgICQoJy53cmFwcGVyLXNjcm9sbGFibGUnKS5jc3MoJ21hcmdpbi10b3AnLCAkaGVhZGVyLmhlaWdodCgpKTtcblxuICAgIH0sXG4gIH0sXG4gIC8vLy8vLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQUk9KRUNUXG4gIHByb2plY3Q6IHtcbiAgICBzdGlja3lEZXNjcmlwdGlvbnM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgJChcInNlY3Rpb24uZmVhdHVyZSAuZGVzY3JpcHRpb25cIikuc3RpY2tfaW5fcGFyZW50KHtcbiAgICAgICAgICBvZmZzZXRfdG9wOjgwLFxuICAgICAgICB9KVxuICAgICAgICAub24oJ3N0aWNreV9raXQ6Ym90dG9tJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCdwb3NpdGlvbicsICdzdGF0aWMnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdzdGlja3lfa2l0OnVuYm90dG9tJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgfSk7XG5cbiAgICB9LFxuICB9LFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG59O1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgYS5pbml0KCk7XG4gIGNvbnNvbGUubG9nKCdJbnRlcmVzdGVkIGluIHdoYXRcXCdzIGdvaW5nIG9uIHVuZGVyIHRoZSBob29kPyBDb250YWN0IG1lOiBTdHVkaW9AQW5kcmV3Lm1uJyk7XG4gIGNvbnNvbGUubG9nKCdUaGFua3MgZm9yIHZpc2l0aW5nIScpO1xufSk7XG5cbiJdfQ==

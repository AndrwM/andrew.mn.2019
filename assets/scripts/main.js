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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS9wZXJzb25hbC1sYW5kaW5nLXBhZ2Uvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS9wZXJzb25hbC1sYW5kaW5nLXBhZ2Uvc3JjL2Fzc2V0cy9zY3JpcHRzL2Zha2VfOGRjOGEyOS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmEgPSB7XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW5pdDogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBpZiAoYS51dGlscy5icmVha3BvaW50KCkgPj0gMikge1xuXG4gICAgLy8gICAvLyBBZGQgdGhlIGJvZHkgY2xhc3MgcmVxdWlyZWQgZm9yIGFuaW1zaXRpb25cbiAgICAvLyAgICQoJ2JvZHkgPiAud3JhcHBlci1wYWdlJykuYWRkQ2xhc3MoJ2FuaW1zaXRpb24nKTtcblxuICAgIC8vICAgJChcIi5hbmltc2l0aW9uXCIpLmFuaW1zaXRpb24oe1xuICAgIC8vICAgICBpbkNsYXNzICAgICAgICAgICAgICAgOiAgICdmYWRlLWluJyxcbiAgICAvLyAgICAgb3V0Q2xhc3MgICAgICAgICAgICAgIDogICAnZmFkZS1vdXQnLFxuICAgIC8vICAgICBpbkR1cmF0aW9uICAgICAgICAgICAgOiAgICAxNTAwLFxuICAgIC8vICAgICBvdXREdXJhdGlvbiAgICAgICAgICAgOiAgICA4MDAsXG4gICAgLy8gICAgIGxpbmtFbGVtZW50ICAgICAgICAgICA6ICAgJy5hbmltc2l0aW9uLWxpbmsnLFxuICAgIC8vICAgICAvLyBlLmcuIGxpbmtFbGVtZW50ICAgOiAgICdhOm5vdChbdGFyZ2V0PVwiX2JsYW5rXCJdKTpub3QoW2hyZWZePSNdKSdcbiAgICAvLyAgICAgbG9hZGluZyAgICAgICAgICAgICAgIDogICAgdHJ1ZSxcbiAgICAvLyAgICAgbG9hZGluZ1BhcmVudEVsZW1lbnQgIDogICAnYm9keScsIC8vYW5pbXNpdGlvbiB3cmFwcGVyIGVsZW1lbnRcbiAgICAvLyAgICAgbG9hZGluZ0NsYXNzICAgICAgICAgIDogICAnYW5pbXNpdGlvbi1sb2FkaW5nJyxcbiAgICAvLyAgICAgdW5TdXBwb3J0Q3NzICAgICAgICAgIDogICBbXSxcbiAgICAvLyAgICAgLy9cInVuU3VwcG9ydENzc1wiIG9wdGlvbiBhbGxvd3MgeW91IHRvIGRpc2FibGUgdGhlIFwiYW5pbXNpdGlvblwiIGluIGNhc2UgdGhlIGNzcyBwcm9wZXJ0eSBpbiB0aGUgYXJyYXkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXG4gICAgLy8gICAgIC8vVGhlIGRlZmF1bHQgc2V0dGluZyBpcyB0byBkaXNhYmxlIHRoZSBcImFuaW1zaXRpb25cIiBpbiBhIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIuXG5cbiAgICAvLyAgICAgb3ZlcmxheSAgICAgICAgICAgICAgIDogICBmYWxzZSxcblxuICAgIC8vICAgICBvdmVybGF5Q2xhc3MgICAgICAgICAgOiAgICdhbmltc2l0aW9uLW92ZXJsYXktc2xpZGUnLFxuICAgIC8vICAgICBvdmVybGF5UGFyZW50RWxlbWVudCAgOiAgICdib2R5J1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gSW5pdGlhdGUgVGhpbmdzIE9uIEEgUGVyIFBhZ2UgQmFzaXNcbiAgICAvLyBpZiAoICQoJy53cmFwcGVyLXBhZ2UucHJvamVjdCcpLmxlbmd0aCApIHtcblxuICAgIC8vICAgdGhpcy5wcm9qZWN0LnN0aWNreURlc2NyaXB0aW9ucygpXG5cbiAgICAvLyB9IGVsc2UgaWYgKCAkKCcud3JhcHBlci1wYWdlLmluZGV4JykubGVuZ3RoICkge1xuXG4gICAgLy8gICB0aGlzLmluZGV4LnJlc2l6ZUhlYWRlcigpXG5cbiAgICAvLyB9XG5cbiAgICAvLyB0aGlzLnV0aWxzLnNjcm9sbFRvQ29udGVudCgpXG5cbiAgfSxcbiAgdXRpbHM6IHtcbiAgICBicmVha3BvaW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8vIERvdWJsZSBjaGVjayB0aGF0IHRoZSBkaXYgZG9lc24ndCBhbHJlYWR5IGV4aXN0Li5cbiAgICAgIGlmICggJCgnYm9keSA+IC5qcy1icC1jaGVjaycpLmxlbmd0aCA8PSAwICkge1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwianMtYnAtY2hlY2tcIj48L2Rpdj4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJwID0gJCgnLmpzLWJwLWNoZWNrJykuY3NzKCd6LWluZGV4Jyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYnJlYWtwb2ludDonLGJwKTtcbiAgICAgIHJldHVybiBicDtcblxuICAgIH0sXG4gICAgc2Nyb2xsVG9Db250ZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICQoJy5qcy1zY3JvbGwtdG8nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICB9LFxuICB9LFxuICAvLy8vLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU5ERVhcbiAgaW5kZXg6IHtcbiAgICByZXNpemVIZWFkZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgJGhlYWRlciA9ICQoJ2hlYWRlcicpO1xuICAgICAgJGhlYWRlci5oZWlnaHQoICQod2luZG93KS5oZWlnaHQoKSApO1xuXG4gICAgICAkKCcud3JhcHBlci1zY3JvbGxhYmxlJykuY3NzKCdtYXJnaW4tdG9wJywgJGhlYWRlci5oZWlnaHQoKSk7XG5cbiAgICB9LFxuICB9LFxuICAvLy8vLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUFJPSkVDVFxuICBwcm9qZWN0OiB7XG4gICAgc3RpY2t5RGVzY3JpcHRpb25zOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICQoXCJzZWN0aW9uLmZlYXR1cmUgLmRlc2NyaXB0aW9uXCIpLnN0aWNrX2luX3BhcmVudCh7XG4gICAgICAgICAgb2Zmc2V0X3RvcDo4MCxcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdzdGlja3lfa2l0OmJvdHRvbScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygncG9zaXRpb24nLCAnc3RhdGljJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignc3RpY2t5X2tpdDp1bmJvdHRvbScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgfSxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxufTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGEuaW5pdCgpO1xuICBjb25zb2xlLmxvZygnSW50ZXJlc3RlZCBpbiB3aGF0XFwncyBnb2luZyBvbiB1bmRlciB0aGUgaG9vZD8gQ29udGFjdCBtZTogU3R1ZGlvQEFuZHJldy5tbicpO1xuICBjb25zb2xlLmxvZygnVGhhbmtzIGZvciB2aXNpdGluZyEnKTtcbn0pO1xuXG4iXX0=

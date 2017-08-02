(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.a = {
  //-----------------------------------------------------
  init: function() {

    // if (a.utils.breakpoint() >= 2) {

    //   // Add the body class required for animsition
    //   $('body > .c-wrapper-page').addClass('animsition');

    //   $(".animsition").animsition({
    //     inClass               :   'fade-in',
    //     outClass              :   'fade-out',
    //     inDuration            :    1500,
    //     outDuration           :    800,
    //     .c-linkElement           :   '.animsition-.c-link',
    //     // e.g. .c-linkElement   :   'a:not([target="_blank"]):not([href^=#])'
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
    // if ( $('.c-wrapper-page.project').length ) {

    //   this.project.stickyDescriptions()

    // } else if ( $('.c-wrapper-page.index').length ) {

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

      $('.c-wrapper-scrollable').css('margin-top', $header.height());

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS8wMSBwZXJzb25hbC1sYW5kaW5nLXBhZ2Uvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS8wMSBwZXJzb25hbC1sYW5kaW5nLXBhZ2Uvc3JjL2Fzc2V0cy9zY3JpcHRzL2Zha2VfNDNhNjg4Y2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5hID0ge1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gaWYgKGEudXRpbHMuYnJlYWtwb2ludCgpID49IDIpIHtcblxuICAgIC8vICAgLy8gQWRkIHRoZSBib2R5IGNsYXNzIHJlcXVpcmVkIGZvciBhbmltc2l0aW9uXG4gICAgLy8gICAkKCdib2R5ID4gLmMtd3JhcHBlci1wYWdlJykuYWRkQ2xhc3MoJ2FuaW1zaXRpb24nKTtcblxuICAgIC8vICAgJChcIi5hbmltc2l0aW9uXCIpLmFuaW1zaXRpb24oe1xuICAgIC8vICAgICBpbkNsYXNzICAgICAgICAgICAgICAgOiAgICdmYWRlLWluJyxcbiAgICAvLyAgICAgb3V0Q2xhc3MgICAgICAgICAgICAgIDogICAnZmFkZS1vdXQnLFxuICAgIC8vICAgICBpbkR1cmF0aW9uICAgICAgICAgICAgOiAgICAxNTAwLFxuICAgIC8vICAgICBvdXREdXJhdGlvbiAgICAgICAgICAgOiAgICA4MDAsXG4gICAgLy8gICAgIC5jLWxpbmtFbGVtZW50ICAgICAgICAgICA6ICAgJy5hbmltc2l0aW9uLS5jLWxpbmsnLFxuICAgIC8vICAgICAvLyBlLmcuIC5jLWxpbmtFbGVtZW50ICAgOiAgICdhOm5vdChbdGFyZ2V0PVwiX2JsYW5rXCJdKTpub3QoW2hyZWZePSNdKSdcbiAgICAvLyAgICAgbG9hZGluZyAgICAgICAgICAgICAgIDogICAgdHJ1ZSxcbiAgICAvLyAgICAgbG9hZGluZ1BhcmVudEVsZW1lbnQgIDogICAnYm9keScsIC8vYW5pbXNpdGlvbiB3cmFwcGVyIGVsZW1lbnRcbiAgICAvLyAgICAgbG9hZGluZ0NsYXNzICAgICAgICAgIDogICAnYW5pbXNpdGlvbi1sb2FkaW5nJyxcbiAgICAvLyAgICAgdW5TdXBwb3J0Q3NzICAgICAgICAgIDogICBbXSxcbiAgICAvLyAgICAgLy9cInVuU3VwcG9ydENzc1wiIG9wdGlvbiBhbGxvd3MgeW91IHRvIGRpc2FibGUgdGhlIFwiYW5pbXNpdGlvblwiIGluIGNhc2UgdGhlIGNzcyBwcm9wZXJ0eSBpbiB0aGUgYXJyYXkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXG4gICAgLy8gICAgIC8vVGhlIGRlZmF1bHQgc2V0dGluZyBpcyB0byBkaXNhYmxlIHRoZSBcImFuaW1zaXRpb25cIiBpbiBhIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIuXG5cbiAgICAvLyAgICAgb3ZlcmxheSAgICAgICAgICAgICAgIDogICBmYWxzZSxcblxuICAgIC8vICAgICBvdmVybGF5Q2xhc3MgICAgICAgICAgOiAgICdhbmltc2l0aW9uLW92ZXJsYXktc2xpZGUnLFxuICAgIC8vICAgICBvdmVybGF5UGFyZW50RWxlbWVudCAgOiAgICdib2R5J1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gSW5pdGlhdGUgVGhpbmdzIE9uIEEgUGVyIFBhZ2UgQmFzaXNcbiAgICAvLyBpZiAoICQoJy5jLXdyYXBwZXItcGFnZS5wcm9qZWN0JykubGVuZ3RoICkge1xuXG4gICAgLy8gICB0aGlzLnByb2plY3Quc3RpY2t5RGVzY3JpcHRpb25zKClcblxuICAgIC8vIH0gZWxzZSBpZiAoICQoJy5jLXdyYXBwZXItcGFnZS5pbmRleCcpLmxlbmd0aCApIHtcblxuICAgIC8vICAgdGhpcy5pbmRleC5yZXNpemVIZWFkZXIoKVxuXG4gICAgLy8gfVxuXG4gICAgLy8gdGhpcy51dGlscy5zY3JvbGxUb0NvbnRlbnQoKVxuXG4gIH0sXG4gIHV0aWxzOiB7XG4gICAgYnJlYWtwb2ludDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBEb3VibGUgY2hlY2sgdGhhdCB0aGUgZGl2IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4uXG4gICAgICBpZiAoICQoJ2JvZHkgPiAuanMtYnAtY2hlY2snKS5sZW5ndGggPD0gMCApIHtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImpzLWJwLWNoZWNrXCI+PC9kaXY+Jyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBicCA9ICQoJy5qcy1icC1jaGVjaycpLmNzcygnei1pbmRleCcpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2JyZWFrcG9pbnQ6JyxicCk7XG4gICAgICByZXR1cm4gYnA7XG5cbiAgICB9LFxuICAgIHNjcm9sbFRvQ29udGVudDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAkKCcuanMtc2Nyb2xsLXRvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgfSxcbiAgLy8vLy8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElOREVYXG4gIGluZGV4OiB7XG4gICAgcmVzaXplSGVhZGVyOiBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyICRoZWFkZXIgPSAkKCdoZWFkZXInKTtcbiAgICAgICRoZWFkZXIuaGVpZ2h0KCAkKHdpbmRvdykuaGVpZ2h0KCkgKTtcblxuICAgICAgJCgnLmMtd3JhcHBlci1zY3JvbGxhYmxlJykuY3NzKCdtYXJnaW4tdG9wJywgJGhlYWRlci5oZWlnaHQoKSk7XG5cbiAgICB9LFxuICB9LFxuICAvLy8vLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUFJPSkVDVFxuICBwcm9qZWN0OiB7XG4gICAgc3RpY2t5RGVzY3JpcHRpb25zOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICQoXCJzZWN0aW9uLmZlYXR1cmUgLmRlc2NyaXB0aW9uXCIpLnN0aWNrX2luX3BhcmVudCh7XG4gICAgICAgICAgb2Zmc2V0X3RvcDo4MCxcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdzdGlja3lfa2l0OmJvdHRvbScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygncG9zaXRpb24nLCAnc3RhdGljJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignc3RpY2t5X2tpdDp1bmJvdHRvbScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgfSxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxufTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGEuaW5pdCgpO1xuICBjb25zb2xlLmxvZygnSW50ZXJlc3RlZCBpbiB3aGF0XFwncyBnb2luZyBvbiB1bmRlciB0aGUgaG9vZD8gQ29udGFjdCBtZTogU3R1ZGlvQEFuZHJldy5tbicpO1xuICBjb25zb2xlLmxvZygnVGhhbmtzIGZvciB2aXNpdGluZyEnKTtcbn0pO1xuXG4iXX0=

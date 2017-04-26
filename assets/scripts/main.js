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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS9wZXJzb25hbC1sYW5kaW5nLXBhZ2Uvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS9wZXJzb25hbC1sYW5kaW5nLXBhZ2Uvc3JjL2Fzc2V0cy9zY3JpcHRzL2Zha2VfZDVmNDQ2MmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5hID0ge1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gaWYgKGEudXRpbHMuYnJlYWtwb2ludCgpID49IDIpIHtcblxuICAgIC8vICAgLy8gQWRkIHRoZSBib2R5IGNsYXNzIHJlcXVpcmVkIGZvciBhbmltc2l0aW9uXG4gICAgLy8gICAkKCdib2R5ID4gLndyYXBwZXItcGFnZScpLmFkZENsYXNzKCdhbmltc2l0aW9uJyk7XG5cbiAgICAvLyAgICQoXCIuYW5pbXNpdGlvblwiKS5hbmltc2l0aW9uKHtcbiAgICAvLyAgICAgaW5DbGFzcyAgICAgICAgICAgICAgIDogICAnZmFkZS1pbicsXG4gICAgLy8gICAgIG91dENsYXNzICAgICAgICAgICAgICA6ICAgJ2ZhZGUtb3V0JyxcbiAgICAvLyAgICAgaW5EdXJhdGlvbiAgICAgICAgICAgIDogICAgMTUwMCxcbiAgICAvLyAgICAgb3V0RHVyYXRpb24gICAgICAgICAgIDogICAgODAwLFxuICAgIC8vICAgICBsaW5rRWxlbWVudCAgICAgICAgICAgOiAgICcuYW5pbXNpdGlvbi1saW5rJyxcbiAgICAvLyAgICAgLy8gZS5nLiBsaW5rRWxlbWVudCAgIDogICAnYTpub3QoW3RhcmdldD1cIl9ibGFua1wiXSk6bm90KFtocmVmXj0jXSknXG4gICAgLy8gICAgIGxvYWRpbmcgICAgICAgICAgICAgICA6ICAgIHRydWUsXG4gICAgLy8gICAgIGxvYWRpbmdQYXJlbnRFbGVtZW50ICA6ICAgJ2JvZHknLCAvL2FuaW1zaXRpb24gd3JhcHBlciBlbGVtZW50XG4gICAgLy8gICAgIGxvYWRpbmdDbGFzcyAgICAgICAgICA6ICAgJ2FuaW1zaXRpb24tbG9hZGluZycsXG4gICAgLy8gICAgIHVuU3VwcG9ydENzcyAgICAgICAgICA6ICAgW10sXG4gICAgLy8gICAgIC8vXCJ1blN1cHBvcnRDc3NcIiBvcHRpb24gYWxsb3dzIHlvdSB0byBkaXNhYmxlIHRoZSBcImFuaW1zaXRpb25cIiBpbiBjYXNlIHRoZSBjc3MgcHJvcGVydHkgaW4gdGhlIGFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlxuICAgIC8vICAgICAvL1RoZSBkZWZhdWx0IHNldHRpbmcgaXMgdG8gZGlzYWJsZSB0aGUgXCJhbmltc2l0aW9uXCIgaW4gYSBicm93c2VyIHRoYXQgZG9lcyBub3Qgc3VwcG9ydCBcImFuaW1hdGlvbi1kdXJhdGlvblwiLlxuXG4gICAgLy8gICAgIG92ZXJsYXkgICAgICAgICAgICAgICA6ICAgZmFsc2UsXG5cbiAgICAvLyAgICAgb3ZlcmxheUNsYXNzICAgICAgICAgIDogICAnYW5pbXNpdGlvbi1vdmVybGF5LXNsaWRlJyxcbiAgICAvLyAgICAgb3ZlcmxheVBhcmVudEVsZW1lbnQgIDogICAnYm9keSdcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIEluaXRpYXRlIFRoaW5ncyBPbiBBIFBlciBQYWdlIEJhc2lzXG4gICAgLy8gaWYgKCAkKCcud3JhcHBlci1wYWdlLnByb2plY3QnKS5sZW5ndGggKSB7XG5cbiAgICAvLyAgIHRoaXMucHJvamVjdC5zdGlja3lEZXNjcmlwdGlvbnMoKVxuXG4gICAgLy8gfSBlbHNlIGlmICggJCgnLndyYXBwZXItcGFnZS5pbmRleCcpLmxlbmd0aCApIHtcblxuICAgIC8vICAgdGhpcy5pbmRleC5yZXNpemVIZWFkZXIoKVxuXG4gICAgLy8gfVxuXG4gICAgLy8gdGhpcy51dGlscy5zY3JvbGxUb0NvbnRlbnQoKVxuXG4gIH0sXG4gIHV0aWxzOiB7XG4gICAgYnJlYWtwb2ludDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBEb3VibGUgY2hlY2sgdGhhdCB0aGUgZGl2IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4uXG4gICAgICBpZiAoICQoJ2JvZHkgPiAuanMtYnAtY2hlY2snKS5sZW5ndGggPD0gMCApIHtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImpzLWJwLWNoZWNrXCI+PC9kaXY+Jyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBicCA9ICQoJy5qcy1icC1jaGVjaycpLmNzcygnei1pbmRleCcpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2JyZWFrcG9pbnQ6JyxicCk7XG4gICAgICByZXR1cm4gYnA7XG5cbiAgICB9LFxuICAgIHNjcm9sbFRvQ29udGVudDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAkKCcuanMtc2Nyb2xsLXRvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgfSxcbiAgLy8vLy8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElOREVYXG4gIGluZGV4OiB7XG4gICAgcmVzaXplSGVhZGVyOiBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyICRoZWFkZXIgPSAkKCdoZWFkZXInKTtcbiAgICAgICRoZWFkZXIuaGVpZ2h0KCAkKHdpbmRvdykuaGVpZ2h0KCkgKTtcblxuICAgICAgJCgnLndyYXBwZXItc2Nyb2xsYWJsZScpLmNzcygnbWFyZ2luLXRvcCcsICRoZWFkZXIuaGVpZ2h0KCkpO1xuXG4gICAgfSxcbiAgfSxcbiAgLy8vLy8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBST0pFQ1RcbiAgcHJvamVjdDoge1xuICAgIHN0aWNreURlc2NyaXB0aW9uczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblxuICAgICAgICAkKFwic2VjdGlvbi5mZWF0dXJlIC5kZXNjcmlwdGlvblwiKS5zdGlja19pbl9wYXJlbnQoe1xuICAgICAgICAgIG9mZnNldF90b3A6ODAsXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignc3RpY2t5X2tpdDpib3R0b20nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3Bvc2l0aW9uJywgJ3N0YXRpYycpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ3N0aWNreV9raXQ6dW5ib3R0b20nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcblxuICAgIH0sXG4gIH0sXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbn07XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBhLmluaXQoKTtcbiAgY29uc29sZS5sb2coJ0ludGVyZXN0ZWQgaW4gd2hhdFxcJ3MgZ29pbmcgb24gdW5kZXIgdGhlIGhvb2Q/IENvbnRhY3QgbWU6IFN0dWRpb0BBbmRyZXcubW4nKTtcbiAgY29uc29sZS5sb2coJ1RoYW5rcyBmb3IgdmlzaXRpbmchJyk7XG59KTtcblxuIl19

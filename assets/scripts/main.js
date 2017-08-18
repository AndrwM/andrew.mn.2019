(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(window).load(function() {
   console.log('%c🚀 Interested in what\'s going on under the hood?', 'color: #6a5ef5');
   console.log('%c   Studio@Andrew.mn', 'font-weight: bold;');

  var breakpoint = function () {
    if ($('body > [js-breakpoint]').length <= 0) {
      $('body').append('<div js-breakpoint></div>');
    }

    return $('[js-breakpoint]').css('z-index');
  };

  if ( breakpoint() > 1 ) {
    $("[js-sticky-aside]").stick_in_parent({
      offset_top: 100,
    });
  }

  if ( breakpoint() > 0 ) {
    var headroom  = new Headroom($("[js-navigation]")[0], {
      tolerance: {
        down: 3,
        up: 10
      },
      classes: {
        initial: "c-navigation",
        pinned: "c-navigation--pinned",
        unpinned: "c-navigation--unpinned",
        top: "c-navigation--top",
        notTop: "c-navigation--not-top",
        bottom: "c-navigation--bottom",
        notBottom: "c-navigation--not-bottom" }
    }).init();
  }

  $('[js-carousel]').flickity({
    wrapAround: true,
    draggable: false
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS8wMSBwZXJzb25hbC1sYW5kaW5nLXBhZ2Uvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS8wMSBwZXJzb25hbC1sYW5kaW5nLXBhZ2Uvc3JjL2Fzc2V0cy9zY3JpcHRzL2Zha2VfZDk5M2YyMTkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuICAgY29uc29sZS5sb2coJyVj8J+agCBJbnRlcmVzdGVkIGluIHdoYXRcXCdzIGdvaW5nIG9uIHVuZGVyIHRoZSBob29kPycsICdjb2xvcjogIzZhNWVmNScpO1xuICAgY29uc29sZS5sb2coJyVjICAgU3R1ZGlvQEFuZHJldy5tbicsICdmb250LXdlaWdodDogYm9sZDsnKTtcblxuICB2YXIgYnJlYWtwb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnYm9keSA+IFtqcy1icmVha3BvaW50XScpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGpzLWJyZWFrcG9pbnQ+PC9kaXY+Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICQoJ1tqcy1icmVha3BvaW50XScpLmNzcygnei1pbmRleCcpO1xuICB9O1xuXG4gIGlmICggYnJlYWtwb2ludCgpID4gMSApIHtcbiAgICAkKFwiW2pzLXN0aWNreS1hc2lkZV1cIikuc3RpY2tfaW5fcGFyZW50KHtcbiAgICAgIG9mZnNldF90b3A6IDEwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICggYnJlYWtwb2ludCgpID4gMCApIHtcbiAgICB2YXIgaGVhZHJvb20gID0gbmV3IEhlYWRyb29tKCQoXCJbanMtbmF2aWdhdGlvbl1cIilbMF0sIHtcbiAgICAgIHRvbGVyYW5jZToge1xuICAgICAgICBkb3duOiAzLFxuICAgICAgICB1cDogMTBcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGluaXRpYWw6IFwiYy1uYXZpZ2F0aW9uXCIsXG4gICAgICAgIHBpbm5lZDogXCJjLW5hdmlnYXRpb24tLXBpbm5lZFwiLFxuICAgICAgICB1bnBpbm5lZDogXCJjLW5hdmlnYXRpb24tLXVucGlubmVkXCIsXG4gICAgICAgIHRvcDogXCJjLW5hdmlnYXRpb24tLXRvcFwiLFxuICAgICAgICBub3RUb3A6IFwiYy1uYXZpZ2F0aW9uLS1ub3QtdG9wXCIsXG4gICAgICAgIGJvdHRvbTogXCJjLW5hdmlnYXRpb24tLWJvdHRvbVwiLFxuICAgICAgICBub3RCb3R0b206IFwiYy1uYXZpZ2F0aW9uLS1ub3QtYm90dG9tXCIgfVxuICAgIH0pLmluaXQoKTtcbiAgfVxuXG4gICQoJ1tqcy1jYXJvdXNlbF0nKS5mbGlja2l0eSh7XG4gICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICBkcmFnZ2FibGU6IGZhbHNlXG4gIH0pO1xufSk7XG4iXX0=

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

    $('[js-carousel]').flickity({
      draggable: false,
      prevNextButtons: true
    });
  }

  if ( breakpoint() == 0 ) {
    $('[js-carousel]').flickity({
      draggable: true,
      prevNextButtons: false
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS8wMSBwZXJzb25hbC1sYW5kaW5nLXBhZ2Uvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXcvRHJvcGJveC9BbmRyZXcgTWNJbnRlZS8wMSBwZXJzb25hbC1sYW5kaW5nLXBhZ2Uvc3JjL2Fzc2V0cy9zY3JpcHRzL2Zha2VfYWYwMDliYzMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG4gICBjb25zb2xlLmxvZygnJWPwn5qAIEludGVyZXN0ZWQgaW4gd2hhdFxcJ3MgZ29pbmcgb24gdW5kZXIgdGhlIGhvb2Q/JywgJ2NvbG9yOiAjNmE1ZWY1Jyk7XG4gICBjb25zb2xlLmxvZygnJWMgICBTdHVkaW9AQW5kcmV3Lm1uJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpO1xuXG4gIHZhciBicmVha3BvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKCdib2R5ID4gW2pzLWJyZWFrcG9pbnRdJykubGVuZ3RoIDw9IDApIHtcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYganMtYnJlYWtwb2ludD48L2Rpdj4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJCgnW2pzLWJyZWFrcG9pbnRdJykuY3NzKCd6LWluZGV4Jyk7XG4gIH07XG5cbiAgaWYgKCBicmVha3BvaW50KCkgPiAxICkge1xuICAgICQoXCJbanMtc3RpY2t5LWFzaWRlXVwiKS5zdGlja19pbl9wYXJlbnQoe1xuICAgICAgb2Zmc2V0X3RvcDogMTAwLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCBicmVha3BvaW50KCkgPiAwICkge1xuICAgIHZhciBoZWFkcm9vbSAgPSBuZXcgSGVhZHJvb20oJChcIltqcy1uYXZpZ2F0aW9uXVwiKVswXSwge1xuICAgICAgdG9sZXJhbmNlOiB7XG4gICAgICAgIGRvd246IDMsXG4gICAgICAgIHVwOiAxMFxuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgaW5pdGlhbDogXCJjLW5hdmlnYXRpb25cIixcbiAgICAgICAgcGlubmVkOiBcImMtbmF2aWdhdGlvbi0tcGlubmVkXCIsXG4gICAgICAgIHVucGlubmVkOiBcImMtbmF2aWdhdGlvbi0tdW5waW5uZWRcIixcbiAgICAgICAgdG9wOiBcImMtbmF2aWdhdGlvbi0tdG9wXCIsXG4gICAgICAgIG5vdFRvcDogXCJjLW5hdmlnYXRpb24tLW5vdC10b3BcIixcbiAgICAgICAgYm90dG9tOiBcImMtbmF2aWdhdGlvbi0tYm90dG9tXCIsXG4gICAgICAgIG5vdEJvdHRvbTogXCJjLW5hdmlnYXRpb24tLW5vdC1ib3R0b21cIiB9XG4gICAgfSkuaW5pdCgpO1xuXG4gICAgJCgnW2pzLWNhcm91c2VsXScpLmZsaWNraXR5KHtcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBwcmV2TmV4dEJ1dHRvbnM6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGlmICggYnJlYWtwb2ludCgpID09IDAgKSB7XG4gICAgJCgnW2pzLWNhcm91c2VsXScpLmZsaWNraXR5KHtcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2VcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=

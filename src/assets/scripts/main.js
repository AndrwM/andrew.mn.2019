'use strict';

$(window).load(function() {
   console.log('%c🚀 Interested in what\'s going on under the hood?', 'color: #6a5ef5');
   console.log('%c   Studio@Andrew.mn', 'font-weight: bold;');

  $("[js-sticky-aside]").stick_in_parent({
    offset_top: 100,
  });

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
});

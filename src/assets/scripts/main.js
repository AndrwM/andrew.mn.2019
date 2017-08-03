'use strict';

$(window).load(function() {
console.log('cool init')
  $("[js-sticky-aside]").stick_in_parent({
    offset_top: 100,
  });

  var headroom  = new Headroom($("[js-navigation]")[0], {
    tolerance: {
      down: 5,
      up: 20
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

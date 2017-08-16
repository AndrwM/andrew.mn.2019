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
    cellAlign: 'left',
    contain: true
  });
});

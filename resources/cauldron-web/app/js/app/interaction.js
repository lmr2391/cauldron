(function () {
  'use strict';

  var exports = window.CAULDRON || {};
  window.CAULDRON = exports;

  /**
   *
   * @param selector
   */
  function toggleVisible(selector) {
    $(selector).toggle();
  }
  exports.toggleVisible = toggleVisible;

  /**
   *
   * @param buttonId
   */
  function collapse(buttonId) {
    var btn = $('#' + buttonId);
    var open = btn.hasClass('closed');
    var items = btn.attr('data-' + (open ? 'opens' : 'closes'));
    var marks = btn.attr('data-marks-' + (open ? 'opened' : 'closed')) || '';

    marks = marks.split('|').map(function (selector) {
      return $(selector);
    });
    marks.push(btn);
    marks.forEach(function (target) {
      if (open) {
        target.removeClass('closed').addClass('opened');
      } else {
        target.removeClass('opened').addClass('closed');
      }
    });

    if (!items) {
      $(window).resize();
      return;
    }

    items.split('|').forEach(function (target) {
      target = $(target);
      if (open) {
        target.show();
        btn.removeClass('closed');
      } else {
        target.hide();
        target.addClass('closed');
      }
    });

    $(window).resize();
  }
  exports.collapse = collapse;

  /**
   *
   * @param target
   * @param direction
   */
  function changeFontSize(target, direction) {
    target = $(target);
    var size = parseFloat(target.attr('data-font-size'));

    if (!direction) {
      size = parseFloat(target.attr('data-font-size-default'));
    } else {
      size = Math.max(0.1, size + direction * 0.1);
    }

    target.attr('data-font-size', size);
    target.css('font-size', size + 'em');
  }
  exports.changeFontSize = changeFontSize;

}());

/*global jQuery, _, List */
(function (win, $) {
  "use strict";

  $(function () {
    // Define page elements
    // var $win = $(window);
    // var $doc = $(document);
    // var $body = $(document.body);

    // Toggle blog menus
    $(".blog-sidebar, .year_divider").click(function () {
      $(this).toggleClass("open");
    });

    // Toggle docs menus
    $(".docs-navigation .collapsible").click(function () {
      $(this).toggleClass("open");
    });
  });
})(window, window.jQuery);

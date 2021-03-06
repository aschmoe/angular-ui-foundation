angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">" +
    "  <div class=\"tooltip-arrow\"></div>" +
    "  <div class=\"tooltip-inner\" ng-bind=\"tooltipTitle\"></div>" +
    "</div>" +
    "");
}]);

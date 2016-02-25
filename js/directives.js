'use strict';

/* Directives */
angular.module('forecastAppDirectives', [])
  .directive('locator', function() {
    return {
      transclude: true,
      scope: false,
        restrict: 'AE',
        replace: 'false',
        templateUrl: 'partials/locator.html'
    };
  })
  .directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
  })
  .directive('daily', function() {
    return {
      scope: true,
      restrict: 'AE',
      replace: true,
      templateUrl: 'partials/daily.html',
    }
  });
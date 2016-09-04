(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .directive('tagList', function () {
      return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModel) {
          var toView = function (val) {
            if (angular.isArray(val)) {
              return (val || []).join(', ');
            }
            else {
              return (val || '').split(',').join(', ');
            }
          };

          var toModel = function (val) {
            return (val || '').split(',').map(function (v) {
              return v.trim();
            }).filter(function (v) {
              return v != null && v != '';
            });
          };

          ngModel.$formatters.unshift(toView);
          ngModel.$parsers.unshift(toModel);
        }
      }
    });

})();

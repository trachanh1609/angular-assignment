(function() {
  'use strict';

  angular
    .module('angularAssignment')

    .directive('inputValidation', function() {
      return {
        restrict: 'A',
        require:  '^form',
        scope: true,
        link: function (scope, el, attrs, formCtrl) {
          var inputEl = angular.element(el[0].querySelector("[name]"));
          var inputName = inputEl.attr('name');

          el.addClass('has-feedback');

          var getValidationState = function () {
            if (formCtrl[inputName].$valid && formCtrl[inputName].$dirty) {
              return 'has-success';
            }
            else if (formCtrl[inputName].$invalid && formCtrl[inputName].$dirty) {
              return 'has-error';
            }
            else if (formCtrl[inputName].$invalid && formCtrl[inputName].$pristine) {
              return 'has-warning';
            }
            else {
              return '';
            }
          };

          scope.$watch(getValidationState, function(newVal, oldVal) {
            if (oldVal) el.removeClass(oldVal);
            if (newVal) el.addClass(newVal);
            scope.validationState = newVal
          });
        }
      }
    })

    .directive('validationFeedback', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<span class="glyphicon form-control-feedback" ng-class="getValidationFeedback()"></span>',
        link: function (scope, el, attrs) {

          scope.getValidationFeedback = function () {
            if (scope.validationState == 'has-success') {
              return 'glyphicon-ok';
            }
            else if (scope.validationState == 'has-error') {
              return 'glyphicon-remove';
            }
            else if (scope.validationState == 'has-warning') {
              return 'glyphicon-pencil';
            }
            else {
              return '';
            }
          };
        }
      }
    });

})();

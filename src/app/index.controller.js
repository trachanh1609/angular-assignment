(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($rootScope, $log) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      $log.error('State change error: ' + angular.toJson({ error: error, to: toState, from: fromState }));
    });

  }
})();

(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .component('container', {
      templateUrl: 'app/container/container.html',
      controller: ContainerController
    });

  /** @ngInject */
  function ContainerController() {

  }
})();

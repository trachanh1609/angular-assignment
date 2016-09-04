(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .component('home', {
      templateUrl: 'app/home/home.html',
      controller: HomeController
    });

  /** @ngInject */
  function HomeController() {

  }
})();

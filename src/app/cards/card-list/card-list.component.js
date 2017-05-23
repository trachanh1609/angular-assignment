(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .component('cardList', {
      templateUrl: 'app/cards/card-list/card-list.html',
      controller: CardListController,
      bindings: {
        contacts: '='
      }
    });

  /** @ngInject */
  function CardListController($state, $log) {
    var ctrl = this;

    ctrl.back = function () {
      // $state.go('app');
      console.log('Go back')
    };

    console.log(ctrl.contacts)
    // log(ctrl.contacts)

  }
})();

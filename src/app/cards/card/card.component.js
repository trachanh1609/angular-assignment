(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .component('card', {
      templateUrl: 'app/cards/card/card.html',
      controller: CardController,
      bindings: {
        contact: '='
      }
    });

  /** @ngInject */
  function CardController($state) {
    var ctrl = this;

  }
})();

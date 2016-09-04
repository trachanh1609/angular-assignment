(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .component('contactView', {
      templateUrl: 'app/contacts/view/view.html',
      controller: ContactViewController,
      bindings: {
        contact: '='
      }
    });

  /** @ngInject */
  function ContactViewController($state) {
    var ctrl = this;

    ctrl.back = function () {
      $state.go('app.contacts');
    };

    ctrl.edit = function () {
      $state.go('app.contacts.edit', { id: ctrl.contact.id });
    };

  }
})();

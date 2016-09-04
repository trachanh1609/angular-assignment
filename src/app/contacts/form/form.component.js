(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .component('contactForm', {
      templateUrl: 'app/contacts/form/form.html',
      controller: ContactFormController,
      bindings: {
        contact: '='
      }
    });

  /** @ngInject */
  function ContactFormController(contactsApi, $state) {
    var ctrl = this;

    ctrl.isCreate = function() {
      return ctrl.contact.id == null;
    };

    ctrl.save = function() {
      if (ctrl.isCreate()) {
        contactsApi.save(ctrl.contact, function (response) {
          $state.go('app.contacts.view', { id: response.id });
        });
      }
      else {
        contactsApi.update({ id: ctrl.contact.id }, ctrl.contact, function (response) {
          $state.go('app.contacts.view', { id: ctrl.contact.id });
        });
      }
    };

    ctrl.cancel = function () {
      if (ctrl.isCreate()) {
        $state.go('app.contacts');
      }
      else {
        $state.go('app.contacts.view', { id: ctrl.contact.id });
      }
    };

    ctrl.title = ctrl.isCreate() ? 'Create new contact' : ctrl.contact.firstName + ' ' + ctrl.contact.surName;

  }
})();

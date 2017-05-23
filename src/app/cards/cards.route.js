(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .config(cardsRouterConfig);

  /** @ngInject */
  function cardsRouterConfig($stateProvider) {
    $stateProvider

      .state('app.cards', {
        url: 'cards',
        views: {
          main: {
            template: '<card-list contacts="contacts"></card-list>',
            controller: function ($scope, contacts) {
              $scope.contacts = contacts;
            }
          }
        },
        resolve: {
          contactsApi: 'contactsApi',
          contacts: function(contactsApi) {
            return contactsApi.query().$promise;
          }
        }
      })

  }

})();

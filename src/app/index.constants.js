/* global moment:false */
(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .constant('moment', moment)
    .constant('apiEndpoint', {
      url: '/api/'
    });

})();

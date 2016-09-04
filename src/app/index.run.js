(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('App init');
  }

})();

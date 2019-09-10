(function() {
  'use strict';

  angular
    .module('app.about_me')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'about_me',
        config: {
          url: '/about_me',
          templateUrl: 'app/about_me/about_me.html',
          controller: 'AboutMeController',
          controllerAs: 'vm',
          title: 'about_me',
          settings: {
            nav: 1,
            content: '<i class="fa fa-about_me"></i> Dashboard'
          }
        }
      }
    ];
  }
})();

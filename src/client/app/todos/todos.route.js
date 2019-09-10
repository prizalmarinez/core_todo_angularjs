(function() {
  'use strict';

  angular
    .module('app.todos')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'todos',
        config: {
          url: '/',
          templateUrl: 'app/todos/todos.html',
          controller: 'TodosController',
          controllerAs: 'vm',
          title: 'todos',
          settings: {
            nav: 1,
            content: '<i class="fa fa-todos"></i> Dashboard'
          }
        }
      }
    ];
  }
})();

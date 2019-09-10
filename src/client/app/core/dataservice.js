(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getTodos: getTodos
    };

    var todos = [
      {
        title: 'do the challenge of today false 1',
        dateAdded: '1567172717546',
        complete: false
      },
      {
        title: 'do the challenge of today true 1',
        dateAdded: '1567172717646',
        complete: true
      },
      {
        title: 'do the challenge of today false 2',
        dateAdded: '1567172717746',
        complete: false
      },
      {
        title: 'do the challenge of today false 3',
        dateAdded: '1567172717846',
        complete: false
      },
      {
        title: 'do the challenge of today true 2',
        dateAdded: '1567172717946',
        complete: true
      },
      {
        title: 'do the challenge of today true 3',
        dateAdded: '1567172717999',
        complete: true
      }
    ];

    return service;

    function getTodos() {
      return todos;
    }
    // function getMessageCount() { return $q.when(72); }

    // function getPeople() {
    //   return $http.get('/api/people')
    //     .then(success)
    //     .catch(fail);

    //   function success(response) {
    //     return response.data;
    //   }

    //   function fail(e) {
    //     return exception.catcher('XHR Failed for getPeople')(e);
    //   }
    // }
  }
})();

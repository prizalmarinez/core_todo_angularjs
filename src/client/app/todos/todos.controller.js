(function () {
  'use strict';

  angular
    .module('app.todos')
    .controller('TodosController', TodosController);

  TodosController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function TodosController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'todoApp',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.todos = [];
    vm.title = 'Dashboard';
    vm.todo = {};
    vm.todo.title = null;

    activate();

    function activate() {
      var promises = [getTodos()];
      return $q.all(promises).then(function () {
      });
    }

    function getTodos() {
      vm.todos = dataservice.getTodos();
      console.log(vm.todos);
    }

    vm.addTodo = addTodo;

    function addTodo() {
      vm.todo.complete = false;
      vm.todo.dateCreated = new Date().getTime();
      vm.todos.push(vm.todo);
      vm.todo = {};
    }

    vm.onComplete = onComplete;

    function onComplete(todo) {
      todo.complete = !todo.complete;
    }

    vm.filterComplete = function (todo) {
      return todo.complete === true;
    };

    vm.filterUnComplete = function (todo) {
      return todo.complete === false;
    };

  }
})();

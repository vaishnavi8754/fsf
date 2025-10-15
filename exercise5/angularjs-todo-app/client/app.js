angular.module('todoApp', [])
  .controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService) {
    $scope.todos = [];
    $scope.newTodo = '';

    $scope.loadTodos = function() {
      TodoService.getTodos().then(function(response) {
        $scope.todos = response.data;
      });
    };

    $scope.addTodo = function() {
      if ($scope.newTodo) {
        TodoService.addTodo({ text: $scope.newTodo }).then(function() {
          $scope.newTodo = '';
          $scope.loadTodos();
        });
      }
    };

    $scope.removeTodo = function(todo) {
      TodoService.removeTodo(todo).then(function() {
        $scope.loadTodos();
      });
    };

    $scope.loadTodos();
  }]);
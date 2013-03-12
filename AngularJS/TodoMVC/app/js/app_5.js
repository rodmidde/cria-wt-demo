var todomvc = angular.module('todomvc', []);

//Creeer hier de nieuwe todoService
todomvc.factory('todoStorage', function () {
    var STORAGE_ID = 'todos-angularjs-requirejs';

    return {
        get:function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },
        put:function (todos) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        }
    };
});

todomvc.controller('TodoController', function TodoController($scope, $location, todoStorage, filterFilter) {
    var todos = $scope.todos = todoStorage.get();

    $scope.newTodo = "";
    $scope.editedTodo = null;

    $scope.$watch('todos', function () {
        $scope.remainingCount = filterFilter(todos, {completed:false}).length;
        $scope.doneCount = todos.length - $scope.remainingCount;
        $scope.allChecked = !$scope.remainingCount
        todoStorage.put(todos);
    }, true);

    if ($location.path() === '')
        $location.path('/');
    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
        $scope.statusFilter = (path == '/active') ?
        {completed:false} : (path == '/completed') ?
        {completed:true} : null;
    });


    $scope.addTodo = function () {
        alert("submit()");
        if (!$scope.newTodo.length) {
            return;
        }

        todos.push({
            title:$scope.newTodo,
            completed:false
        });

        $scope.newTodo = '';
    };

    $scope.removeTodo = function (todo) {
        todos.splice(todos.indexOf(todo), 1);
    };

});
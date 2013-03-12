var todomvc = angular.module('todomvc', []);

todomvc.controller('TodoController', function TodoController($scope) {
    //demodata = defined in demodata.js
    var todos = $scope.todos = demodata;
    $scope.newTodo = "";

    $scope.addTodo = function () {
        if (!$scope.newTodo.length) {
            return;
        }

        todos.push({
            title:$scope.newTodo,
            completed:false
        });

        $scope.newTodo = '';
    };
});
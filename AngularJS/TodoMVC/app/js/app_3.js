var todomvc = angular.module('todomvc', []);

todomvc.controller('TodoController', function TodoController($scope, $location, $log) {
    //demodata = defined in demodata.js
    var todos = $scope.todos = demodata;
    $scope.newTodo = "";

    if ($location.path() === '')
        $location.path('/');
    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
        $log.info("location changed.");
        $scope.statusFilter =
            (path === '/active') ? {completed:false} :
                (path === '/completed') ? {completed:true} : null;
    });

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
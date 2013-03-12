var todomvc = angular.module('todomvc', []);

todomvc.controller('TodoController', function TodoController($scope, $location, $log) {
    var todos = $scope.todos = demodata; //demodata = defined in demodata.js
    $scope.newTodo = "";
    $scope.editedTodo = null;

    if ($location.path() === '')
        $location.path('/');
    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
        $log.info("location changed.");
        $scope.statusFilter = (path === '/active') ?
        {completed:false} : (path === '/completed') ?
        {completed:true} : null;
    });

    /**
     * creeert een nieuwe functie die op de scope geplaatst
     * wordt die een gegeven todo verwijdert uit de $scope.todo's variabele.
     */
    $scope.removeTodo = function (todo) {
        todos.splice(todos.indexOf(todo), 1);
    };

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

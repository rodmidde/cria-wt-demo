var todomvc = angular.module('todomvc', [])
  .directive('todo', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {  },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            template:
                '<div class="tab-pane">dfsdfgtodo' +
                    '</div>',
            replace: true
        };
    });

todomvc.factory( 'todoStorage', function() {
    var STORAGE_ID = 'todos-angularjs-requirejs';

    return {
      get: function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      put: function( todos ) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
      }
    };
  });
   
todomvc.controller('TodoController', function TodoController( $scope, $location, todoStorage, filterFilter ) {
      var todos = $scope.todos = 
   [
      {
         "title": "AngularJS leren",
         "completed": false
      },
      {
         "title": "Java programmeren",
         "completed": true
      },
      {
         "title": "AngularJS labs maken",
         "completed": false
      },
      {
         "title": "AngularJS op het project gebruiken",
         "completed": false
      },
      {
         "title": "Zinnig boek lezen",
         "completed": true
      }
   ];

      $scope.newTodo = "";
      $scope.editedTodo = null;

      $scope.$watch('todos', function() {
        $scope.remainingCount = filterFilter(todos, {completed: false}).length;
        $scope.doneCount = todos.length - $scope.remainingCount;
        $scope.allChecked = !$scope.remainingCount
        todoStorage.put(todos);
      }, true);

      if ( $location.path() === '' ) $location.path('/');
      $scope.location = $location;

      $scope.$watch( 'location.path()', function( path ) {
        $scope.statusFilter = (path == '/active') ?
          { completed: false } : (path == '/completed') ?
            { completed: true } : null;
      });


      $scope.addTodo = function() {
         alert("submit()");
        if ( !$scope.newTodo.length ) {
          return;
        }

        todos.push({
          title: $scope.newTodo,
          completed: false
        });

        $scope.newTodo = '';
      };


      $scope.editTodo = function( todo ) {
        $scope.editedTodo = todo;
      };


      $scope.doneEditing = function( todo ) {
        $scope.editedTodo = null;
        if ( !todo.title ) {
          $scope.removeTodo(todo);
        }
      };


      $scope.removeTodo = function( todo ) {
        todos.splice(todos.indexOf(todo), 1);
      };


      $scope.clearDoneTodos = function() {
        $scope.todos = todos = todos.filter(function( val ) {
          return !val.completed;
        });
      };


      $scope.markAll = function( done ) {
        todos.forEach(function( todo ) {
          todo.completed = done;
        });
      };
    });

todomvc.directive('todoFocus', ['$timeout', function( $timeout ) {
    return function( scope, elem, attrs ) {
      scope.$watch(attrs.todoFocus, function( newval ) {
        if ( newval ) {
          $timeout(function() {
            elem[0].focus();
          }, 0, false);
        }
      });
    };
  }]);
  
todomvc.directive('todoBlur', function() {
    return function( scope, elem, attrs ) {
      elem.bind('blur', function() {
        scope.$apply(attrs.todoBlur);
      });
    };
  });

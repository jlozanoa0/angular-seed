'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: '/layouts/form/form.html',
    controller: 'formCtrl'
  });
}])

.controller('formCtrl', ['$scope',function($scope) {
  
  $scope.handleSave = function(data) {
    console.log("prueba",angular.copy(data))
  };

}]);
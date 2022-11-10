'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: '/layouts/form/form.html',
    controller: 'formCtrl'
  });
}])

.controller('formCtrl', ['$scope',function($scope) {
  let itemsArray = [];
  
  $scope.handleSave = function(data) {
    itemsArray.push(data);
    localStorage.setItem('listItem', JSON.stringify(itemsArray));

    // console.log("prueba",angular.copy(data))
  };

}]);
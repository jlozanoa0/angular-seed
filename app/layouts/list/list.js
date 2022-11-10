'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: '/layouts/list/list.html',
    controller: 'listCtrl'
  });
}])

.controller('listCtrl', ['$scope',function($scope) {
  let itemsArray = [];
  
  $scope.handleSave = function(data) {
    itemsArray.push(data);
    localStorage.setItem('listItem', JSON.stringify(itemsArray));

    // console.log("prueba",angular.copy(data))
  };

}]);
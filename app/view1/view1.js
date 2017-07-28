'use strict';

angular.module('myApp.mainPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'mainPageCtrl'
  });
}])

.controller('mainPageCtrl', [function() {

}]);
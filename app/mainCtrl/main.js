'use strict';

// angular.module('myApp.mainPage', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/index', {
//     templateUrl: 'view1/view1.html',
//     controller: 'mainPageCtrl'
//   });
// }])
var myApp = angular.module('myApp',[]);
myApp.controller('mainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.main = "ABC";
	$rootScope.Constant = Constant;
}]);
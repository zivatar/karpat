'use strict';

angular.module('myApp.mainCtrl', [])

.controller('mainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.main = "ABC";
	$rootScope.Constant = Constant;
}]);
'use strict';

angular.module('myApp.mainCtrl', [])

.controller('mainCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

	$rootScope.Constant = Constant;
	$rootScope.Dummy = Dummy;

	$scope.getCategories = function() {
		$http({
  			method: 'GET',
  			url: Constant.API_URL + '?action=categories'
		}).then(function successCallback(response) {
    		$rootScope.categories = response.data;
  		}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
  		});
	};

	$scope.getCategories();

}]);
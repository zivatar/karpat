'use strict';

angular.module('myApp.article', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cikk/:id', {
    templateUrl: 'article/article.html',
    controller: 'articleCtrl'
  });
}])

.controller('articleCtrl', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http) {
	var id = $routeParams.id;
	$scope.currentArticle = Dummy.ARTICLE[id];
	$scope.currentState = Constant.state.HAVE_DATA; // Constant.state.BEFORE_REQUEST;

	$scope.getCategories = function() {
		$scope.currentState = Constant.state.WAITING;
		$http({
  			method: 'GET',
  			url: Constant.API_URL + '?action=categories'
		}).then(function successCallback(response) {
    		$rootScope.categories = response.data;
    		console.log($rootScope.categories);
  		}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
  		});
	};

	//$scope.getCategories();

}]);
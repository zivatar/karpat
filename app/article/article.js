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
	$scope.currentArticle = null;
	$scope.currentState = Constant.state.BEFORE_REQUEST;

	$scope.getArticle = function(id) {
		$scope.currentState = Constant.state.WAITING;
		$http({
  			method: 'GET',
  			url: Constant.API_URL + '?action=article&id=' + id
		}).then(function successCallback(response) {
    		$scope.currentArticle = response.data;
    		$scope.currentState = Constant.state.HAVE_DATA;
    		console.log("have_data");
  		}, function errorCallback(response) {
    		$scope.currentState = Constant.state.NO_DATA;
    		console.log("no_data");
  		});
	};

	$scope.getArticle(id);

}]);
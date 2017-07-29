'use strict';

angular.module('myApp.article', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cikk/:id', {
    templateUrl: 'article/article.html',
    controller: 'articleCtrl'
  });
}])

.controller('articleCtrl', ['$routeParams', '$scope', function($routeParams, $scope) {
	var id = $routeParams.id;
	$scope.currentArticle = Dummy.ARTICLE[id];
}]);
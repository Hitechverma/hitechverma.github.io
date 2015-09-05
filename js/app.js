var portFolio = angular.module('portFolio',['ui.router']);

portFolio.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "partials/homepage.html",
		controller: "HomeController",
	})
	$urlRouterProvider.otherwise('/');
})
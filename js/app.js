var portFolio = angular.module('portFolio',['ui.router']);

portFolio.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "partials/homepage.html",
		controller: "HomeController",
	})
	.state('project', {
		url: "/project",
		templateUrl: "partials/projects.html",
		controller: "HomeController",
	})
	.state('resume', {
		url: "/resume",
		templateUrl: "partials/resume.html",
		controller: "HomeController",
	})
	$urlRouterProvider.otherwise('/');
})
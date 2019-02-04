(function() {

	let app;

	function log(obj) {
		console.log(obj);
	}

	function initGlobals(event) {
		app = angular.module('index', ['ngRoute']);
	}

	function initAngular(event) {
		app.controller('RepeatController', function($scope) {
			$scope.examples = [
				{ tag: '', title: 'Exemplo 1', description: 'ng-repeat, ng-if' },
				{ tag: 'ex-2', title: 'Exemplo 2', description: 'ngRoute' }
			];
		});
		app.config(function($routeProvider) {
			$routeProvider
				.when('/', { templateUrl : 'main.html' })
				.when('/ex-2', { templateUrl : 'ex-2-rota.html' })
			;
		});
	}

	function init (event) {
		initGlobals(event);
		initAngular(event);
	}

	init();

})();

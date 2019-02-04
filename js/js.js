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
				{ tag: 'ex-1', title: 'Exemplo 1', description: 'Rotas.' }
			];
		});
		app.config(function($routeProvider) {
			$routeProvider.when('/ex-1', { templateUrl : 'ex-1-rota' });
		});
	}

	function init (event) {
		initGlobals(event);
		initAngular(event);
	}

	init();

})();

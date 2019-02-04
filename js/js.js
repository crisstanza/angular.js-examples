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
				{ tag: 'ex-2', title: 'Exemplo 2', description: 'ngRoute (templateUrl)' },
				{ tag: 'ex-3', title: 'Exemplo 3', description: 'ngRoute (template)' }
			];
		});
		app.config(function($routeProvider) {
			$routeProvider
				.when('/', { templateUrl : 'main.html' })
				.when('/ex-2', { templateUrl : 'ex-2-rota.html' })
				.when('/ex-3', { template : '<p>Rota sem usar arquivo externo!</p><br /><a href="#!">...voltar</a>' })
			;
		});
	}

	function init (event) {
		initGlobals(event);
		initAngular(event);
	}

	init();

})();

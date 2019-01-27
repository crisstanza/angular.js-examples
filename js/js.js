(function() {

	function log(obj) {
		console.log(obj);
	}

	function initGlobals(event) {
	}

	function initAngular(event) {
		angular.module('index', []).controller('RepeatController', function($scope) {
			$scope.examples = [
				{ n: 1, title: 'Exemplo 1', description: 'Lorem ipsum.' },
				{ n: 2, title: 'Exemplo 2', description: 'Dolor sit amet.' }
			];
		});
	}

	function init (event) {
		initGlobals(event);
		initAngular(event);
	}

	init();

})();

(function() {
	'use strict';
	
	angular.module('bigint.demo', [])
	.directive('demo', [function () {
		return {
			restrict: 'A',
			require: '?ngModel',
			template: '<div class="placeholder">Hello world</div>',
			link: function ($scope, element, attrs) {
			}
		};
	}]);
	
})();
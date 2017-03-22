(function(){
	'use strict';

	angular
		.module('app')
		.controller('headerCtrl',headerCtrl);

		headerCtrl.$inject = ['$log'];

		function headerCtrl($log){
			var vm = this;

			vm.showSideNav = function() {
				$mdSidenav('componentId').toggle();
			}

		}

})();

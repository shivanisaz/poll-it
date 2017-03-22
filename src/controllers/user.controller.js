(function(){
	'use strict';

	angular.module('app')
	.controller('userCtrl',userCtrl);

	userCtrl.$inject = ['$log', 'feedService', '$state'];

	function userCtrl($log, feedService, $state){
		var vm = this;

		vm.feedService = feedService;

		vm.submit = function() {
			feedService.addUser()
				.then(function() {
					$state.go('app.feed');
				})
		}



	}
})();

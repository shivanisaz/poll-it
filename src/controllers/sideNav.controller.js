(function(){
	'use strict';

	angular
		.module('app')
		.controller('sideNavCtrl',sideNavCtrl);

		sideNavCtrl.$inject = ['$log', 'feedService'];

		function sideNavCtrl($log, feedService){
			var vm = this;
			vm.feedService = feedService;
		}

})();

(function(){
	'use strict';

	angular
		.module('app')
		.controller('feedCtrl',feedCtrl);

		feedCtrl.$inject = ['$log', 'feedService'];

		function feedCtrl($log, feedService){
			var vm = this;

			vm.feedService = feedService;
			feedService.getPosts();

			vm.support = function(postId) {
				feedService.setOpinion('support', 'c847b538-f996-46db-86ba-95e7b5847285', postId)
					.then(function() {
						return 'support';
					})
			}

			vm.oppose = function(postId) {
				feedService.setOpinion('oppose', 'c847b538-f996-46db-86ba-95e7b5847285', postId)
					.then(function() {
						return 'oppose';
					})
			}

		}
})();



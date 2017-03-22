(function(){
	'use strict';

	angular
		.module('app')
		.factory('feedService',feedService);


		feedService.$inject = ['$log', 'Restangular'];

		function feedService($log, Restangular){
			var posts = [];
			var user = {};

			var object = {
				posts: posts,
				user: user,
				getPosts: getPosts,
				setOpinion: setOpinion,
				addUser: addUser
			};

			return object;

			function getPosts() {
				Restangular.all("posts").getList()
					.then(function(response) {
						object.posts = response;
					})
			}

			function setOpinion(opinion, userId, postId) {
				return Restangular.one("users", userId).one("posts", postId).customPUT({opinion: opinion});
			}

			function addUser() {
				return Restangular.one("users").post(null, object.user)
					.then(function(response) {
						object.user = response;
					})
			}

		}

})();

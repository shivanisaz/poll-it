(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {


		$stateProvider.state('app', {
			url: '/',
			views:{
				'header': {
					templateUrl: '/src/partials/header.html',
				},
				'content':{
					templateUrl: '/src/partials/feed.html',
					controller: 'feedCtrl'
				},
				'navSide':{
					templateUrl: '/src/partials/sideNav.html',
					controller: 'sideNavCtrl'
				}
			}
		})
	}

})();

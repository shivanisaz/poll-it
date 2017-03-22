(function() {
	'use strict';

	angular
	.module('app')
	.config(config);

	config.$inject = ['RestangularProvider'];

	function config(RestangularProvider) {

		RestangularProvider.setBaseUrl('http://10.150.236.29:3000/');
	}

})();

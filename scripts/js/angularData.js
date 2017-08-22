define(['angular', 'EnglishData', 'ChineseData'], function(angular) {

	var app = angular.module("dataApp", []);
	app.controller("myCtrl", function($scope) {
		$scope.Language = enData;
	});

	angular.bootstrap(document, ["dataApp"]);

	return app;

})
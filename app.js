(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.input = "";
		$scope.response = " ";
		$scope.CountItem = function() {
			var items;
			if($scope.input == "") {
				$scope.response = "Please enter data first";
			} else {
				items = $scope.input.split(',');
				if(items.length <= 3 && items.length !=0) {
					$scope.response = "Enjoy!";
				} else {
					$scope.response = "Too much!"
				}
			}
			
		}
	}
})();
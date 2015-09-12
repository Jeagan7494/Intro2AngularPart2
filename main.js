// Setting up the module
angular.module('Part2', []);

// Setting Controller
angular.module('Part2').controller("mainController", ["$scope", function($scope) {
	$scope.fontColor = ''
	$scope.changeColor = function() {
		$scope.fontColor =  'pink'	
	}

	$scope.changeBack = function() {
		$scope.fontColor = "black"
	}

	$scope.heading1 = "This is a heading"
	$scope.heading2 ="This is a heading...again"
	$scope.makeExcited = function(para1){
		$scope[para1] += '!';
	}
	// $scope.makeExcited = function(para1) {
	// 	if (para1 === 1){
	// 	$scope.heading1+= "!"
	// 	}else if (par1 === 2)
	// 	{$scope.heading2 += "!"}
	// }
	$scope.clickConfirm = function(event){
		if (!confirm("Are you sure you want to leave the page?")) {
			event.preventDefault()
			$scope.linkHide = true;
		// } else {
		// 	return false

		};
	}


}]);
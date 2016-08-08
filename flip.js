var coinFlipApp = angular.module('coinFlipApp', []);
coinFlipApp.controller('headsOrTailsController', function($scope){
	// $scope.test="Testing...";
	$scope.heads= function(){//The user clicked on heads
		$scope.UserGuess="heads";
		$scope.flip();
	}
	$scope.tails= function(){//The user clicked on tails
		$scope.UserGuess="tails";
		$scope.flip();
	}
	$scope.playGame= function(){
		$scope.guess = false;
		$scope.message = null;
	}
	$scope.flip= function(){
		$scope.guess = true;
		var rand = Math.random();
		if(rand > .5 ){
			$scope.coin = "quarter-front.png";
			$scope.coinFlipResults = "heads";
		}else{
			$scope.coin = "quarter-back.png";
			$scope.coinFlipResults = "tails";
		}
		if($scope.coinFlipResults === $scope.UserGuess){
			// console.log("YOU WIN!!!");
			$scope.message= "YOU WIN!!!";
		}else{
			// console.log("YOU LOSE!!!");
			$scope.message= "YOU LOSE!!!";
		}
	}
});//End of Controller
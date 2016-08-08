var todoApp = angular.module('todoApp', []);
todoApp.controller('todoController', function($scope){
	// $scope.test = "It's working";
	$scope.todos = [
		{
			title: "Gabi's Birthday",
			description: "Plan a party, and buy a gift",
			deadline: "12/19/2016",
			complete: false
		},
		{
			title: "Graduation",
			description: "Complete DigitalCrafts 16-week course",
			deadline: "10/28/2016",
			complete: false
		},
		{
			title: "Vote",
			description: "Pick one of the two idiots running for president",
			deadline: "11/08/2016",
			complete: false
		},
		{
			title: "Citizenship Interview",
			description: "Gabi has an interview and exam for U.S. citizenship",
			deadline: "08/10/2016",
			complete: false
		},
		{
			title: "Brazil Vacation",
			description: "Spend a month in Brazil with family",
			deadline: "06/15/2017",
			complete: false
		},
	];
	$scope.addTitle = function(){
		$scope.todos.title.push($scope.todos);
		$scope.newTitle = "";
	}
});
var app = angular.module('moj-app', []);

app.controller('first-controler', ['$scope', 'limitToFilter', function($scope, limitToFilter){
	$scope.message= limitToFilter("jakiś tekst", 5);
	
}]);

app.controller('Second-controler', ['$scope', function($scope){
	$scope.message= "jakiś tekst 2";
	$scope.settings= {
		imie:'Adam',
		nazwisko: 'Nowak'

	};

}]);
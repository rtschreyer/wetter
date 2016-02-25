'use strict';

  angular.module("forecastAppControllers", ['ngAnimate','forecastAppServices','forecastDataFilters'])
  
	/* location Controller */

	.controller("locationCtrl", function ($scope, $http, weatherService) {
		$scope.cities = [
			{'name':'Berlin','lon':'52.520007','lat':'13.404954'},
			{'name':'Los Angeles','lon':'34.052234','lat':'-118.243685'},
			{'name':'New York','lon':'40.712784','lat':'-74.005941'},
			{'name':'Sao Paulo','lon':'-23.550520','lat':'-46.633309'},
			{'name':'London','lon':'51.507351','lat':'-0.127758'},
			{'name':'Paris','lon':'48.856614','lat':'2.352222'},
			{'name':'Kapstadt','lon':'-33.924869','lat':'18.424055'},
			{'name':'Rom','lon':'41.902783','lat':'12.496366'},
			{'name':'Madrid','lon':'40.416775','lat':'-3.703790'},
			{'name':'Moskau','lon':'55.755826','lat':'37.617300'},
			{'name':'Bagdad','lon':'33.312806','lat':'44.361488'},
			{'name':'Mumbai','lon':'19.075984','lat':'72.877656'},
			{'name':'Hong Kong','lon':'22.396428','lat':'114.109497'},
			{'name':'Surabaya','lon':'-7.257472','lat':'112.752088'},
			{'name':'Sidney','lon':'-33.867487','lat':'151.206990'}
		];
		/* initial selection */
		$scope.selected = $scope.cities[0];


		$scope.getWeather = function(item){
		    $scope.selected = item;
		    var coords = $scope.selected.lon+','+$scope.selected.lat;
		    weatherService.getConfiguration().then(
			function( configData){
				var _configData = arguments[0];
				weatherService.getData(coords, _configData).then(
					function(data){
						$scope.data = data.data;
					},
					    function(message) {   // On failure
						console.log(message);
					});
			},function(){}
		)};
		/* apply initial selection */
		$scope.getWeather($scope.selected);

	})
	.controller("slideCtrl", function ($scope){
		$scope.max = 7;
		$scope.step = 2;
		$scope.show = 3;
		$scope.start = 0;
		
		
	});
;
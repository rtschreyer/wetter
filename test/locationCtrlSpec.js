describe('forecastApp v0.0.1', function() {
    var scope, coords, lang, apiKey, httpBackend;

    // Initialization of the AngularJS application before each test case
    beforeEach(module('forecastApp'));

    var $controller;
  
    beforeEach(inject(function(_$controller_){
      $controller = _$controller_;
    }));
    
    describe('Testing locationControler ', function() {
	    it('Berlin exists', function() {
	      var $scope = {};
	      var controller = $controller('locationCtrl', { $scope: $scope });
	      
	      expect($scope.cities).toContain({'name':'Berlin','lon':'52.520007','lat':'13.404954'});

	    });
	    it('$scope.selected is set', function() {
	      var $scope = {};
	      var controller = $controller('locationCtrl', { $scope: $scope });
	      
	      expect($scope.selected).toEqual($scope.cities[0]);

	    });
    });


});

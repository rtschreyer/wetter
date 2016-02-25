describe('weatherService', function() {
    var scope, coords, lang, apiKey, httpBackend;
    var mockConfig, _configData;

    // Initialization of the AngularJS application before each test case
    beforeEach(module('forecastApp'));
 
    beforeEach(module('forecastAppServices'));
    
    
   
    it('should have a weatherservice', inject(function(weatherService){ 

            expect( weatherService ).not.toBeUndefined();

    }));
   
    it('getConfiguration should be defined', inject(function(weatherService) {
        expect( weatherService.getConfiguration() ).not.toBeUndefined();
    }));
    
    it('_configData should be undefined', inject(function(weatherService) {
        expect(_configData).toBeUndefined();
    }));

    describe('Injecting a spy for _configData.apiKey', function() {
        var _configData = {apiKey : null};   
        beforeEach(function() {
            mockConfig = {
              setapiKey: function(value) {  _configData.apiKey = value; }
            };
            spyOn(mockConfig, 'setapiKey');
            mockConfig.setapiKey("1234567890.....");
        });
        
        it('_configData should be defined', inject(function(weatherService) {
            expect(_configData).not.toBeUndefined();
        }));
        
        it('_configData.apiKey should be defined', inject(function(weatherService) {
            expect(_configData.apiKey).not.toBeUndefined();
        }));
        
     });
   
});
'use strict';

/* Services */

angular.module('forecastAppServices', [])
   
    .provider('weatherService', function() {
        /**
         * Private setter functions for manual configuration (without external json).
         * Not needed, only implemented for demonstration as fallback
         * when json-file is broken, empty or deleted
         * Will resolve to 'manualConfig'
         * */
        
        this.setApiKey = function(key) {
            this.apiKey = key;
        };
        
        this.setLang = function(lang) {
            this.lang = lang;
        };
        
        this.setUnits = function(units) {
            this.units = units;
        };
 
  
        this.$get = function($http, $q) {
          /* manualConfig */  
          var apiKey = this.apiKey,
              lang = this.lang,
              units = this.units,
              _manualConfigData = {'apiKey': apiKey, 'lang': lang, 'units': units},
              weatherUrl;
            
              
          return {
            /*
             * Method to read configuration settings from external file.
             * Specially usefull for ApiKey to be not part of the sourcecode.
             * Needs config.json in root folder of app.
             */
            getConfiguration : function($scope){
                var deferred = $q.defer();
                $http.get('config.json')
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function() {
                        deferred.reject('error reading config.json');
                    });
        
                return deferred.promise;
            },
            
            /*
             * Call to forecast.io with geo-coordinates and configuration settings.
             * Returns full response as deferred promise to be handled by controller.
             **/
            
            /* use _manualConfigData instead of _configData if you want to use internal config */
            getData: function(coords, _configData, $scope){
              var deferred = $q.defer();
              var apiKey = _configData.apiKey,
                  lang = _configData.lang,
                  units = _configData.units,
                  weatherUrl;
              weatherUrl = 'https://api.forecast.io/forecast/' + apiKey + '/' + coords + '?callback=JSON_CALLBACK&units=' + units + '&lang='+lang;
              
              var promise = $http.jsonp(weatherUrl)
                .then(function(response) {
                   deferred.resolve(response);
                },function(error) {
                   deferred.reject(error);
              });
              return deferred.promise; 
            }
          }
        };
  
});


'use strict';

/* Custom filters */

angular.module("forecastDataFilters", [])
	.filter('currently', function() {
		return function(input){
			input = input || '';
			return input.currently;
		};
	})
	.filter('daily', function() {
		return function(input){
			input = input || '';
			return input.daily.data;
		};
	})
	.filter('summary', function() {
		return function(input){
			input = input || '';
			return input.summary;
		};
	})
	.filter('temperature', function() {
		return function(input){
			input = input || '';
			return input.temperature;
		};
	})
	.filter('element', function() {
		return function(input, element){
			input = input || '';
			return input[element];
		};
	})
	.filter('temperatureFmt', function() {
		return function(value){
			return parseFloat(value, 10).toFixed(1) + '°C';
		};
	})
	.filter('time', function() {
		return function(input){
			input = input || '';
			return input.time;
		};
	})
	.filter('local', function() {
		return function(input, offset){
			var input = input || '',
			offset = offset || 0,
			now = new Date(),
			offset1 = now.getTimezoneOffset()/60;
			return parseInt(input) + ((offset + offset1) * 3600);
		};
	})
	.filter('localtime', function() {
		return function(input, offset){
			var input = input || '',
			offset = offset || 0,
			now = new Date(),
			offset1 = now.getTimezoneOffset()/60;
			return input.time + ((offset + offset1) * 3600);
		};
	})
	.filter('timeFmt', function() {
		return function(value){
			// .format("dddd, MMMM Do YYYY, hh:mm:ss")
			var time = moment.unix(value).format('HH:mm');
			return time;
		};
	})
	.filter('dateFmt', function() {
		return function(value){
			var date = moment.unix(value).locale('de').format('dddd, D. MMMM YYYY');
			return date;
		};
	})
	.filter('percFmt', function() {
		return function(value){
			return parseFloat(value * 100, 10).toFixed(0) + '%';
		};
	})
	.filter('slice', function() {
		return function(arr, start, end) {
		  return (arr || []).slice(start, end);
		};
	})
	.filter('more', function() {
		return function() {
			var args = arguments;
		    var total = [].shift.apply(arguments);
		    var filterName = [].splice.call(args, 1, 1)[0];
		    console.lo(args,total,filtername);
		    return $filter('slice').apply(null, arguments);
		};
	    })
	;
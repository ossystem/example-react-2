var weather = require('openweather-apis');
var Promise = require('bluebird');


var mainController = {

	sendForecast: function(req, res) {
		//example of using promise
		//get forecast
		var getForecast = function() {
			var promise = new Promise(function(resolve, reject) {
				//get coordinates
				var lat = parseFloat(req.query.latitude);
				var lon = parseFloat(req.query.longitude);
				//configure openweather api
				weather.setCoordinate(lat, lon);
				weather.setLang('en');
				weather.setUnits('metric');
				weather.setAPPID('5240c3579168397f4fcc92213b0da3cd');
				// get 5 days forecast
				weather.getWeatherForecastForDays(5, function(err, data) {
					if (err) {
						resolve({masage:"problems with forecast API"});
					};
					resolve(data);
				});
			});
			return promise;
		};

		//send forecast
		var sendForecast = function(data) {
			var promise = new Promise(function(resolve, reject) {
				//response with forecast
				return res.json(data);
			});
			return promise;
		};

		//chain
		getForecast().then(sendForecast);
	}
}

module.exports = mainController;

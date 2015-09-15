weatherApp.service('cityService', function () {

    this.city = "São Manuel, SP";

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.getWeather = function (city, days) {

        var api = $resource("http://openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return api.get({
            q: city,
            cnt: days
        });

    }

}]);
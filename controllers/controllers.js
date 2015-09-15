weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

}]);


weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || 2;

    $scope.weatherAPI = $resource("http://openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });

    $scope.weatherResults = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days
    });

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToCelsius = function (degK) {
        return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function (l) {
        return new Date(l * 1000);
    }
}]);
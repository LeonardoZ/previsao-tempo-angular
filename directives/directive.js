weatherApp.directive('weatherReport', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDays: '=',
            convertToStandard1: '&',
            convertToStandard2: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    }
});
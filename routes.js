angular.module('autocare').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'pages/home.html'
        })
        .when('/info', {
            templateUrl: 'pages/information.html'
        })
        .when('/services', {
            templateUrl: 'pages/services.html'
        });
    }]);

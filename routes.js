angular.module('autocare').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'pages/home.html'
        });
    }]);

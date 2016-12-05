angular.module('autocare').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'view/pages/home.html'
        });
    }]);

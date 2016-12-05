(function() {
    angular.module('autocare').controller("LayoutController", function ($scope) {
        $scope.name = "Panos";

        $scope.menuOptions = [
            'home',
            'services',
            'gallery',
            'offers',
            'information',
            'contact'
        ];


    })
})();

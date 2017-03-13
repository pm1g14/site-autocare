(function() {
    angular.module('autocare').controller("ServicesController", function($scope, servicesText) {
        $scope.servicePaintHeader = servicesText.SERVICES_PAINT_HEADER;
        $scope.servicePaintContent = servicesText.SERVICES_PAINT_TEXT_BODY;
        $scope.servicePolishingHeader = servicesText.SERVICES_POLISHING_HEADER;
        $scope.servicePolishingContent = servicesText.SERVICES_POLISHING_TEXT_BODY;
        $scope.serviceLightCleaningHeader = servicesText.SERVICES_LIGHTS_HEADER;
        $scope.serviceLightCleaningContent = servicesText.SERVICES_LIGHTS_TEXT_BODY;
        $scope.serviceLightRimPaintHeader = servicesText.SERVICES_RIMS_HEADER;
        $scope.serviceLightRimPaintContent = servicesText.SERVICES_RIMS_TEXT_BODY;
    });
})();

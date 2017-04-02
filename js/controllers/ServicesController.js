// (function() {
//     angular.module('autocare').controller("ServicesController", function($scope, servicesText) {
//         $scope.servicePaintHeader = servicesText.SERVICES_PAINT_HEADER;
//         $scope.servicePaintContent = servicesText.SERVICES_PAINT_TEXT_BODY;
//         $scope.servicePolishingHeader = servicesText.SERVICES_POLISHING_HEADER;
//         $scope.servicePolishingContent = servicesText.SERVICES_POLISHING_TEXT_BODY;
//         $scope.serviceLightCleaningHeader = servicesText.SERVICES_LIGHTS_HEADER;
//         $scope.serviceLightCleaningContent = servicesText.SERVICES_LIGHTS_TEXT_BODY;
//         $scope.serviceLightRimPaintHeader = servicesText.SERVICES_RIMS_HEADER;
//         $scope.serviceLightRimPaintContent = servicesText.SERVICES_RIMS_TEXT_BODY;
//     });
// })();

(function() {
    var ServicesController = function($scope, servicesText, LayoutService) {
        $scope.servicePaintHeader = servicesText.SERVICES_PAINT_HEADER;
        $scope.servicePaintContent = servicesText.SERVICES_PAINT_TEXT_BODY;
        $scope.servicePolishingHeader = servicesText.SERVICES_POLISHING_HEADER;
        $scope.servicePolishingContent = servicesText.SERVICES_POLISHING_TEXT_BODY;
        $scope.serviceLightCleaningHeader = servicesText.SERVICES_LIGHTS_HEADER;
        $scope.serviceLightCleaningContent = servicesText.SERVICES_LIGHTS_TEXT_BODY;
        $scope.serviceLightRimPaintHeader = servicesText.SERVICES_RIMS_HEADER;
        $scope.serviceLightRimPaintContent = servicesText.SERVICES_RIMS_TEXT_BODY;
        $scope.paintingSlides = LayoutService.getPaintingCarousel();
        $scope.polishingSlides = LayoutService.getPolishingCarousel();
        $scope.cleaningSlides = LayoutService.getCleaningCarousel();
        $scope.rimSlides = LayoutService.getRimsCarousel();

    };
    ServicesController.$inject = ['$scope', 'servicesText', 'LayoutService'];
    angular.module('autocare').controller('ServicesController', ServicesController);
})();
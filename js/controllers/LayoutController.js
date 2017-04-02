// (function() {
//     angular.module('autocare', ['ngRoute', 'staticContent']).controller("LayoutController", function($scope, menuLabels, bottomBanner, informationText, LayoutService) {
//
//         var prefix = '#';
//
//         $scope.menuOptions = [
//             {
//                 option: menuLabels.HOME,
//                 href: prefix+'/home'
//             },
//             {
//                 option: menuLabels.SERVICES,
//                 href: prefix+'/services'
//             },
//             {
//                 option: menuLabels.GALLERY,
//                 href: prefix+'/gallery'
//             },
//             {
//                 option: menuLabels.OFFERS,
//                 href: prefix+'/offers'
//             },
//             {
//                 option: menuLabels.INFORMATION,
//                 href: prefix+'/info'
//             },
//             {
//                 option: menuLabels.CONTACT,
//                 href: prefix+'/contact'
//             }
//         ];
//
//         $scope.addressInfo = bottomBanner.ADDRESS_INFO;
//         $scope.footerCopyright = "©Copyright, Created by Panos Mav";
//         $scope.bottomBannerDataRefunds = bottomBanner.REFUNDS;
//         $scope.bottomBannerDataSendEmail = bottomBanner.SEND_EMAIL;
//         $scope.bottomBannerDataViewOffers = bottomBanner.VIEW_OFFERS;
//         $scope.bottomBannerDataViewOffersLink = bottomBanner.VIEW_OFFERS_LINK;
//         $scope.mapHeader = bottomBanner.MAP_HEADER;
//         $scope.informationMain = informationText.INFO_MAIN;
//         $scope.informationCar = informationText.INFO_GET_CAR;
//         $scope.informationSendEmail = informationText.INFO_EMAIL;
//         $scope.informationOffers = informationText.INFO_OFFERS;
//         $scope.informationPageHeader = informationText.INFO_HEADER;
//         $scope.carouselSlides = LayoutService.getHomeCarouselSlides();
//
//     });
// })();

(function() {
    var LayoutController = function($scope, LayoutService, menuLabels, bottomBanner, informationText) {
                var prefix = '#';

        $scope.menuOptions = [
            {
                option: menuLabels.HOME,
                href: prefix+'/home'
            },
            {
                option: menuLabels.SERVICES,
                href: prefix+'/services'
            },
            {
                option: menuLabels.GALLERY,
                href: prefix+'/gallery'
            },
            {
                option: menuLabels.OFFERS,
                href: prefix+'/offers'
            },
            {
                option: menuLabels.INFORMATION,
                href: prefix+'/info'
            },
            {
                option: menuLabels.CONTACT,
                href: prefix+'/contact'
            }
        ];

        $scope.addressInfo = bottomBanner.ADDRESS_INFO;
        $scope.footerCopyright = "©Copyright, Created by Panos Mav";
        $scope.bottomBannerDataRefunds = bottomBanner.REFUNDS;
        $scope.bottomBannerDataSendEmail = bottomBanner.SEND_EMAIL;
        $scope.bottomBannerDataViewOffers = bottomBanner.VIEW_OFFERS;
        $scope.bottomBannerDataViewOffersLink = bottomBanner.VIEW_OFFERS_LINK;
        $scope.mapHeader = bottomBanner.MAP_HEADER;
        $scope.informationMain = informationText.INFO_MAIN;
        $scope.informationCar = informationText.INFO_GET_CAR;
        $scope.informationSendEmail = informationText.INFO_EMAIL;
        $scope.informationOffers = informationText.INFO_OFFERS;
        $scope.informationPageHeader = informationText.INFO_HEADER;
        $scope.carouselSlides = LayoutService.getHomeCarouselSlides();
    };
    LayoutController['$inject']=['$scope', 'LayoutService', 'menuLabels', 'bottomBanner', 'informationText'];
    angular.module("autocare", ['ngRoute', 'staticContent']).controller('LayoutController', LayoutController);
})();
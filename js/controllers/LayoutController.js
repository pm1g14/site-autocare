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

        $scope.footerCopyright = "©Copyright, Created by Panos Mav";

        $scope.carouselSlides = [
            {
                imageSrc: "",
                slideClass: "active",
                slideTo: "0",
                wrapperClass: "item active",
                alt: "",
            },
            {
                imageSrc: "",
                slideClass: "",
                slideTo: "1",
                wrapperClass: "item",
                alt: "",
            },
            {
                imageSrc: "",
                slideClass: "",
                slideTo: "2",
                wrapperClass: "item",
                alt: "",
            },
            {
                imageSrc: "",
                slideClass: "",
                slideTo: "3",
                wrapperClass: "item",
                alt: "",
            }
        ];
    })
})();

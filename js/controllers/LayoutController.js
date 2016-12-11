(function() {
    angular.module('autocare').controller("LayoutController", function ($scope) {
        $scope.name = "Panos";

        $scope.menuOptions = [
            {
                option:'home',
                href: '/home'
            },
            {
                option:'services',
                href: '/services'
            },
            {
                option: 'gallery',
                href: '/gallery'
            },
            {
                option: 'offers',
                href: '/offers'
            },
            {
                option: 'information',
                href: '/info'
            },
            {
                option: 'contact',
                href: '/contact'
            }
        ];

        $scope.addressInfo = "58100, Melissi";
        $scope.footerCopyright = "©Copyright, Created by Panos Mav";
        $scope.mapHeader = "Where to find us:";

        $scope.carouselSlides = [
            {
                imageSrc: "../img/slide-1.png",
                slideClass: "active",
                slideTo: "0",
                wrapperClass: "item active",
                alt: "",
            },
            {
                imageSrc: "../img/slide-2.png",
                slideClass: "",
                slideTo: "1",
                wrapperClass: "item",
                alt: "",
            },
            {
                imageSrc: "../img/slide-3.png",
                slideClass: "",
                slideTo: "2",
                wrapperClass: "item",
                alt: "",
            },
            {
                imageSrc: "../img/slide-4.png",
                slideClass: "",
                slideTo: "3",
                wrapperClass: "item",
                alt: "",
            }
        ];
    })
})();

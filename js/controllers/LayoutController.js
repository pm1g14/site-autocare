(function() {
    angular.module('autocare').controller("LayoutController", function ($scope) {
        $scope.name = "Panos";

        var prefix = '#';

        $scope.menuOptions = [
            {
                option:'home',
                href: prefix+'/home'
            },
            {
                option:'services',
                href: prefix+'/services'
            },
            {
                option: 'gallery',
                href: prefix+'/gallery'
            },
            {
                option: 'offers',
                href: prefix+'/offers'
            },
            {
                option: 'information',
                href: prefix+'/info'
            },
            {
                option: 'contact',
                href: prefix+'/contact'
            }
        ];

        $scope.addressInfo = "Μελίσσι,Γιαννιτσά Τ.Κ. 58100,τηλ:23820-42455.";
        $scope.footerCopyright = "©Copyright, Created by Panos Mav";
        $scope.bottomBannerDataRefunds = "Αναλαμβάνουμε αποζημιώσεις από ασφαλιστικές εταιρίες.";
        $scope.bottomBannerDataSendEmail = "Άμεσες-online εκτιμήσεις. Στείλτε μας email με ένα κλικ.";
        $scope.mapHeader = "Που θα μας βρείτε:";

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

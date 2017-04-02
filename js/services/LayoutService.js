(function() {
    angular.module("autocare").service("LayoutService", function() {

        this.getHomeCarouselSlides = function() {

            return [
                    {
                        imageSrc: "../img/slide-1.png",
                        slideClass: "active",
                        slideTo: "0",
                        wrapperClass: "item active",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/slide-2.png",
                        slideClass: "",
                        slideTo: "1",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/slide-3.png",
                        slideClass: "",
                        slideTo: "2",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/slide-4.png",
                        slideClass: "",
                        slideTo: "3",
                        wrapperClass: "item",
                        alt: ""
                    }
                ];
        };

        this.getPaintingCarousel = function() {

            return [
                    {
                        imageSrc: "../img/topikesolikes1.jpg",
                        slideClass: "active",
                        slideTo: "0",
                        wrapperClass: "item active",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/topikesolikes2.jpg",
                        slideClass: "",
                        slideTo: "1",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/topikesolikes3.jpg",
                        slideClass: "",
                        slideTo: "2",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "",
                        slideClass: "",
                        slideTo: "",
                        wrapperClass: "",
                        alt: ""
                    }
            ];
        };

        this.getCleaningCarousel = function() {

            return [
                    {
                        imageSrc: "../img/ksethampwma1.jpg",
                        slideClass: "active",
                        slideTo: "0",
                        wrapperClass: "item active",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/ksethampwma2.jpg",
                        slideClass: "",
                        slideTo: "1",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/ksethampwma.jpg",
                        slideClass: "",
                        slideTo: "2",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "",
                        slideClass: "",
                        slideTo: "",
                        wrapperClass: "",
                        alt: ""
                    }
            ];
        };

        this.getRimsCarousel = function() {

            return [
                    {
                        imageSrc: "../img/zantes1.jpg",
                        slideClass: "active",
                        slideTo: "0",
                        wrapperClass: "item active",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/zantes2.jpg",
                        slideClass: "",
                        slideTo: "1",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/zantes3.jpg",
                        slideClass: "",
                        slideTo: "2",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "",
                        slideClass: "",
                        slideTo: "",
                        wrapperClass: "",
                        alt: ""
                    }
            ];
        };


        this.getPolishingCarousel = function() {

            return [
                    {
                        imageSrc: "../img/topikesolikes1.jpg",
                        slideClass: "active",
                        slideTo: "0",
                        wrapperClass: "item active",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/topikesolikes2.jpg",
                        slideClass: "",
                        slideTo: "1",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "../img/topikesolikes3.jpg",
                        slideClass: "",
                        slideTo: "2",
                        wrapperClass: "item",
                        alt: ""
                    },
                    {
                        imageSrc: "",
                        slideClass: "",
                        slideTo: "",
                        wrapperClass: "",
                        alt: ""
                    }
            ];
        }
    });
})();


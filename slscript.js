$(document).ready(function() {

    $('.your-class').slick({
        // arrows: false,
        prevArrow: '',
        nextArrow: '<div class="slider-footer-next">nennnenext</div>',

    });

    const next = document.querySelector('.slider-footer-next');
    next.remove();
    document.querySelector('.slider-footer').appendChild(next);



    // $('.about-slider').slick({
    //     centerMode: false,
    //     centerPadding: '0',
    //     dots: false,
    //     autoplay: false,
    //     autoplaySpeed: 4500,
    //     speed: 800,
    //     arrows: false,
    //     prevArrow: '<div class="slick-prev slick-arrow">PPPPP</div>',
    //     nextArrow: '<div class="slick-next slick-arrow">NNNNN</div>',
    //     fade: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     touchThreshold: 10,
    //     swipeToSlide: true,
    //     variableWidth: true,
    //     swipeToSlide: true,
    //     infinite: false,
    //     waitForAnimate: false,
    //     adaptiveHeight: true,
    //     responsive: [{
    //             breakpoint: 1400,
    //             settings: {
    //                 centerMode: false,
    //                 centerPadding: '0',
    //                 slidesToShow: 2,
    //                 adaptiveHeight: true,
    //             }
    //         },
    //         {
    //             breakpoint: 1279,
    //             settings: {
    //                 centerMode: false,
    //                 centerPadding: '0',
    //                 adaptiveHeight: true,
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                 centerMode: true,
    //                 centerPadding: '0',
    //                 slidesToShow: 1,
    //                 arrows: false,
    //                 adaptiveHeight: true
    //             }
    //         }
    //     ]
    // });




});
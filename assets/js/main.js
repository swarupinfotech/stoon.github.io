;
(function($) {
    "use strict";

    $(document).ready(function() {


        /*-------------------------------------
            magnific popup video activation Made by Swarup Kumar
        -------------------------------------*/

        $(".video-btn-style-01").magnificPopup({
            items: {
                src: "https://www.youtube.com/watch?v=AOXl0Ll_t9s"
            },
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/AOXl0Ll_t9s"
                    }
                },
                srcAction: "iframe_src"
            }
        });

        $(".video-btn-style-02").magnificPopup({
            items: {
                src: "https://www.youtube.com/watch?v=AOXl0Ll_t9s"
            },
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/AOXl0Ll_t9s"
                    }
                },
                srcAction: "iframe_src"
            }
        });

        $(".video-btn-style-03").magnificPopup({
            items: {
                src: "https://www.youtube.com/watch?v=AOXl0Ll_t9s"
            },
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/AOXl0Ll_t9s"
                    }
                },
                srcAction: "iframe_src"
            }
        });

        $(".btn-video").magnificPopup({
            items: {
                src: "https://www.youtube.com/watch?v=AOXl0Ll_t9s"
            },
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/AOXl0Ll_t9s"
                    }
                },
                srcAction: "iframe_src"
            }
        });


        $('.menu').click(function() {
            $(this).toggleClass('open');
        });


        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click', '#body-overlay', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#search', function(e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        // sidebar menu 
        $(document).on('click', '.sidebar-menu-close', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#navigation-button', function(e) {
            e.preventDefault();
            sidebarMenu.addClass('active');
            bodyOvrelay.addClass('active');
        });

        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children > a").click(function(e) {
                e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        /*---------------------
            Nice Select ***
        ----------------------*/
        $('.nice-select').niceSelect();


        /**********************
         * Countdown Activation
         ***********************/

        $('[data-countdown]').each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                $this.html(event.strftime('<div><span class="days">%D</span><div class="smalltext">Days</div></div><div><span class="days">%H</span><div class="smalltext">Hrs</div></div><div><span class="days">%M</span><div class="smalltext">Min</div></div><div><span class="days">%S</span><div class="smalltext">Sec</div></div>'));
            });
        });


        /**-----------------------------
         * Background Image -***
         * ---------------------------*/
        // var $backgroundImage = $('.bg-image');
        // $backgroundImage.each(function () {
        //     var $this = $(this),
        //         $bgImage = $this.data('bg');
        //     $this.css('background-image', 'url(' + $bgImage + ')');
        // });


        /*-------------------------------------
            slick sliders
        -------------------------------------*/

        // banner slider 
        var slider = $('.banner-slider');
        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        arrows: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        slider.slickAnimation();

        // banner slider 
        var slider2 = $('.banner-slider-02');
        slider2.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        arrows: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        slider2.slickAnimation();


        // banner slider 
        var slider3 = $('.banner-slider-03');
        slider3.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            responsive: [{
                    breakpoint: 1399,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        slider3.slickAnimation();

        slider3.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var totalSlide = slick.slideCount;
            var currentSlideindex = ++slick.currentSlide;
            $('.controler-wrapper .total-controler').text(check_number(totalSlide));
            $('.controler-wrapper .active-controler').text(check_number(currentSlideindex));

        });

        // check_number function
        function check_number(num) {
            var IsInteger = /^[0-9]+$/.test(num);
            return IsInteger ? "0" + num : null;
        }


        // banner slider 
        var slider4 = $('.banner-slider-04');
        slider4.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        arrows: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        slider4.slickAnimation();


        // team slider 
        var tslider = $('.team-slider');
        tslider.slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        });

        // thumb slider
        $('.thumb-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // brand slider
        $('.brand-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

        // fashion slider
        $('.fashion-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

        // fashion slider
        $('.collection-slider-03').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // brand slider
        $('.related-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });


        // collection slider
        $('.collection-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // collection slider
        $('.collection-slider-02').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // product details slider 
        $('.slider-tabfor').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-tabnav'
        });
        $('.slider-tabnav').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            asNavFor: '.slider-tabfor',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: 0
        });

        $(".close-header").click(function() {
            $(".header-top").hide();
        });

        $('#qty_input').prop('disabled', true);
        $('#plus-btn').click(function() {
            $('#qty_input').val(parseInt($('#qty_input').val()) + 1);
        });
        $('#minus-btn').click(function() {
            $('#qty_input').val(parseInt($('#qty_input').val()) - 1);
            if ($('#qty_input').val() == 0) {
                $('#qty_input').val(1);
            }
        });


        /* ---------------------------------------------------------
            Price Slider
        --------------------------------------------------------- */
        $("#slider-range").slider({
            range: true,
            min: 50,
            max: 2000,
            values: [50, 999],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));


        /*-------------------------------------
            owl-carousel
        -------------------------------------*/

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1200: {
                    items: 3,
                    stagePadding: 250
                }
            }
        })

        /* menu-toggle */

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');

        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*------------------
           back to top
       ------------------*/
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });


    });

    $(document).ready(function() {
        $(".megamenu").on("click", function(e) {
            e.stopPropagation();
        });
    });



    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/
        // var mainMenuTop = $(".navbar-area");
        // if ($(window).scrollTop() >= 1) {
        //     mainMenuTop.addClass('navbar-area-fixed');
        // }
        // else {
        //     mainMenuTop.removeClass('navbar-area-fixed');
        // }

        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });

    // instagram slider
    $('.instagram-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // instagram slider
    $('.instagram-slider2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(window).on('load', function() {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function(e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });



})(jQuery);
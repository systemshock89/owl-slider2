$(function () {

    /* Index Owl Slider */
    $(function() {
        if( $(".index_slider .owl-carousel").is("div") ){

            var owl =  $('.index_slider .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],

                // эффект FadeUp
                animateOut: 'owl-fadeUp-out',
                animateIn: 'owl-fadeUp-in'

                // эффект перелистывания
                //animateOut: 'slideOutDown',
                //animateIn: 'flipInX',

                //goDown
                //animateOut: 'owl-goDown-out',
                //animateIn: 'owl-goDown-in',

                //backSlide
                //animateOut: 'owl-backSlide-out',
                //animateIn: 'owl-backSlide-in',

                // затухание
                //animateOut: 'fadeOut',

            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Index Owl Slider */


    /* Index Owl Slider 2 */
    $(function() {
        if( $(".index_slider2 .owl-carousel").is("div") ){

            var owl =  $('.index_slider2 .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],

                // эффект FadeUp
                //animateOut: 'owl-fadeUp-out',
                //animateIn: 'owl-fadeUp-in',

                // эффект перелистывания
                animateOut: 'slideOutDown',
                animateIn: 'flipInX'

                //goDown
                //animateOut: 'owl-goDown-out',
                //animateIn: 'owl-goDown-in',

                //backSlide
                //animateOut: 'owl-backSlide-out',
                //animateIn: 'owl-backSlide-in',

                // затухание
                //animateOut: 'fadeOut',
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Index Owl Slider 2 */


    /* Index Owl Slider 3 */
    $(function() {
        if( $(".index_slider3 .owl-carousel").is("div") ){

            var owl =  $('.index_slider3 .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],

                // эффект FadeUp
                //animateOut: 'owl-fadeUp-out',
                //animateIn: 'owl-fadeUp-in',

                // эффект перелистывания
                //animateOut: 'slideOutDown',
                //animateIn: 'flipInX',

                //goDown
                animateOut: 'owl-goDown-out',
                animateIn: 'owl-goDown-in'

                //backSlide
                //animateOut: 'owl-backSlide-out',
                //animateIn: 'owl-backSlide-in',

                // затухание
                //animateOut: 'fadeOut',
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Index Owl Slider 3 */


    /* Index Owl Slider 4 */
    $(function() {
        if( $(".index_slider4 .owl-carousel").is("div") ){

            var owl =  $('.index_slider4 .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],

                // эффект FadeUp
                //animateOut: 'owl-fadeUp-out',
                //animateIn: 'owl-fadeUp-in',

                // эффект перелистывания
                //animateOut: 'slideOutDown',
                //animateIn: 'flipInX',

                //goDown
                //animateOut: 'owl-goDown-out',
                //animateIn: 'owl-goDown-in',

                //backSlide
                animateOut: 'owl-backSlide-out',
                animateIn: 'owl-backSlide-in'

                // затухание
                //animateOut: 'fadeOut',
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Index Owl Slider 4 */


    /* Index Owl Slider 5 */
    $(function() {
        if( $(".index_slider5 .owl-carousel").is("div") ){

            var owl =  $('.index_slider5 .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],

                // эффект FadeUp
                //animateOut: 'owl-fadeUp-out',
                //animateIn: 'owl-fadeUp-in',

                // эффект перелистывания
                //animateOut: 'slideOutDown',
                //animateIn: 'flipInX',

                //goDown
                //animateOut: 'owl-goDown-out',
                //animateIn: 'owl-goDown-in',

                //backSlide
                //animateOut: 'owl-backSlide-out',
                //animateIn: 'owl-backSlide-in',

                // затухание
                animateOut: 'fadeOut'
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Index Owl Slider 5 */


    /* Index Owl Slider 6 */
    $(function() {
        if( $(".index_slider6 .owl-carousel").is("div") ){

            var owl =  $('.index_slider6 .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ]

                // эффект FadeUp
                //animateOut: 'owl-fadeUp-out',
                //animateIn: 'owl-fadeUp-in',

                // эффект перелистывания
                //animateOut: 'slideOutDown',
                //animateIn: 'flipInX',

                //goDown
                //animateOut: 'owl-goDown-out',
                //animateIn: 'owl-goDown-in',

                //backSlide
                //animateOut: 'owl-backSlide-out',
                //animateIn: 'owl-backSlide-in',

                // затухание
                //animateOut: 'fadeOut',
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Index Owl Slider 6 */


    /* /Carousel Owl Slider */
    $(function () {
        if ($(".carousel_slider .owl-carousel").is("div")) {

            var owl = $('.carousel_slider .owl-carousel');

            owl.owlCarousel({
                items: 5,
                rewind:true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                dots: false,
                responsive:{
                    0:{
                        items:1,
                        margin: 5,
                        nav: false,
                        dots: true,
                        stagePadding: 25,
                        loop: true
                    },
                    650:{
                        items:4,
                        nav: false,
                        dots: true
                    },
                    1000:{
                        items: 5,
                        margin: 10,
                        nav: true
                    }

                }
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Carousel Owl Slider */


    /* Carousel Owl Slider 2 */
    $(function () {
        if ($(".carousel_slider2 .owl-carousel").is("div")) {

            var owl = $('.carousel_slider2 .owl-carousel');

            owl.owlCarousel({
                items: 5,
                rewind:true,
                margin: 10,
                //autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                dots: false,
                autoHeight: true,
                responsive:{
                    0:{
                        items:1,
                        nav: false,
                        dots: true
                    },
                    650:{
                        items:4,
                        nav: false,
                        dots: true
                    },
                    1000:{
                        items: 5,
                        margin: 10,
                        nav: true
                    }
                }
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Carousel Owl Slider 2 */


    /* /Carousel Owl Slider 3 */
    $(function () {
        if ($(".carousel_slider3 .owl-carousel").is("div")) {

            var owl = $('.carousel_slider3 .owl-carousel');

            owl.owlCarousel({
                items: 5,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                stagePadding: 50,
                center: true,
                loop:true,
                responsive:{
                    0:{
                        items:1,
                        margin: 5,
                        nav: false,
                        stagePadding: 25
                    },
                    650:{
                        items:4,
                        nav: false
                    },
                    1000:{
                        items: 5,
                        margin: 10,
                        nav: true,
                        stagePadding: 50
                    }
                }
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    });
    /* /Carousel Owl Slider 3 */


    /* SYNCED Owl Slider */
    if( $(".synced_slider1 .owl-carousel").is("div") ) {

        var $sync1 = $(".synced_slider1 .owl-carousel"),
            $sync2 = $(".synced_slider2 .owl-carousel"),
            duration = 300;

        $sync1
            .owlCarousel({
                items: 1,
                rewind:true,
                margin: 10,
                dots: false,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                touchDrag: false,
                mouseDrag : false
            })
            .on('changed.owl.carousel', function (e) {
                var syncedPosition = syncPosition(e.item.index);

                if ( syncedPosition != "stayStill" ) {
                    $sync2.trigger('to.owl.carousel', [syncedPosition, duration, true]);
                }
            });

        $sync2
            .on('initialized.owl.carousel', function() { //must go before owl carousel initialization
                addClassCurrent( 0 );
            })
            .owlCarousel({
                items: 4,
                rewind:true,
                margin: 18,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                dots: false,
                responsive:{
                    0:{
                        items:3,
                        nav: false
                    },
                    650:{
                        items:4
                    },
                    1000:{

                    }
                }
            })
            .on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            });

        $sync1.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                $sync1.trigger('prev.owl');
            } else {
                $sync1.trigger('next.owl');
            }
            e.preventDefault();
        });

        $sync2.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                $sync2.trigger('prev.owl');
            } else {
                $sync2.trigger('next.owl');
            }
            e.preventDefault();
        });

        $sync2.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
        $sync2.find('.owl-nav .owl-next').attr('title', 'Следующий');

    }

    //adds 'current' class to the thumbnail
    function addClassCurrent( index ) {
        $sync2
            .find(".owl-item")
            .removeClass("current")
            .eq( index ).addClass("current");
    }

    //syncs positions. argument 'index' represents absolute position of the element
    function syncPosition( index ) {

        //PART 1 (adds 'current' class to thumbnail)
        addClassCurrent( index );


        //PART 2 (counts position)

        var itemsNo = $sync2.find(".owl-item").length; //total items
        var visibleItemsNo = $sync2.find(".owl-item.active").length; //visible items

        //if all items are visible
        if (itemsNo === visibleItemsNo) {
            return "stayStill";
        }

        //relative index (if 4 elements are visible and the 2nd of them has class 'current', returns index = 1)
        var visibleCurrentIndex = $sync2.find(".owl-item.active").index( $sync2.find(".owl-item.current") );

        //if it's first visible element and if there is hidden element before it
        if (visibleCurrentIndex == 0 && index != 0) {
            return index - 1;
        }

        //if it's last visible element and if there is hidden element after it
        if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
            return index - visibleItemsNo + 2;
        }

        return "stayStill";
    }
    /* /SYNCED Owl Slider */

}); // END READY

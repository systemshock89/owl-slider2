$(function () {

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
                animateOut: 'slideOutDown',
                animateIn: 'flipInX'
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');
        }
    });


    /* Owl Slider */
    $(function () {
        if ($(".carousel_slider .owl-carousel").is("div")) {

            var owl = $('.carousel_slider .owl-carousel');

            owl.owlCarousel({
                items: 5,
                rewind:true,
                margin: 24,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                dots: false
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');
        }
    });
    /* /Owl Slider */


    /* Owl Slider 2 */
    $(function () {
        if ($(".carousel_slider2 .owl-carousel").is("div")) {

            var owl = $('.carousel_slider2 .owl-carousel');

            owl.owlCarousel({
                items: 3,
                rewind:true,
                margin: 75,
                //autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                dots: false,
                autoHeight: true
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');
        }
    });
    /* /Owl Slider 2 */


    /* SYNCED Owl Slider */
    if( $(".synced_slider1 .owl-carousel").is("div") ) {

        var $sync1 = $(".synced_slider1 .owl-carousel"),
            $sync2 = $(".synced_slider2 .owl-carousel"),
            flag = false,
            duration = 300;

        $sync1
            .owlCarousel({
                items: 1,
                rewind:true,
                margin: 10,
                dots: false,
                //autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                touchDrag: false,
                mouseDrag : false
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                items: 4,
                rewind:true,
                center: true,
                margin: 18,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                dots: false
            })
            .on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }
    /* /SYNCED Owl Slider */

}); // END READY

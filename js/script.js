(function ($) {
  $(document).ready(function () {
    /*Navigation*/
    $(".top_nav a").mPageScroll2id({
      //      offset: 5,
      autoScrollSpeed: true,
      scrollEasing: "easeInOutQuint"
      //      scrollSpeed: 900,
      //      scrollingEasing: "easeInOutQuint"
    });
    var btn = $('#button-top');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, '300');
    });



    /*Слайдер*/
    $('.lp-slider1').owlCarousel({
      animateOut: 'fadeOut',
      dots: false,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 3,
        },
      },
    });


    /*Слайдер альбома Popup*/

    $('.gallery').magnificPopup({
      removalDelay: 600,

      mainClass: 'mfp-fade',
      items: [
        {
          type: 'image',
          src: './img/SliderAlbum/FirstAlbum/alb-0.jpg',
            }, {
          type: 'image',
          src: './img/SliderAlbum/FirstAlbum/alb-01.jpg',
            }, {
          type: 'image',
          src: './img/SliderAlbum/FirstAlbum/alb-02.jpg',
            }, {
          type: 'image',
          src: './img/SliderAlbum/FirstAlbum/alb-03.jpg',
            }, {
          type: 'image',
          src: './img/SliderAlbum/FirstAlbum/alb-04.jpg',
            }, {
          type: 'image',
          src: './img/SliderAlbum/FirstAlbum/alb-05.jpg',
            }],
      gallery: {
        enabled: true
      }
    });

    $('.gallery1').magnificPopup({
      removalDelay: 600,

      mainClass: 'mfp-fade',
      items: [
        {
          type: 'image',
          src: './img/SliderAlbum/SecondAlbum/alb-0.jpg',
        }, {
          type: 'image',
          src: './img/SliderAlbum/SecondAlbum/alb-1.jpg',
        }, {
          type: 'image',
          src: './img/SliderAlbum/SecondAlbum/alb-2.jpg',
        }, {
          type: 'image',
          src: './img/SliderAlbum/SecondAlbum/alb-3.jpg',
        }, {
          type: 'image',
          src: './img/SliderAlbum/SecondAlbum/alb-4.jpg',
        }, {
          type: 'image',
          src: './img/SliderAlbum/SecondAlbum/alb-5.jpg',
        }],
      gallery: {
        enabled: true
      }
    });

    /*Video Player*/
    const player1 = new Plyr('#player1');
    const player2 = new Plyr('#player2');

    /*Animation*/

    new WOW().init();



    /*wrapper jQuery*/
  });
})(jQuery);

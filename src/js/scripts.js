(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    autoplay: true,
    autoplayTimeout: 10000,
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    autoHeight: true
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel', {
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    autoHeight: true
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel--two', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    dots: false,
    margin: 30,
    slideBy: 1,
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel--two-mobile', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    dots: false,
    margin: 30,
    slideBy: 1,
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });
  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      550: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5,
        autoplay: false
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 1,
    autoplay: true,
    autoplayHoverPause:false,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5,
        autoplay: true
      }
    },
    margin: 0,
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '38.3285054,-75.2106448', '38.3285054,-75.2106448');

  $('#gallery-btn').click( function(e) {
    e.preventDefault();
    $('#gallery-target').click();
  });

}(jQuery, HelloWorldDevsTysonSteele));


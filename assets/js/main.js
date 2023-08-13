(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000
  });

  // owlCarousel
  $(".offer_slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".Testimonials_slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 2,
    autoplay:true,
    autoplayTimeout:3000,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

 
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

// $('.gallery-item').magnificPopup({
//   type: 'image',
//   gallery:{
//     enabled:true
//   }
// });

    //video
    $('#popvideo').magnificPopup({
      type: 'iframe'
  });
  $('#popvideo2').magnificPopup({
      type: 'iframe'
  });
  $('#popvideo3').magnificPopup({
      type: 'iframe'
  });
  $('#popvideo4').magnificPopup({
      type: 'iframe'
  });
  $('#popvideo5').magnificPopup({
      type: 'iframe'
  });
  $('#popvideo6').magnificPopup({
      type: 'iframe'
  });

})(jQuery);

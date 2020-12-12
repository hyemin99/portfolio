$(function(){
    $('header').animate({top:"0"},1000);
    $('.scroll-ani').animate({bottom:"0"},1000);
    $('.swiper-container').delay(600).animate({
      'left' : '0',
      'opacity' : '1'
    });
    
    $(window).on('scroll', function(){
      var mysc = $(this).scrollTop();

      if(mysc > 0){
        $('header').css({
          'background-color' : 'rgba(0, 0, 0, 0.6)',
          'border-bottom' : 'solid 1px rgba(255, 255, 255, 0.1)'
        });
      } else {
          $('header').css({
            'background-color' : 'transparent',
            'border-bottom' : 'solid 1px transparent'
          }); 
      }
    });

    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
});
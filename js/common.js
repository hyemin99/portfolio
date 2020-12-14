$(function(){
    $('header').animate({top:'0'},1000);
    $('#hamburger').animate({top:'23px'},1000);
    $('.scroll-ani').animate({bottom:'0'},600);
    $('.swiper-container').delay(600).animate({
      'left' : '0',
      'opacity' : '1'
    });
    $(function () {
      var lastScrollTop = 0,
          delta = 15;
      $(window).scroll(function (event) {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop-st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
          $('.scroll-ani').css({bottom:'0'});
          $('.top-btn').css({bottom:'-10%'});
        } else {
          $('.scroll-ani').css({bottom:'-110px'});
          $('.top-btn').css({bottom:'2%'});
        }
        lastScrollTop = st;
      });
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
    
    $('#sidemenu-container').hide();
    var duration= 400;
    var sidemenu=$('#sidemenu-container');
    var aside=$('.sidemenu');
    var asideButton = $('#hamburger')
    
    .click(function(){
      $(this).toggleClass('active');
      $(this).find('div').removeClass('no-ani');
      $('#sidemenu-container').toggleClass('active');
      sidemenu.toggleClass('open');

      
      if(sidemenu.hasClass('open')){ 
        sidemenu.show("fade", { direction: "right" }, duration);
        aside.stop().animate({right:'0'}, duration, 'easeInOutSine');
        $('#wrap').on('scroll touchmove mousewheel', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
        //클로즈 버튼으로 바뀌어라
      }else{
        aside.stop().animate({right:'-100%'}, duration, 'easeInOutSine' );
        $('#wrap').off('scroll touchmove mousewheel');
        sidemenu.hide("fade", { direction: "right" }, duration);
      }
    }); 
      
    $('.go-top').click(function(){
      $('html, body').animate({scrollTop:0},400);
      return false;
    });

    //clock 현재시간(시계)
    var clockTarget = document.getElementById('clock');

    function clock() {
        var date = new Date();
        var month = date.getMonth();
        var clockDate = date.getDate();
        var day = date.getDay();
        var week = ['일', '월', '화', '수', '목', '금', '토'];
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
    
        clockTarget .innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일`+'\u00A0 \u00A0'+
        `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes }`: minutes }:${seconds < 10 ? `0${seconds }`: seconds }`;
    }
    
    function init() {
    clock();
    setInterval(clock, 1000);
    }
    init();

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
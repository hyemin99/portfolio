$(function(){
    //슬라이드 제어
    $('.swiper-slide').mousemove(function(e){
      $('.img-single, .img-single02').each(function(){
        var layers = $(this).attr('data-val');
        var x = ($(window).innerWidth() - event.pageX * layers) / 100;
        var y = ($(window).innerHeight() - event.pageY * layers) / 100;
        $(this).css('margin-left', x + 'px').css('margin-top', y + 'px');
      });
    });

    // 별이 빛나는 밤밤 헤헿
    var cloneStrars = $('.stars-wrap').clone();
    cloneStrars.appendTo('.main-slide02, .main-slide03');

    //속성 초기화 
    $('.swiper-slide-active div').removeClass('on');
    $('.swiper-slide-active p').removeClass('on');

    var swiper = new Swiper('.swiper-container', {
      effect : 'fade',
      speed : 1000,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide-button-next',
        prevEl: '.slide-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        slideChangeTransitionStart: function(){
          $('.swiper-slide-active div').addClass('on');
          $('.swiper-slide-active p').addClass('on');
          // $('.swiper-slide.swiper-slide-active h2').css('left', '0px');
          // $('.swiper-slide.swiper-slide-active .img-group').css('left', '150px');
        },
        slideChange: function(){
          $('.swiper-slide-active div').removeClass('on');
          $('.swiper-slide-active p').removeClass('on');
          // $('.swiper-slide.swiper-slide-active h2').css('left', '100%');
          // $('.swiper-slide.swiper-slide-active .img-group').css('left', '100%');
        }
      }
    });
    
});
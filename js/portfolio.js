$(function(){
    $('header').animate({top:"0"},1000);
    $('.swiper-container').delay(600).animate({
      'left' : '0',
      'opacity' : '1'
    });
    $(window).on('scroll', function(){
      var mysc = $(this).scrollTop();

      if(mysc > 0){
        $('header').css({'background-color' : 'rgba(0, 0, 0, 0.6)'});
      } else {
          $('header').css({'background-color' : 'transparent'}); 
      }
    });
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
    cloneStrars .appendTo('.main-slide02, .main-slide03');

    //속성 초기화 
    $('.swiper-slide-active div').removeClass('on');
    $('.swiper-slide-active p').removeClass('on');

    var menu = [' ', ' ', ' ']
    var swiper = new Swiper('.swiper-container', {
      initialSlide : 2,
      effect : 'fade',
      speed : 1000,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet : function(index, className){
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        }
      },
      reverseDirection: true,
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
    })
    
    $('.swiper-pagination .swiper-pagination-bullet:first-child').trigger('click');

});
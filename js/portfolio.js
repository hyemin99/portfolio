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

    $(".snb li").click(function(e){
      e.preventDefault();
      var href=$(this).find("a").attr("href")
      var target=$(href).offset().top
      
      $("html, body").animate({
        "scrollTop" : target
      })
      //페이저를 클릭했을때 이동 하도록 만들기
      $(".snb li a").removeClass("on")
      $(this).find("a").addClass("on")
    });
    
    var pos1=$("#about").offset().top
    var pos2=$("#project").offset().top
    var pos3=$("#contact").offset().top
    
    var start=-500 //마지막 section 섹션 높이 활성화
    
    $(window).scroll(function(){
      var scrT= $(window).scrollTop()
      $(".snb li a").removeClass("on")
      //클래스 on을 할당한 개체들은 모두 기입해야 함
      
      if(scrT>= pos1+start&& scrT<pos2+start){
        $(".snb li").find("a").removeClass("on")
        $(".snb li").eq(0).find("a").addClass("on")
      }
      //&& 두 피연산자가 모두 true이면 부울(거짓 참) 값 true를 반환하고, 그렇지 않으면 false를 반환
      
      if(scrT>= pos2+start&& scrT<pos3+start){
        $(".snb li").find("a").removeClass("on")
        $(".snb li").eq(1).find("a").addClass("on")
      }
      if(scrT>=pos3+start){
        $(".snb li").find("a").removeClass("on")
        $(".snb li").eq(2).find("a").addClass("on")
      }
    });

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
    cloneStrars .appendTo('.main-slide02, .main-slide03');

    //속성 초기화 
    $('.swiper-slide-active div').removeClass('on');
    $('.swiper-slide-active p').removeClass('on');

    var swiper = new Swiper('.swiper-container', {
      initialSlide : 2,
      effect : 'fade',
      speed : 1000,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true,
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
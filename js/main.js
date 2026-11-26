$(function(){
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    //슬라이드 제어 (동작 줄이기 설정을 켠 사용자에게는 마우스 패럴랙스 생략)
    if (!reduceMotion) {
      $('.swiper-slide').mousemove(function(e){
        $('.img-single, .img-single02').each(function(){
          var layers = $(this).attr('data-val');
          var x = ($(window).innerWidth() - e.pageX * layers) / 100;
          var y = ($(window).innerHeight() - e.pageY * layers) / 100;
          $(this).css('margin-left', x + 'px').css('margin-top', y + 'px');
        });
      });
    }

    // 별이 빛나는 밤밤 헤헿
    var cloneStrars = $('.stars-wrap').clone();
    cloneStrars.appendTo('.main-slide02, .main-slide03');

    //속성 초기화 
    $('.swiper-slide-active div').removeClass('on');
    $('.swiper-slide-active p').removeClass('on');

    // [접근성] 보이지 않는 슬라이드(loop 복제본 포함)의 링크가 Tab/스크린리더에 잡히지 않도록 처리
    function syncSlides(){
      $('.swiper-slide').each(function(){
        var active = $(this).hasClass('swiper-slide-active');
        $(this).attr('aria-hidden', active ? 'false' : 'true').prop('inert', !active);
        if (active) {
          $(this).find('a').removeAttr('tabindex');
        } else {
          $(this).find('a').attr('tabindex', '-1');
        }
      });
      $('.swiper-pagination-bullet').removeAttr('aria-current')
        .filter('.swiper-pagination-bullet-active').attr('aria-current', 'true');
    }

    var swiper = new Swiper('.swiper-container', {
      effect : 'fade',
      speed : 1000,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // [접근성] 점(span)을 이름이 있는 button 으로 렌더링
        renderBullet: function(index, className){
          return '<button type="button" class="' + className + '" aria-label="' + (index + 1) + '번 슬라이드로 이동"></button>';
        }
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
        init: function(){
          syncSlides();
        },
        slideChangeTransitionStart: function(){
          $('.swiper-slide-active div').addClass('on');
          $('.swiper-slide-active p').addClass('on');
        },
        slideChange: function(){
          $('.swiper-slide-active div').removeClass('on');
          $('.swiper-slide-active p').removeClass('on');
          syncSlides();
        },
        slideChangeTransitionEnd: function(){
          syncSlides();
        }
      }
    });

    window.portfolioSwiper = swiper;
    syncSlides();

    // [접근성] 자동재생 정지/시작 버튼 (WCAG 2.2.2)
    var $slider = $('.slide-content');
    var $autoBtn = $('.slide-autoplay-btn');
    var userPaused = false;

    function setPaused(paused){
      userPaused = paused;
      if (swiper.autoplay) {
        if (paused) { swiper.autoplay.stop(); } else { swiper.autoplay.start(); }
      }
      $slider.toggleClass('is-paused', paused);
      $autoBtn.attr('aria-label', paused ? '슬라이드 자동 재생 시작' : '슬라이드 자동 재생 정지');
      // 정지 상태에서는 슬라이드가 바뀔 때 스크린리더에 알림
      $('.swiper-wrapper').attr('aria-live', paused ? 'polite' : 'off');
    }

    $autoBtn.on('click', function(){
      setPaused(!userPaused);
    });

    // 동작 줄이기 설정을 켠 사용자는 처음부터 정지 상태
    if (reduceMotion) {
      setPaused(true);
    }

    // 슬라이드 영역에 키보드 포커스가 있는 동안에는 자동으로 넘어가지 않게 함
    $slider.on('focusin', function(){
      if (!userPaused && swiper.autoplay) swiper.autoplay.stop();
    }).on('focusout', function(){
      if (!userPaused && swiper.autoplay) swiper.autoplay.start();
    });
});

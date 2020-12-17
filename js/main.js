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
    cloneStrars .appendTo('.main-slide02, .main-slide03');

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
});
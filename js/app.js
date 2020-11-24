const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document. querySelector('.container');

hamburger_menu.addEventListener('click', () =>{
    container.classList.toggle('active');
})

$(function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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

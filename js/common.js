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
        $('header').css({'background-color' : 'rgba(0, 0, 0, 0.6)'});
      } else {
          $('header').css({'background-color' : 'transparent'}); 
      }
    });
});
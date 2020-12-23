$(function(){
    $('#bottom-nav').css({bottom:'-70px'});
    var lastScrollTop = 0,
        delta = 15;
      $(window).scroll(function (event) {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop-st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
          $('#bottom-nav').css({bottom:'-70px'});
        } else {
          $('#bottom-nav').css({bottom:'0'});
        }
        lastScrollTop = st;
      });

      $(window).on('scroll', function() {
		var scrollTop = window.innerHeight / 2;
		var eleTop = $('#project-section')[0].getBoundingClientRect().top;
		if(eleTop > scrollTop) {
			$('#bottom-nav').css({bottom:'-70px'});
		}
        });
        
     $(window).on('scroll', function(){
        var mysc = $(this).scrollTop();
        if(mysc > 0){
          $('.main-img *').css({'opacity' : '0.5'});
          $('.project-arrow').css({'opacity' : '0'});
        } else {
          $('.main-img *').css({'opacity' : '1'});
          $('.project-arrow').css({'opacity' : '1'});
        }
        });
});
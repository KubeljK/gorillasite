$(window).scroll( function() {
	var scroll = $(window).scrollTop();
    var speed1 = 0.6;
    
	$('.scrollerOne').each(function(){
		var $this = $(this);
        var $parent = $this.parent()
        var topOffset = $parent.offset().top;
        var height = $parent.outerHeight(true);
        var parallaxSize = (scroll - topOffset) * speed1;
        
        // prevent parallax when scroll down
        if(scroll > topOffset + height) {
            return;
        }
		
        $this.css({ 
            'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)' ) : ''
        });
    }); 
    


    var scroll = $(window).scrollTop();
    var speed2 = 0.9;
    $('.scrollerTwo').each(function(){
		var $this = $(this);
        var $parent = $this.parent()
        var topOffset = $parent.offset().top;
        var height = $parent.outerHeight(true);
        var parallaxSize = (scroll - topOffset) * speed2;
        // prevent parallax when scroll down
        if(scroll > topOffset + height) {
            return;
        }
        $this.css({ 
            'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)' ) : ''
        });

        var iScrollTop = $(window).scrollTop();
        var iScrollStartTop = $('.scroll-start').offset().top;
        
        if(iScrollTop > iScrollStartTop){
        iDifference = iScrollTop - iScrollStartTop;
        iBlur = (iDifference / 40);
        iMargin = (iDifference / 5);

        $('.txt-growth').css('margin-top', iMargin + 'px');
        $('.txt-award').css('margin-left', iMargin + 'px');
        $('.scrollerTwo').css('filter', 'blur(' + iBlur + 'px)');
        }
        

        
    });
}); 
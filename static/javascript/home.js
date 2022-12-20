$(document).ready(function () {
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade-in').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    
    });
    const showAnim = gsap.from('.header', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);
    
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    })
});
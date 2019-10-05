/* Select section in JQuery*/



$(document).ready(function() {
    /*STICKY navigation*/
   $('.js--section-features').waypoint(function(direction){
       if(direction=='down'){
           $('nav').addClass('sticky');
       }else{
           $('nav').removeClass('sticky');
       }
   }, {
    offset: '60px'
   });
    
    /*Scroll on buttons*/
    $('.js--scroll-to-plans').click(function(){
       $('html,body').animate({scrollTop:$('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function(){
       $('html,body').animate({scrollTop:$('.js--section-features').offset().top}, 1000); 
    });
    
    /*NAVIGATIN SCROLL*/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /*ANIMATIONS ON SCROLL*/
    /*fade in FEATURES*/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '65%'
    });
    
    /*pulse the buy menu*/
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated pulse');
    },{
        offset: '65%'
    });
    
    /*insert phone image*/
    $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animated fadeInUp'); 
    },{
        offset: '65%'
    });
    
     /*insert cities*/
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeIn');
    },{
        offset: '65%'
    });
});






/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/



/* Just demo - changes the background color of h2 after it is clicked
$(document).ready(function(){
   $('h2').click(function(){
      $(this).css('background-color','#ff0000') 
   });
    
});

*/
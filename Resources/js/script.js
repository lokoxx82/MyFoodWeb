/* Select section in JQuery*/

$(document).ready(function(){
   $('.js--section-features').waypoint(function(direction){
       if(direction=='down'){
           $('nav').addClass('sticky');
       }else{
           $('nav').removeClass('sticky');
       }
   }, {
    offset: '60px'
   })
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
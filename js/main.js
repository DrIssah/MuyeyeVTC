
jQuery.noConflict()(function ($) { 
// A $( document ).ready() block.
$( document ).ready(function() {
    
   
    animate();
    
    
function animate() {
  var elem = document.getElementById("para");   
  var pos = 0;
  var opac = 1;
  var id = setInterval(frame, 50);
  var paraWidth = $( "#para" ).width();
  var holderWidth = $( "#holder" ).width();
    
  console.log( "Parawidth" + paraWidth);
  function frame() {
    if (pos == 400) {
      clearInterval(id);
      animate();
    } else {
      pos = pos + 1; 
     
      //elem.style.marginLeft  = pos + "px";
      //elem.style.opacity  = opac;
    
      
    }
  }
}
    
    
    
    
});
    
});



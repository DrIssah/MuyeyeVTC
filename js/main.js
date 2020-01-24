
jQuery.noConflict()(function ($) { 
// A $( document ).ready() block.
$( document ).ready(function() {
   
   $("#nav-placeholder").load("navbar.html");
   $("#slideShow").load("slideshow.html");
  $("#sideBar").load("sideBar.html");
    
    $('#Tender').click(function() {
       
         //Tendersdialog
        $("#Tendersdialog").dialog(
            
            { 
              width: 300,
              height: 300,
              modal: true,
              position: { at: "centre top" },
              show:"slideDown",
              hide:{ effect: 'explode', delay: 250, duration: 1000, easing: 'easeInQuad'}
            }
        
        );
         return false;
    });
    
    
});
    
});



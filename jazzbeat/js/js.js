$(document).ready(function(){

$("li > ul").hide();

 $("ul > li").click(function(){
            var current=$(this).children("li > ul");
            $("li > ul").not(current).slideUp(400);
            $(this).children("li > ul").slideToggle(400);
        }
  );



 if ('ontouchstart' in document.documentElement) {
      
      $(document).on("touchstart", function(event) {
        if (!$(event.target).closest("ul > li").length) {
          // Hide the menus.
          $("li > ul").slideUp(300);
        }
      });

    } else {
    	
      $(document).on("click", function(event) {
        if (!$(event.target).closest("ul > li").length) {
          // Hide the menus.
          $("li > ul").slideUp(300);
        }
      });
 	}

              $(window).resize(function() {
              var windowWidth = $(window).width();
              if (windowWidth < 640) {
                  $('nav').hide();
                  $('.mobileNav').show();

              } else {
                  $('nav').show();
                  $('.mobileNav').hide();
              }
              });

              $(window).load(function() {
              var windowWidth = $(window).width();
              if (windowWidth < 640) {
                  $('nav').hide();
                  $('.mobileNav').show();

              } else {
                  $('nav').show();
                  $('.mobileNav').hide();
              }
              });

              
              $('#menuTab').click(function() {
                   $('nav').slideToggle();
              });
              


/*var sw =document.body.clientWidth;
  if (sw < 640) {
    $("nav").hide();
  }
*/
});
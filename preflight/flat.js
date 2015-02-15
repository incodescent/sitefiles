$(document).ready(function(){

$("#menu").hide();
 	 
$(".tag").click(function(){
	$("#menu").slideToggle();
       /*if($(this).text() == "Select"){
           $(this).text("Close");
       } else {
           $(this).text("Select");
       }*/
}); 
 	 
 	$(".roll a").click(function() {
	var url=$(this).attr("href");
	$("#work").load(url + " #work");
	$("#button").load(url + " #next");
	return false;
});

	$("#button").delegate("#next a","click",function() {
	var url=$(this).attr("href");
	$("#work").load(url + " #work");
	$("#button").load(url + " #next");
	return false;
});

if ('ontouchstart' in document.documentElement) {
     
$(document).on('touchstart', function(event) {
      if (!$(event.target).closest('.tag').length) {
        // Hide the menus.
        $("#menu").slideUp(500);
        /*if($(".tag").text() == "Select"){
               $(".tag").text("Close");
           } else {
               $(".tag").text("Select");
           }*/
        }
       });

    } else {
     
$(document).on('click', function(event) {
      if (!$(event.target).closest('.tag').length) {
        // Hide the menus.
        $("#menu").slideUp(500);
        /*if($(".tag").text() == "Select"){
               $(".tag").text("Close");
           } else {
               $(".tag").text("Select");
           }*/
        }
       });

}

    	
 	

});


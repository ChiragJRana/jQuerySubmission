$(document).ready(function(){
$("#descriptionToggle").click(function(){
$("#description").toggle();
$(this).find('img').toggle("slow");
});
$("input:first").focus();
  $("input:first").css("background-color", "cadetblue");
  $('label[for="Seller"]').show();
  $("input, textarea").focus(function(){
  $(this).css("background-color", "cadetblue");
  $('label[for="'+this.id+'"]').fadeTo("fast", 1);
  $(this).attr("placeholder", $(this).attr("rel"));
    $(this).removeAttr("rel");
  });
  $("#Password").focus(function(){
  $("div").show();
  });
  $("*").blur(function(){
  $(this).css("background-color", "white");
  $('label[for="'+this.id+'"]').fadeTo("fast", 0);
  $(this).attr("rel", $(this).attr("placeholder"));
    $(this).removeAttr("placeholder");
  });
  $("#Password").bind('keydown', function(e){
  $("div").html("You presssed: " + e.which);
  });
  $("#Password").blur(function(){
  $("div").html("<br>");
  });
  var words = $( "p" ).text().split( /\s+/ );
var text = words.join( "</span> <span>" );
$( "p" ).first().html( "<span>" + text + "</span>" );
$( "span" ).on( "click", function() {
$( this ).css( "background-color", "red" );
});
  $('p').mouseenter(function() {
  $('p').css("background-color", "#AAAAAA");
  });
  $('p').mouseout(function() {
  $('p').css("background-color", "white");
  });
});
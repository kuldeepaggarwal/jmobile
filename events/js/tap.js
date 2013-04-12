$(function(){
  $("body").bind("tap", function(){
    $("#content").text("You tapped on screen....");
  });
  $("body").bind("taphold", function(e) {
    $("#content").text("You just did a tap hold event!");
  });
  $("body").bind("swipe", function(e) {
    $("#content").text("You just did a swipe event!");
  });
  $("body").bind("swipeleft swiperight", function(e) {
    var page = $.mobile.activePage[0];
    var dir = e.type;
    if(page.id == "first" && dir == "swipeleft")
      $.mobile.changePage("#second");
    if(page.id == "second" && dir == "swiperight")
      $.mobile.changePage("#first");
  });

})
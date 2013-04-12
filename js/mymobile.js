$(document).bind("mobileinit", function() {
  $.mobile.defaultPageTransition = "flip";
  $.mobile.loadingMessage        = "Fetching page...";
})

$(function(){
  $("#isabsurl").keyup(function() {
    var thisVal = $(this).val();
    var isAbsUrl = $.mobile.path.isAbsoluteUrl(thisVal);
    $("#isabsurlresult").text(isAbsUrl);
  });

  $("#isrelurl").keyup(function() {
    var thisVal = $(this).val();
    var isRelUrl = $.mobile.path.isRelativeUrl(thisVal);
    $("#isrelurlresult").text(isRelUrl);
  });

  $("#issamedomain,#issamedomain2").keyup(function() {
    var domainVal1 = $("#issamedomain").val();
    var domainVal2 = $("#issamedomain2").val();
    var isSameDomain = $.mobile.path.isSameDomain(domainVal1,domainVal2);
    $("#issamedomainresult").text(isSameDomain);
  });

  $("#makepath,#makepath2").keyup(function() {
    var pathVal1 = $("#makepath").val();
    var pathVal2 = $("#makepath2").val();
    var makePathResult = $.mobile.path.makePathAbsolute(pathVal1,pathVal2);
    $("#makepathresult").text(makePathResult);
  });

  $("#makeurl,#makeurl2").keyup(function() {
    var urlVal1 = $("#makeurl").val();
    var urlVal2 = $("#makeurl2").val();
    var makeUrlResult = $.mobile.path.makeUrlAbsolute(urlVal1,urlVal2);
    $("#makeurlresult").text(makeUrlResult);
  });

  $("#parseurl").keyup(function() {
    var thisVal = $(this).val();
    var parsedUrl = $.mobile.path.parseUrl(thisVal);
    var s = "";
    for (k in parsedUrl) {
      s+= k+"="+parsedUrl[k]+"<br/>";
    }
    $("#parseurlresult").html(s);
  });
// $("#theList").listview("refresh");
})
// RESET HEAD
$(document).ready(function () {
  $(".resetHead").click(function(){
    $("#coloring").removeAttr("style");
    $(".title").removeAttr("style");
    $("h1").removeAttr("style");
    $("p").removeAttr("style");
  });
});

// RESET STYLE PHOTO
$(document).ready(function () {
  $(".resetStyleImg").click(function(){
    $("img").removeAttr("style");
  });
});

// RESET ALL
$(document).ready(function () {
  $(".reset").click(function(){
    $("#coloring").removeAttr("style");
    $(".title").removeAttr("style");
    $("h1").removeAttr("style");
    $("p").removeAttr("style");
    $("img").removeAttr("style");

  });
});

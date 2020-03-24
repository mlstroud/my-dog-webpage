$(document).ready(function() {
  $("button#toggle-bg").click(function() {

    var bgColor = document.body.className;
  
    switch(bgColor) {
      case "original":
        $("body").removeClass();
        $("body").addClass("dark");
        break;
      case "dark":
        $("body").removeClass();
        $("body").addClass("light");
        break;
      case "light":
        $("body").removeClass();
        $("body").addClass("original");
        break;
    }  
  });

});
//Class Notes
$(document).ready(function() {
    setTimeout(function(){
        var myBox= $("#box");//jQuery();
        myBox.css("background-color", "pink");
    }, 3000);
   
   setTimeout(function(){

    var myBox= $("#box");//jQuery();
        myBox.css("background-color", "green");
    }, 6000);

    var orangeButton= $("#orange-button");
    orangeButton.click(function(){
      $("#box").css("background-color", "orange");
     });
    
     var purpleButton = $("#purple-button");
    purpleButton.click(function(){
      $("#box").css("background-color", "purple");
    });

    $("#yellow-button").click(function(){
        $("#box").css("background-color", "yellow");
        $("body").empty();

    });

});
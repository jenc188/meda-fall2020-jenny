//Class Notes
$(document).ready(function(){
    $("plus").click(function(){
        var firstNumberString = $("#num1").val();
        //console.log(typeof firstNumber);
        var secondNumberString = $("#num2").val();

        var firstNumberConverted = parseInt(firstNumberString);
        var secondNumberConverted = parseInt(secondNumberString);

        if(isNaN(firstNumberCoverted) || isNaN(secondNumberConverted)){
            $("#results").html("Error: One of yur numbers is not a number");
            $("#results").css("color", "yellow");
        }else {
            //console.log(firstNumberConverted);
            var sum = firstNumberConverted + secondNumberConverted;

            $("#results").html(sum);
            $("#results").css("color", "green");
        }
    });
});
   
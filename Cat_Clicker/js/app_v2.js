$(document).ready(function() {
    var counter1 = 0;
    $("#count1").append("<span id='clicks1'>" + counter1.toString() + "</span>").append("!");
    $("#number1").click(function() {
        counter1 += 1;
        $("#clicks1").text(counter1.toString());
    });

    var counter2 = 0;
    $("#count2").append("<span id='clicks2'>" + counter2.toString() + "</span>").append("!");
    $("#number2").click(function() {
        counter2 += 1;
        $("#clicks2").text(counter2.toString());
    });
});

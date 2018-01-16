$(document).ready(function() {
    var counter = 0;
    $("#count").append("<span id='clicks'>" + counter.toString() + "</span>").append("!");
    $("#number1").click(function() {
        counter += 1;
        $("#clicks").text(counter.toString());
    });
});

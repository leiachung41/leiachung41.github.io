var cats = [
    {
        "name": "Doodoo",
        "pic": "img/number1.jpg",
        "clicks": 0
    },
    {
        "name": "Sky",
        "pic": "img/number2.jpg",
        "clicks": 0
    },
    {
        "name": "Roy",
        "pic": "img/number3.jpg",
        "clicks": 0
    },
    {
        "name": "Cona",
        "pic": "img/number4.jpg",
        "clicks": 0
    },
    {
        "name": "Pong",
        "pic": "img/number5.jpg",
        "clicks": 0
    }
];

function createCatList() {
    var toAppend = "";
    $.each(cats, function(catIndex, cat) {
        toAppend += "<li class='cat'><button class='btn'>" + cat.name + "</button></li>"
    });
    $("#list").append("<ul class='list'>" + toAppend + "</ul>");
}

function displayCat(id) {
    $("#display").empty();
    cat = cats[id];

    var toDisplay = "<div><img src='" + cat.pic + "' class='clickable'/>"
        + "<h3 class='name'>My name is " + cat.name + ".</h3><h3 id='"
        + id.toString() + "' class='count'>You've clicked " + cat.clicks.toString() + ".</h3></div>";

    $("#display").append(toDisplay);

    $(".clickable").click(function(object) {
        var elem = object.target.parentElement.childNodes[2];
        cats[elem.id].clicks += 1;
        $("#" + elem.id).text(cats[elem.id].clicks).prepend("You've clicked ").append(".");
    });
}

$(document).ready(function() {
    createCatList();
    $(".cat").click(function(obj) {
        id = cats.indexOf(cats.filter(function(a) {
            return a.name == obj.target.innerHTML; }) [0]);
        displayCat(id);
    });
});

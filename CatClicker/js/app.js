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
		toAppend += "<li class='cat list-group-item'>" + cat.name + "</li>";
	});
	$("#list").append("<ul class='list-group'>" + toAppend + "</ul>");
}

function displayCat(id) {
	$("#display").empty();
	cat = cats[id];
	var toDisplay = "<div class='container'><div class='name'>" + cat.name
        + "</div><img src='" + cat.pic + "' class='clickable'/><div id='"
        + id.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div>";
	$("#display").append(toDisplay);
	$(".clickable").click(function(object) {
		var elem = object.target.parentElement.childNodes[2];
		cats[elem.id].clicks += 1;
		$("#" + elem.id).text(cats[elem.id].clicks);
	});
}

$(document).ready(function() {
	createCatList();
	$(".cat").click(function(obj) {
		id = cats.indexOf(cats.filter(function(a){ return a.name == obj.target.innerHTML; })[0]);
		displayCat(id);
	});
});

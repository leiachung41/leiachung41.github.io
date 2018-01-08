/* ======= Model ======= */
var model = {
    currentCat: null,
    cats: [
        {
            "clickCount": 0,
            "name": "DooDoo",
            "image": "img/number1.jpg"
        },
        {
            "clickCount": 0,
            "name": "Sky",
            "image": "img/number2.jpg"
        },
        {
            "clickCount": 0,
            "name": "Roy",
            "image": "img/number3.jpg"
        },
        {
            "clickCount": 0,
            "name": "Cona",
            "image": "img/number4.jpg"
        },
        {
            "clickCount": 0,
            "name": "Pong",
            "image": "img/number5.jpg"
        },
        {
            "clickCount": 0,
            "name": "Nora",
            "image": "img/number6.jpg"
        }
    ]
};

/* ======= Octopus ======= */
var octopus = {

    init: function() {
        // setting the current cat with the first cat in the list
        model.currentCat = model.cats[0];

        // initializing the views
        catListView.init();
        catDisplayView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catDisplayView.render();
    }
};

/* ======= View ======= */
var catListView = {

    init: function() {
        // ?** store the DOM element for easy access later
        this.catListElem = document.getElementById('catList');
        // rendering this
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop for cat count
        for (i=0; i<cats.length; i++) {
            // ?** this is the cat we're currently looping over
            cat = cats[i];
            // ?** make a new cat list item and set its text
            elem = document.createElement('li');
            elem.id = "cat" + i;
            elem.textContent = cat.name;

            // ?** on click, setCurrentCat and render the catView
            // ?** (this uses our closure-in-a-loop trick to connect the value
            // ?** of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catDisplayView.render();
                };
            })(cat));

            // ?** finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

var catDisplayView = {

    init: function() {
        // ?** store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('catName');
        this.catImageElem = document. getElementById('catImage');
        this.catCountElem = document.getElementById('catCount');

        // ?** on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function() {
            octopus.incrementCounter();
        });

        // rendering this
        this.render();
    },

    render: function() {
        // ?** update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.catImageElem.src = currentCat.image;
        this.catNameElem.textContent = 'Name: ' + currentCat.name;
        this.catCountElem.textContent = 'Clicks: ' + currentCat.clickCount;
    }
};

octopus.init();

// **************************************** The Enemy *****
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    /* Setting the Enemy initial location.
    Setting the Enemy speed. */
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 250) + 100);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    /* Updates the Enemy location.
    Handles collision with the Player. */
    this.x += this.speed * dt;

    if (this.x >= 505) { /* canvas.width = 505 */
        this.x = 0;
        this.speed = Math.floor((Math.random() * 100) + 50);
    }

    /* Handling collision with the enemies. */
    if( player.x >= this.x -50 && player.x <=this.x + 50 ){
        if( player.y >= this.y -50 && player.y <=  this.y+50 ){
            player.x = 200;
            player.y = 400;
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// **************************************** The Player *****
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-cat-girl.png';

    /* Setting the Player initial location. */
    this.x = 200;
    this.y = 400;
    this.speed = speed;
};

/* The update method for the Player. */
Player.prototype.update = function(dt) {
    /* Similar to the one for the Enemy. */
    if (this.y >= 605) { /* canvas.height = 606 */
        this.reset();
    }
};

/* The render method for the Player. */
Player.prototype.render = function() {
    /* Use the code from the rener method for the Enemy. */
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/* The handleInput method, which should receive
user input, allowedKeys (the key which was pressed)
and move the player according to that input. */
Player.prototype.handleInput = function(keyPress) {
    /* Left key should move the player to the left,
    right key to the right , up should move the player up
    and down should move the player down.*/
    /* Recall that the player cannot move off screen. */
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 90;
    }
    if (keyPress == 'right' && this.x < 400) {
        this.x += 100;
    }
    if (keyPress == 'down' && this.y < 400) {
        this.y += 90;
    }
    console.log('keyPress is: ' + keyPress);

    /* If the player reaches the water, the game should be reset
    by moving the player back to the initial location. */
    if (this.y < 0) {
        this.reset();
    }
};

/* Reset player to beginning position */
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/* Creating sevreal new Enemies objects and placing them
in an array called allenemies. */
var allEnemies = [
    new Enemy(-100, 115),
    new Enemy(-200, 25),
    new Enemy(-100, 70),
    new Enemy(-80, 190),
    new Enemy(-50, 200)
];

/* Creating a new Player object */
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

# Classic Arcade Game Clone
In this project, I've built my own arcade game like Frogger Game.

## Frogger Game Description
In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies.

## How to build?
I didn't build the game from scratch. I've provided the art assets and game engine
[here](https://github.com/udacity/frontend-nanodegree-arcade-game). This repository contains css, images, and js folders, as well as an index.html and a README.md file. I've edited the app.js file to build the game.

## What I build?
- The Enemy function:
  - Setting the Enemy initial location.
  - Setting the Enemy speed.
- The update method for the Enemy:
  - Updates the Enemy location.
  - Handles collision with the Player.
- The Player function:
  - Setting the Player initial location.
- The update method for the Player.
- The render method for the Player.
- The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
  - Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
  - Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
  - If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
- Creating a new Player object.
- Creating several new Enemies objects and placing them in an array called allEnemies.

## How to run?
Click on index.html and enjoy the app!

## How to play?
- The player can move:
  - Up: Press the keyboard ↑
  - Down: Press the keyboard ↓
  - Right: Press the keyboard →
  - Left: Press the keyboard ←
- The enemies move in varying speeds on the paved block portion of the scene.
- Once the player collides with Enemies (Bugs), the game is reset and the player moves back to the start square.
- Once the player reaches the water, the game is won.

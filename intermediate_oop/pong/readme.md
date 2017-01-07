# Pong

In this directory you will find a working game of pong.  Your task is to the the following:

### Understand the Code

Before you do anything, try to understand what the code is doing and how it works.  You should understand what the job of each class is.  Here is an overview:

* Velocity - just an x and y velocity that gets added to the position every frame
* CanvasComponent - has a velocity, position, height, and width.  Represents an object in the canvas.  This object should stay dumb and not have any context specific code
* Ball - has a CanvasComponent and is responsible for keeping it self within the canvas by doing bounds checking
* Paddle - An object on the page that can move up and down only.  Responds to keys to move up and down.  Checks for collisions with a ball.
* Pong - A class to represent the game.  Creates the paddles and a ball.  Also draws the dashes down the middle of the screen.
* main.js - Responsible for creating an instance of pong and starting it.

### Improve the Code

Here are some projects to work on in the code base:

1. Do not let the paddles slide off of the page
2. Add a visual indication of the score
3. Display a winner when the score gets to 10.
4. Make a smarter collision detection with the ball and paddle so that the ball has different accelerations depending on the angle of paddle to ball.
5. Add a second ball
// ================================================
// JavaScript Canvas Challenges
// ================================================

// Challenge 1: Set up your canvas
// Look for your <canvas> element to your html file, with id "myCanvas". See it?
// Change the size of the canvas to width = 500 and height = 400.
// In styles.css, give it a "gray" border of 5 pixels.

// No javascript for challenge 1.


// Challenge 2: Draw a rectangle
// Draw a filled rectangle at x=30, y=30 with width=100, height=50
// Fill it with the color "#EA9A4A"!

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

//draw a filled rect
pencil.fillStyle = "#EA9A4A";     // color to fill the rectangle
pencil.fillRect(30, 30, 100, 50); // x, y, width, height



// -----------------------------------------------


// Challenge 3: Draw an outlined rectangle
// Draw a rectangle outline at x=150, y=30 with width=200, height=250
// Make the outline color a nice red, and give it a thickness of 20 pixels.
// Careful! If you do it in the wrong order, you'll get...the default style...

pencil.strokeStyle = "#a33d3dff";
pencil.lineWidth = 20;
pencil.strokeRect(150, 30, 200, 250); //x, y, width, height again





// -----------------------------------------------

// Challenge 4: Draw a circle
// Draw a circle at x=100, y=150 with radius 40
// Fill it with a minty green color, for freshness.

pencil.beginPath(); //begin your path
pencil.arc(100, 150, 40, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
pencil.fillStyle = "#93dbbcff";
pencil.fill();
pencil.closePath();




// -----------------------------------------------

// Challenge 5: Draw a line
// Draw a line from top-left (0,0) to bottom-right (canvas width, canvas height)
// Make it purple and 3 pixels thick.


// Start a new path
pencil.beginPath();

// Move the "pencil" to the starting point (x=50, y=50)
pencil.moveTo(0, 0);

// Draw a line to one point (x=500, y=400)
pencil.lineTo(500, 400);

// Add some style!
pencil.strokeStyle = "purple";
pencil.lineWidth = 3;

// Render the line on the canvas!
pencil.stroke();




// -----------------------------------------------

// Challenge 6: Draw a triangle
// Draw a filled triangle with points at (200,150), (250,250), and (150,250)
// Fill it with a calming pink color!


// Start a new shape
pencil.beginPath();

// Move to the first point
pencil.moveTo(200, 150);

// Draw lines to additional points
pencil.lineTo(250, 250);
pencil.lineTo(150, 250);

pencil.fillStyle = "#ffc5f8ff";
pencil.fill();

// Close the path (connects last point to first)
pencil.closePath();




// -----------------------------------------------


// Challenge 7: We didn't teach this!
// Add a title to your picture, INSIDE the canvas (not using HTML)
// Use this website to figure it out:
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
// Ready, go!

pencil.fillStyle = "#5f6d1bff";
pencil.font = "48px serif";
pencil.fillText("Bananas Bunched", 10, 370);



// -----------------------------------------------

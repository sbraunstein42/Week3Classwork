// -----------------------------------------------
// JavaScript Event Listener Challenges
// -----------------------------------------------
// In each challenge, follow the instructions in the comments.
// Run your code in the browser to see what happens!

// -----------------------------------------------
// Challenge 1: Click to Log
// Use getElementById to find a button in your HTML with the id "logButton".
// Add a "click" event listener that logs "Button clicked!" to the console.

let logButton = document.getElementById("logButton");
logButton.addEventListener("click", tellTheWorld)

function tellTheWorld() {
    console.log("Button clicked!");
}


// -----------------------------------------------
// Challenge 2: Swap an image
// Use getElementById to find an IMAGE in your HTML with the id "swappedImage".
// Change it to a different image in the "img" folder,
// by modifying the src attribute.

let imageElement = document.getElementById("swappedImage");
imageElement.src = "img/jumpman.png";


// -----------------------------------------------
// Challenge 3: Page Ready Message
// Add an event listener to the window for "DOMContentLoaded".
// When the event fires, log "The page has loaded!" to the console.

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("The page has loaded!");
});

// -----------------------------------------------
// Challenge 4: Input Mirror
// Get the input element in your index file.
// Add an event listener for the "input" event.
// Whenever the user types, console.log the current value of the input.
// Hint -- when you listen for an input event, you get a lot of data --
// Check out event.target.value!

let input = document.getElementById("mirrorBox");
input.addEventListener("input", onGotInput);
function onGotInput(event) {
    console.log(event.target.value);
}

// -----------------------------------------------
// Challenge 5: Change the Text
// Find a paragraph in your HTML with id "changeMe".
// Find a button with the id "changeButton".
// When the button is clicked, change the paragraph's innerHTML to say "Text changed!".

let changedText = document.getElementById("changeMe");
let changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", onClickedChangeButton)
function onClickedChangeButton() {
    changedText.innerHTML = "<p> Text changed! </p>";
}



// -----------------------------------------------
// Challenge 6: Add and Remove Listener
// Create a button with id "greetButton".
// Create a function called greet that logs "Hello!" to the console.
// Add a click event listener to the button using greet.
// Then, after 3 clicks, remove the event listener so it no longer logs anything.
// (Hint: you may need a counter variable to track how many times the button was clicked.)

let button = document.getElementById("greetButton");
let clickCount = 0;

function greet() {
    console.log("Hello!");
    clickCount++;
    if (clickCount >= 3) {
        button.removeEventListener("click", greet);
    }
}

button.addEventListener("click", greet);

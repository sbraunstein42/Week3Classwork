// ================================================
// JavaScript Object Challenges
// ================================================

// Challenge 1: Make Your First Object
// Create an object called car with three properties:
// brand, model, and year. Give them any values you like.
// Log the whole object, then log just the brand.

// Your code here:
let car = {
    brand : "Toyota",
    model : "Batmobile",
    year : 1999
}
console.log(car.brand);

// -----------------------------------------------

// Challenge 2: Change a Property
// Using your car object from Challenge 1, change the year to a newer one.
// Then log a message like "My car is now a 2023 Toyota!"

// Your code here:
car.year = 2000;
console.log("My car is now a " + car.year + " " + car.brand + " " + car.model);


// -----------------------------------------------

// Challenge 3: Add a New Property
// Add a new property called color to your car object.
// Then log "My car is [color]" using the color you added.

// Your code here:
car.color = "black";
console.log("My car is " + car.color);


// -----------------------------------------------

// Challenge 4: Nested Object
// Create an object called students with two student objects inside.
// Both students should have a grade for math and art.
// Log each student's art score.

// Your code here:
let students = {
    jimmy : {
        math : "A+",
        art : "F"
    },
    sova : {
        math : "C",
        art : "A-"
    }
}

console.log(students.jimmy.art);
console.log(students.sova.art);


// -----------------------------------------------

// Challenge 5: Combining Objects and Functions
// Create an object called player with properties: name and score.
// Add a function called addPoints(points) inside the object
// that increases player.score by the number given and logs the new score.
// Call addPoints() a few times to test it.

// Your code here:
let player = {
    name : "Stu",
    score : 66
}

player.addPoints = function(points) {
    player.score += points;
    console.log(player.name + " has " + player.score);
}

player.addPoints(3);
player.addPoints(-5);



// ================================================
// End of Object Challenges
// ================================================

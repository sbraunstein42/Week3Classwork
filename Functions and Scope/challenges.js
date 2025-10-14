// ================================================
// JavaScript Function and Scope Challenges
// ================================================

// Challenge 1: Making and Calling a Function
// Create a function called sayHello that logs "Hello World!" to the console.
// Then call the function three times to make sure it runs.

// Your code here:
function sayHello() {
    console.log("Hello world!");
}
sayHello();
sayHello();
sayHello();


// -----------------------------------------------

// Challenge 2: Using Parameters
// Create a function called greetPerson that takes one parameter, name.
// It should log "Hello" followed by the name passed in.
// Call it at least twice with different names to test it.

// Your code here:
function greetPerson(name) {
    console.log("Hello " + name);
}
greetPerson("Captain");
greetPerson("Moto");


// -----------------------------------------------

// Challenge 3: Returning Data
// Create a function called addTwoNumbers that takes two parameters,
// adds them together, and returns the result.
// Store that result in a variable called sum, then log it to the console.

// Your code here:
function addTwoNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
}
addTwoNumbers(42, 25);
addTwoNumbers(100, -99);



// -----------------------------------------------
// Challenge 4: Fix the bug with let and var.
// The below code is supposed to not have any name, if setName == "no".
// Why doesn't it work? Find the reason and fix it!
// for some reason. There is a good way and a bad way to fix this. Can you find them?

let setName = "no";

if(setName == "yes") {
    myName = "Finn The Human";
}

console.log(myName)
function buySword() {
}

buySword();
buyHat();
console.log(gold) // <-- this should print 0, right?

// ^ Fix the above code!






// -----------------------------------------------
// Challenge 5: Make a series of functions which can sing the song 
// "Old Mcdonald had a farm" to the console as efficiently as possible. 
// It should use parameters, and at the end it should tell us how many animals 
// were in the song based on the previous functions called. Here is an 
// example of one stanza:

/*
    Old MacDonald had a farm
    Ee, i, ee, i, o
    And on his farm he had some cows
    Ee, i, ee, i, o
    With a moo-moo here and a moo-moo there
    Here a moo, there a moo, everywhere a moo-moo
*/

// Your code here:

let vowels = "Ee, i, ee, i, o";
let animalCount = 0;

function singVowels() {
    console.log("Ee, i, ee, i, o");
}

function singIntro() {
    console.log("Old McDonald had a farm");
    singVowels();
}

function singFarm(animalPlural, sound) {
    animalCount++;

    let doubleSound = sound + "-" + sound;

    console.log("And on his farm he had some " + animalPlural);
    singVowels();
    console.log("With a " + doubleSound + " here and a " + doubleSound + " there");
    console.log("Here a " + sound + ", there a " + sound + ", everywhere a " + doubleSound)
}

singIntro();
singFarm("cows", "moo");
singIntro();
singFarm("cats", "meow");
singIntro();
singFarm("babies", "whaa");
console.log("Sang the song with " + animalCount + " animals!");





// ================================================
// End of Function and Scope Challenges
// ================================================

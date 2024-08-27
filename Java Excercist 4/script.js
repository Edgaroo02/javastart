
/* The below prompts you to enter details */

let name = prompt("Please enter your name.");
// Below is a conditional to see if data has been entered
if (name) {
    console.log(name);
} else {
console.log("You didn't enter your name.")
}

let age = prompt("What is your age"); // This second prompt collects data on age to the console log

var localVar = age; // age is set as local var whose value will be determined later

function myFunction() {
 console.log(localVar);
}   // sets myFunction to display localVar (age) once function is run

myFunction();   // Function is run here

if (localVar >=18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor"); 
}
/* The above displays the result of age as assigned value to localVar, 
displaying different text depending on above or below the age of 18 */






// place below data on html through div with id# "mealList" and order this alphabetically

const list = [
    "Carbonara",
    "Bangers & Mash", 
    "Stir-Fry", 
    "Bacon Lasagna", 
    "Steak & Fries", 
    "Roasted Cauliflower"];

    list.sort();    // Sort listalphabetically

let text = "";  // needed to allow items to stack vertically

for (let i = 0; i < list.length; i++) {
    text = text + list[i] + "<br>";
}   // add <br> to seperate elements on seperate lines

document.getElementById("mealList").innerHTML = text;   // connects data to div with id="mealList"



/*
// How to list on page
var stuff = new Array('hotdog', 'sandwich', 'meatloaf', 'cauliflower', 'bacon')
stuff.sort(); // sort in alphabetical order

// use of document.write can mess up html display so should be avoided
for(i=0; i < stuff.length; i++) {
    document.write(stuff[i] + "<br/>");
}
*/


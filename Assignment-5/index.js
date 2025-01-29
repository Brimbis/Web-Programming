/*
console.log("Hello World!");
console.log("The answer is " + 42);

alert("Message!");
*/
// Single line comment
/* Variables
    Variables are dynamic, meaning they are allocated according to the value assigned. */

const { StatementSync } = require("node:sqlite");

let level = 23; // Integer
let accuracy = 0.99; // Float or Double
let character = "Pikachu"; // String
let temps = [55, 60, 57, 5]; // Array

let isValid = "hello!";

const BEST_CLASS = "CS3163"; // Variable cannot be changed once declared.

let credit = 5 + 4 + (2 * 3);

let names = "Brandon Hurt";
let fName = names.substring(0, names.indexOf(" "));
let len = fName.length;

console.log("First Name: " + fName + " Length: " + len);

function mystery(a, b) {
    if (a > b) {
        return 0;
    }
    else {
        let result = 0;

        for (let i = 0; i <= b; i++) {
            result += 1;
        }

        return result;
    }
}

console.log(mystery(4, 6));

while (condition) {
    console.log("while loop");
}

// Runs statement once before checking condition;
do {
    statement;
} while(condition);

let values = ["Earth", "Water", "Wind", "Fire"];
let array = [];
values[0] = "Hello";
values[2] = "My";

values.push("Brandon"); // Inserts at end of Array.
values.unshift("Bowser"); // Inserts at beginning of Array.
values.pop(); // Removes the last element in the Array.
values.shift(); // Removes the first element in the Array.
values.sort(); // Sort all the elements in the array

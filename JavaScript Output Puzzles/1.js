// Guess the Output

function abc() {
    console.log(abc.xyz); // Logs the current value of abc.xyz
}
abc();            // First call: undefined (abc.xyz is not defined yet)
abc.xyz = 400;    // Setting the property xyz on the function object
abc.xyz = 500;    // Updating the property xyz on the function object
abc();            // Second call: 500 (abc.xyz now has a value of 500)


// ........................................................................... //

const numbers = [1, 2, 3, 4, 5];
numbers[100] = 500;
console.log(numbers); 
// Output: [1, 2, 3, 4, 5, <empty items>, 500]
// It is valid, and we get empty items (from the 6th to 99th position), 
// with 500 at the 100th position.

// ........................................................................... //

console.log(typeof typeof 100); // Output: string
// Explanation: `typeof 100` returns "number", and `typeof "number"` returns "string".

// ........................................................................... //

const arr = [..."gowtham"]; // Spread operator getting all characters from the string "gowtham"
console.log(arr); 
// Output: ["g", "o", "w", "t", "h", "a", "m"]

// ........................................................................... //

console.log(parseInt("10 + 2")); // Output: 10
console.log(parseInt("7FM"));    // Output: 7
console.log(parseInt("M7F"));    // Output: NaN
// Explanation: parseInt processes a string from left to right, 
// stopping at the first character that is not part of a valid number.
// If the string starts with a non-numeric character (and is not a valid prefix like "+" or "-"), parseInt returns NaN.

// ........................................................................... //

console.log(isNaN("gowtham")); // Output: true
// Explanation: "gowtham" is not a number, so isNaN returns true.

// ........................................................................... //

console.log([1, 2, 3].map(num => {
    if (num > 0) return; // All values in the array are greater than 0, so they return undefined.
    return num * 2;      
}));
// Output: [undefined, undefined, undefined]
// Explanation: The `return` statement inside the map callback does not execute for numbers greater than 0, 
// resulting in an array of `undefined` values.

// ........................................................................... //

function test() {
    return;
}
console.log(test());  // Output: undefined
// Explanation: The function test does not return any value, so it returns `undefined` by default.

// ........................................................................... //

{
    function abcd() {
        console.log("gowtham");
    }
}
abcd(); // Output: gowtham
// Explanation: The function abcd is declared inside a block and is accessible from the global scope.

// ........................................................................... //

function ab(a, b) {
    'use strict';
    a = 100;
    b = 200;
    return arguments[0] + arguments[1]; // After return, nothing will execute
    console.log(a + b); // This line will not be executed
}
console.log(ab(3, 2)); // Output: 5
// Explanation: The `arguments` object does not reflect changes made to the parameters `a` and `b` in strict mode. 
// Therefore, `arguments[0]` and `arguments[1]` are still 3 and 2 respectively, resulting in 5.

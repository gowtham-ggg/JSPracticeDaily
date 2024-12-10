// Example 1: Finding a number greater than 10
const numbers = [4, 9, 16, 25, 29];
const firstNumber = numbers.find((num) => num > 10);
console.log("First number greater than 10:", firstNumber); // Output: 16

// Example 2: Finding an object in an array
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find((user) => user.id === 2);
console.log("User with ID 2:", user); // Output: { id: 2, name: "Bob" }

// Example 3: No match
const fruits = ["apple", "banana", "cherry"];
const fruit = fruits.find((f) => f === "grape");
console.log("Fruit found:", fruit); // Output: undefined


/* 
Returns: The first element that matches the condition, or undefined if no elements match. 
i.e., when the condition is satisfied, it immediately returns that element and stops execution; it does not proceed to check the remaining elements. 
*/

const arr = [ 2, 100, 200, 1,5,3];
let longestNum = arr.find((num)=> num > 1);
console.log(longestNum); //2

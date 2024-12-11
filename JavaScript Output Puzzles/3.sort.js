/* JavaScript sort() Method Examples */

/* 
The sort() method in JavaScript is mutable. It sorts the elements of an array in place,
modifying the original array rather than creating a new one.
*/

// Example 1: Sorting Numbers
const numbers = [34, 7, 23, 32, 5, 62];

// Ascending order
numbers.sort((a, b) => a - b); 
console.log("Numbers in Ascending Order:", numbers); // [5, 7, 23, 32, 34, 62]

// Descending order
numbers.sort((a, b) => b - a);
console.log("Numbers in Descending Order:", numbers); // [62, 34, 32, 23, 7, 5]


// Example 2: Sorting Strings
const fruits = ["banana", "apple", "orange", "mango"];

// Alphabetical order
fruits.sort();
console.log("Fruits in Alphabetical Order:", fruits); // ["apple", "banana", "mango", "orange"]

// Reverse alphabetical order
fruits.sort((a, b) => b.localeCompare(a));
console.log("Fruits in Reverse Alphabetical Order:", fruits); // ["orange", "mango", "banana", "apple"]


// Example 3: Sorting Objects by Property
const people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 }
];

// Sort by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log("People Sorted by Age (Ascending):", people);
// [
//   { name: "Bob", age: 22 },
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 }
// ]

// Sort by name (alphabetical)
people.sort((a, b) => a.name.localeCompare(b.name));
console.log("People Sorted by Name (Alphabetical):", people);
// [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 22 },
//   { name: "John", age: 25 }
// ]


// Example 4: Sorting Mixed Case Strings
const mixedCase = ["Banana", "apple", "Orange", "mango"];

// Case-insensitive sort
mixedCase.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Mixed Case Strings Sorted (Case-Insensitive):", mixedCase); 
// ["apple", "Banana", "mango", "Orange"]


// Example 5: Sorting with a Custom Order
const priorities = ["medium", "low", "high", "medium", "high"];
const order = { high: 1, medium: 2, low: 3 };

// Sort by custom priority order
priorities.sort((a, b) => order[a] - order[b]);
console.log("Priorities Sorted by Custom Order:", priorities); 
// ["high", "high", "medium", "medium", "low"]

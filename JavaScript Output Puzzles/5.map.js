// Example 1: Using map() to create a new array of booleans based on a condition
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.map((num) => num > 4);
console.log(newArr);  
// Output: [false, false, false, false, true, true, true, true]

// ....................................................................... //

// Example 2: Doubling Each Number in an Array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); 
// Output: [2, 4, 6, 8, 10]

// ....................................................................... //

// Example 3: Extracting a Specific Property from an Array of Objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const userNames = users.map(user => user.name);
console.log(userNames); 
// Output: ["Alice", "Bob", "Charlie"]

// ....................................................................... //

// Example 4: Converting Strings to Uppercase
const words = ["apple", "banana", "cherry"];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords); 
// Output: ["APPLE", "BANANA", "CHERRY"]

// ....................................................................... //

// Example 5: Adding an Index to Each Element
const numbersList = [10, 20, 30];
const indexedNumbers = numbersList.map((num, index) => `${index}: ${num}`);
console.log(indexedNumbers); 
// Output: ["0: 10", "1: 20", "2: 30"]

// ....................................................................... //

// Example 6: Mapping an Array of Numbers to Their Squares
const numArray = [1, 2, 3, 4, 5];
const squares = numArray.map(num => num ** 2);
console.log(squares); 
// Output: [1, 4, 9, 16, 25]

// ....................................................................... //

// Example 7: Adding a Property to Each Object in an Array
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 600 }
];

const productsWithTax = products.map(product => ({
  ...product,
  priceWithTax: product.price * 1.1
}));

console.log(productsWithTax);
// Output:
// [
//   { name: "Laptop", price: 1000, priceWithTax: 1100 },
//   { name: "Phone", price: 600, priceWithTax: 660 }
// ]

// ....................................................................... //

/* 
`map()` creates a new array with the results of applying a function to each element.
- It does not modify the original array.
- It is useful when you need to transform or manipulate the data in an array.
*/

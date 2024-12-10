const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]



const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ];
  
  const adults = people.filter(person => person.age >= 30);
  console.log(adults);
  // Output: 
  // [
  //   { name: "Bob", age: 30 },
  //   { name: "Charlie", age: 35 },
  //   { name: "David", age: 40 }
  // ]
  

const mixedArray = [1, null, "hello", undefined, 42, NaN];
const filteredArray = mixedArray.filter(element => element != null && !Number.isNaN(element));
console.log(filteredArray); // Output: [1, "hello", 42]

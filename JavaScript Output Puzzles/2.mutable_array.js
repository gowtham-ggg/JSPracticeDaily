
//mutable array examble

let arr1 = ["apple", "orange", "lemon"];
console.log("Initial array:", arr1);

// Using shift() to remove the first element
let shiftedElement = arr1.shift();
console.log("After shift():", arr1); // ["orange", "lemon"]
console.log("Removed element:", shiftedElement); // "apple"

// Using unshift() to add elements at the beginning
arr1.unshift("potato", "banana");
console.log("After unshift():", arr1); // ["potato", "banana", "orange", "lemon"]



//.......................................................................................//
/*
----------Key Points About `slice()` and `splice()`:--------------

1. slice():
   - Used to create a shallow copy of a portion of an array.
   - Does **not** modify the original array.
   - Takes two arguments:
     - Start index (inclusive).
     - End index (exclusive).

2. splice():
   - Used to modify an array by adding or removing elements.
   - Modifies the original array.
   - Takes three arguments:
     - Start index.
     - Number of elements to remove.
     - (Optional) Elements to add.

*/

//slice

let fruits = ["apple", "orange", "lemon", "banana", "grape"];
console.log("Original array:", fruits);

// Using slice() to get a portion of the array
let slicedFruits = fruits.slice(1, 4); // From index 1 to 3 (4 is exclusive)
console.log("Sliced array:", slicedFruits); // ["orange", "lemon", "banana"]
console.log("Array after slice():", fruits); // ["apple", "orange", "lemon", "banana", "grape"] (unchanged)


//splice
let veggies = ["carrot", "potato", "cucumber", "spinach"];
console.log("Original array:", veggies);

// Using splice() to remove elements
let removedVeggies = veggies.splice(1, 2); // Remove 2 elements starting from index 1
console.log("Removed elements:", removedVeggies); // ["potato", "cucumber"]
console.log("Array after splice():", veggies); // ["carrot", "spinach"]

// Using splice() to add elements
veggies.splice(1,0, "broccoli", "pepper"); // Add "broccoli" and "pepper" at index 1
console.log("Array after adding elements:", veggies); // ["carrot", "broccoli", "pepper", "spinach"]

/*
                        Summary of Differences:
| Feature           | slice()                         | splice()                     |
|-------------------|---------------------------------|------------------------------|
| Purpose           | Extracts a portion of the array | Modifies the array           |
| Modifies Array    | No                              | Yes                          |
| Returns           | A new array                     | Removed elements as an array |

*/

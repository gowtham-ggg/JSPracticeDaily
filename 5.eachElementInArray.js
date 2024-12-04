/*  
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 
*/


/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var map = function(arr, fn) {
    // Create an empty array to store the results
    let result = [];
    
    // Iterate over the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the mapping function and store the result
        result.push(fn(arr[i], i));
    }
    
    // Return the new array with transformed values
    return result;
};

// Example 1:
let arr1 = [1, 2, 3];
let fn1 = function plusone(n) { return n + 1; };
console.log(map(arr1, fn1)); // Output: [2, 3, 4]

// Example 2:
let arr2 = [1, 2, 3];
let fn2 = function plusI(n, i) { return n + i; };
console.log(map(arr2, fn2)); // Output: [1, 3, 5]

// Example 3:
let arr3 = [10, 20, 30];
let fn3 = function constant() { return 42; };
console.log(map(arr3, fn3)); // Output: [42, 42, 42]

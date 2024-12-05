/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
*/


/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var filter = function(arr, fn) {
    // Initialize an empty array to store the filtered results
    let filteredArr = [];
    
    // Iterate through the input array arr
    for (let i = 0; i < arr.length; i++) {
        // Apply the filtering function fn to each element and its index
        if (fn(arr[i], i)) {
            // If fn returns a truthy value, push the element to filteredArr
            filteredArr.push(arr[i]);
        }
    }
    
    // Return the filtered array
    return filteredArr;
};

// Example 1:
let arr1 = [0, 10, 20, 30];
let fn1 = function greaterThan10(n) { return n > 10; };
console.log(filter(arr1, fn1)); // Output: [20, 30]

// Example 2:
let arr2 = [1, 2, 3];
let fn2 = function firstIndex(n, i) { return i === 0; };
console.log(filter(arr2, fn2)); // Output: [1]

// Example 3:
let arr3 = [-2, -1, 0, 1, 2];
let fn3 = function plusOne(n) { return n + 1; };
console.log(filter(arr3, fn3)); // Output: [-2, 0, 1, 2]

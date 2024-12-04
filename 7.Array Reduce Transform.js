/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

 

Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.


*/
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Initialize the accumulator with the initial value
    let result = init;

    // Iterate through the array and apply the reducer function
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    // Return the final result
    return result;
};

// Example Usage:

// Example 1
const nums1 = [1, 2, 3, 4];
const fn1 = (accum, curr) => accum + curr;
const init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

// Example 2
const nums2 = [1, 2, 3, 4];
const fn2 = (accum, curr) => accum + curr * curr;
const init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

// Example 3
const nums3 = [];
const fn3 = (accum, curr) => accum + curr;
const init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25

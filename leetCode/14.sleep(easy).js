/*
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 
*/

/**
 * @param {number} millis
 * @return {Promise<void>}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); // Output: ~100
});

let t1 = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t1); // Output: ~200
});

async function test() {
    let t3 = Date.now();
    await sleep(150);
    console.log(Date.now() - t3); // Output: ~150
}
test();

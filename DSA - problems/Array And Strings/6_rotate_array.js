// 6. Rotate an array to the right by K positions. 

function rotateArrayExtraSpace(nums, k) {
    let N = nums.length;
    k = k % N; // Handle cases where k > N
    let rotated = new Array(N);

    for (let i = 0; i < N; i++) {
        rotated[(i + k) % N] = nums[i]; // Shift elements
    }

    return rotated;
}

// Example test cases
console.log(rotateArrayExtraSpace([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArrayExtraSpace([-1, -100, 3, 99], 2)); // Output: [3, 99, -1, -100]


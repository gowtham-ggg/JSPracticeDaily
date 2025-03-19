function findMissingNumberXOR(arr, N) {
    let xor1 = 0, xor2 = 0;

    // XOR all numbers from 1 to N
    for (let i = 1; i <= N; i++) {
        xor1 ^= i;
    }

    // XOR all elements in the array
    for (let num of arr) {
        xor2 ^= num;
    }

    // XOR result gives the missing number
    return xor1 ^ xor2;
}

// Example test cases
console.log(`Missing number: ${findMissingNumberXOR([1, 2, 4, 5, 6], 6)}`); // Output: 3
console.log(`Missing number: ${findMissingNumberXOR([1, 3, 4, 5], 5)}`); // Output: 2


//find all missing number N

function findAll(arr, N){
    let missingNum = []
    let numSet = new Set(arr)

    for(let i=0; i<= N; i++){
        if(!numSet.has(i)){
            missingNum.push(i)
        }
    }
    return missingNum
}

console.log(findAll([1,2,3,5,7,8,9,18,19],20)); 

/* 
[
   0,  4,  6, 10, 11, 12,
  13, 14, 15, 16, 17, 19,
  20
]
*/ 
 
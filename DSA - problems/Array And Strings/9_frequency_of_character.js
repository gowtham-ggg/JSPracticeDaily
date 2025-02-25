function countCharacterFrequency(str) {
    let freqMap = {}; // Object to store character frequencies

    for (let char of str) {
        freqMap[char] = (freqMap[char] || 0) + 1; // Increment count
    }

    return freqMap;
}

// Example Test Cases
console.log(countCharacterFrequency("hello")); 
// Output: { h: 1, e: 1, l: 2, o: 1 }

console.log(countCharacterFrequency("aabbcc")); 
// Output: { a: 2, b: 2, c: 2 }

console.log(countCharacterFrequency("javascript")); 
// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

// O(n)We iterate through the string once → 

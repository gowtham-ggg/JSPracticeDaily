// 4. Find the first non-repeating character in a string.  

function firstNonRepeatingCharacter(str) {
    let charCount = {}; // Hash map to store character frequencies

    // Step 1: Count frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first character with a frequency of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // If no unique character is found
}

// Example test cases
console.log(`First non-repeating character in "swiss" → '${firstNonRepeatingCharacter("swiss")}'`);
console.log(`First non-repeating character in "racecar" → '${firstNonRepeatingCharacter("racecar")}'`);
console.log(`First non-repeating character in "aabbcc" → '${firstNonRepeatingCharacter("aabbcc")}'`);

/* Output:
First non-repeating character in "swiss" → 'w'
First non-repeating character in "racecar" → 'e'
First non-repeating character in "aabbcc" → 'null'
*/


// 3. Check if a string is a palindrome using built-in functions
function isPalindromeBuiltIn(str) {
    return str.split("").reverse().join("") === str;
}

console.log(`"madam" → ${isPalindromeBuiltIn("madam") ? "✅ Palindrome" : "❌ Not a palindrome"}`);
// Output: "madam" → ✅ Palindrome


//  Check if a string is a palindrome without built-in functions
function isPalindromeManual(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Return false if mismatch is found
        }
        left++;
        right--;
    }
    return true; // Return true if the entire string matches
}

console.log(`"racecar" → ${isPalindromeManual("racecar") ? "✅ Palindrome" : "❌ Not a palindrome"}`);
console.log(`"hello" → ${isPalindromeManual("hello") ? "✅ Palindrome" : "❌ Not a palindrome"}`);
// Output:
// "racecar" → ✅ Palindrome
// "hello" → ❌ Not a palindrome


//  Check if a string is a palindrome using recursion
function isPalindromeRecursive(str, left = 0, right = str.length - 1) {
    if (left >= right) return true; // Base case: if pointers meet or cross, it's a palindrome
    if (str[left] !== str[right]) return false; // Mismatch found, not a palindrome

    return isPalindromeRecursive(str, left + 1, right - 1); // Move pointers inward
}

console.log(`"level" → ${isPalindromeRecursive("level") ? "✅ Palindrome" : "❌ Not a palindrome"}`);
console.log(`"bingo" → ${isPalindromeRecursive("bingo") ? "✅ Palindrome" : "❌ Not a palindrome"}`);
// Output:
// "level" → ✅ Palindrome
// "bingo" → ❌ Not a palindrome


//  Check multiple words for palindromes
function checkWords(words) {
    console.log("\nChecking multiple words:");
    for (let word of words) {
        let status = isPalindromeRecursive(word) ? "✅ Palindrome" : "❌ Not a palindrome";
        console.log(`Word: "${word}" → ${status}`);
    }
}

// Example words to check
checkWords(["madam", "hello", "racecar", "world", "civic"]);

/* Output:
Checking multiple words:
Word: "madam" → ✅ Palindrome
Word: "hello" → ❌ Not a palindrome
Word: "racecar" → ✅ Palindrome
Word: "world" → ❌ Not a palindrome
Word: "civic" → ✅ Palindrome
*/

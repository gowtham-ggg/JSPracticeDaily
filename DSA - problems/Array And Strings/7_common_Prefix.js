function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    
    let prefix = strs[0];  // Assume the first string as prefix
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1); // Reduce prefix length
            if (!prefix) return "";
        }
    }
    
    return prefix;
}

// Example usage
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""





//Time Complexity : O(N X M) , where N is the Number of Strings and M is the Length of the Shortest string






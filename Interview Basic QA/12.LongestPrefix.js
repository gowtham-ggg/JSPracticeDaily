function longestCommonPrefix(...strs) {
    if (strs.length === 0) return '';
    
    let prefix = strs[0]; // Start with the first string as the initial prefix
    
    for (let i = 1; i < strs.length; i++) {
      // Reduce the prefix until it matches the start of the current string
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
        if (prefix === '') return ''; // If no common prefix, return an empty string
      }
    }
    
    return prefix;
  }
  
  console.log(longestCommonPrefix("flower", "flow", "flight")); // Output: "fl"
  
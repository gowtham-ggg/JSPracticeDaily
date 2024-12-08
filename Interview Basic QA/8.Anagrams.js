function checkAnagrams(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let frequencyMap1 = {};
    let frequencyMap2 = {};
    if(str1.length !== str2.length){
        return false;
    }

    for(let char of str1){
        frequencyMap1[char] = (frequencyMap1[char] || 0)+1;
    }
    for(let char of str2){
        frequencyMap2[char] = (frequencyMap2[char] || 0)+1;
    }
    for(let char in frequencyMap1){
        if(frequencyMap1[char] !== frequencyMap2[char]){
            return false;
        }
    }
    return true;
}
console.log(checkAnagrams("silent", "listen"));
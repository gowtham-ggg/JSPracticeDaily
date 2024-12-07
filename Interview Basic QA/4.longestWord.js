function longestString(str) {
    let str1 = str.split(" ");
    let longestWord = "";
    for(let word of str1){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestString("hello gowtham here"));

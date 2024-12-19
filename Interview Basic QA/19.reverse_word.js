function reversed(str){
    str = str.split(" ");
    return str.map((word)=>word.split("").reverse().join("")).join(" ");
}
console.log(reversed("hello this is gowtham G"));

// method 2

function reverseString(str) {
    str = str.split(" "); 
    let reversed = ""; 
    for (let word of str) { 
        let reversedWord = ""; 
        for (let char of word) { 
            reversedWord = char + reversedWord; 
            console.log(reversedWord);
        }
        reversed += reversedWord + " "; 
    }
    return reversed.trim(); 
}

console.log(reverseString("hello world"));

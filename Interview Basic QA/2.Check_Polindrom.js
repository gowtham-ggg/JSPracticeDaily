function polyOrNot(str){
    str = str.toLowerCase();
    reversed = str.split("").reverse().join("");
    if(reversed === str){
        return "Polindrome"
    }
    else{
        return "Not a polindrome"
    }
}
console.log(polyOrNot("madam"));


//without Built-in

function polindrome(userInput){
    reversedString = "";
    for(let i = userInput.length -1; i >= 0; i--){
        reversedString += userInput[i];
    }
    const str1 =userInput.toLowerCase();
    if(str1 === reversedString){
        console.log("polindrome");
    }
    else{
        console.log("not a polindrome")
    }
}

polindrome("madams");
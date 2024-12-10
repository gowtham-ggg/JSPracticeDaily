//Guess the Output

function abc() {
    console.log(abc.xyz); // Logs the current value of abc.xyz
}
abc();            // First call: undefined (abc.xyz is not defined yet)
abc.xyz = 400;   // Setting the property xyz on the function object
abc.xyz = 500;  // Updating the property xyz on the function object
abc();         // Second call: 500 (abc.xyz now has a value of 500)


//..........................................................................//

const numbers = [1,2,3,4,5]
numbers[100] = 500;
console.log(numbers);       //[1,2,3,4,5, <empty items>, 500];
//it is valid and we got empty items i.e, form sixth position to 99th position 
//we got empty items andd get 500 on 100th position

//............................................................................//

console.log(typeof typeof 100); //string

//...............................................................................//

const arr = [..."gowtham"]; //spread operator getting all char
console.log(arr); // "g","o", "w", "t", "h","a","m"

//...............................................................................//

console.log(parseInt("10 + 2")); //10
console.log(parseInt("7FM")); //7
console.log(parseInt("M7F")); //NAN

//parseInt processes a string from left to right, stopping at the first character that is not part of a valid number.
//If the string starts with a non-numeric character (and is not a valid prefix like "+" or "-"), parseInt returns NaN.

//.........................................................................................//

console.log(isNaN("gowtham")); //true bzcause it is not a number

//.........................................................................................//

console.log([1,2,3].map(num=> {
    if(num> 0) return; // [undefined, undefined , undefined]
        return num * 2;    
    
}));

//..............................................................................................//

function test(){
    return;
}
console.log(test());   //Undefined

//...............................................................................................//
{
    function abcd(){
        console.log("gowtham");
    }
}
abcd();  //gowtham


//....................................................................................................//

function ab(a,b){
    'use strict'
    a=100;
    b= 200;
    return arguments[0] + arguments[1]; //after return nothing will execute
    console.log(a + b); 
}
console.log(ab(3,2)); // 5


//.....................................................................................................//

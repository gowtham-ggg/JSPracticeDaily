function romanIntoNum(str) {

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let result = 0; 
    let prevValue = 0; 
for(let i = str.length -1; i >= 0; i-- ){
    const currentValue = romanMap[str[i]];
    if(currentValue < prevValue){ 
        result -= currentValue;
    }
    else{
        result += currentValue; 
    }
    prevValue = currentValue;
}
return result
}
console.log(romanIntoNum("IV")); //4
console.log(romanIntoNum("III")); // Output: 3
console.log(romanIntoNum("LVIII")); // Output: 58
console.log(romanIntoNum("MCMXCIV")); // Output: 1994

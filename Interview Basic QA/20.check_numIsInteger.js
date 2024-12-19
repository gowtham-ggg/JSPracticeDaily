function isInt(n){
    return n% 1 ===0;
}
console.log(isInt(0)); //true
console.log(isInt(1)); //true
console.log(isInt(-1)); //true
console.log(isInt(5.2)); //false
console.log(isInt(0.6)); //false
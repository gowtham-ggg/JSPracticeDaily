function findGcd(a,b){
    return b===0 ? a : findGcd(b, a%b)
}
console.log(findGcd(0,6));

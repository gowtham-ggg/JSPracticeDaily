function counBits(n){
    return n.toString(2).split('0').join('').length
}
console.log(counBits(9));

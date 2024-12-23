function checkPolindrome(num){
    const strNum = num.toString()
    reversed = strNum.split("").reverse().join("");
   
    return strNum === reversed
}
console.log(checkPolindrome(121));
function primeNum(num){
    if(num < 2){
        return false;
    }
    for(let i =2; i <= Math.sqrt(num); i++){
        if(num % i ===0){
            console.log("Not a Prime Number");
            return false
        }
    }
    console.log("Prime Number");
            return true
    
}
primeNum(13);

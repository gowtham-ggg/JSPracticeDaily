function fibonacci(n){
    
    if(n <= 0){
        return [];
    }
    if(n ===1){
        return [1];
    }
    let sequence = [0,1];

    while (sequence.length < n){
        let nextNumber = sequence[sequence.length-1] + sequence[sequence.length-2];
        sequence.push(nextNumber)
    }
    return sequence;
}
console.log(fibonacci(10));
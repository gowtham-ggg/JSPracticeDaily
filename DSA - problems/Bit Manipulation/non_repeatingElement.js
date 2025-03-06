function nonRepeatinElement(arr){
    let unique =0 
    for(let num of arr){
        unique ^= num
    }
    return unique
}
console.log(nonRepeatinElement([1,1,2,2,3,4,4]));

//Time Complexity: O(n) (single pass through the array)
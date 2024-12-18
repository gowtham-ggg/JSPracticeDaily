//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let evenNum = arr.filter((num)=>num %2 ===0);
console.log(evenNum);

function findEven(arr){
    let nums = []
    for(let num of arr){
        if(num % 2 === 0){
            nums.push(num)
        }
    }
    return nums;
    
}
console.log(findEven(arr))
//method 1 
const arr = [12, 36,48, 56, 72];
const maxNumber = Math.max(...arr);
console.log(maxNumber);

//method 2

function findMax(arr){
    let max = 0;
    for(let num of arr){
        if(num > max){
            max = num;
        }
    }
    return max;
}
let arr1 = [13,34,23,56,76,5];
console.log(findMax(arr1));
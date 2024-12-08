//method 1
function findMissingNum(arr){
    let n = arr.length + 1;

    let totalSum = (n * (n+ 1))/2; // here n => 5; => (5 * (6))/2 => 15

    let arrSum = arr.reduce((acc, num) => acc + num,0)
    // 1+2+3+5 => 11

    return totalSum - arrSum; // =>15 - 11 => 4
}
arr = [1,2,3,5]; 
console.log(findMissingNum(arr)); //output => 4;

//method 2 using Set

function findmissingNumber(arr1){
    let n = arr1.length + 1;
    let numberSet = new Set(arr1);

    for (let i =1; i <= n; i++){
        if(!numberSet.has(i)){
            return i;
        }
    }
}
console.log(findmissingNumber([1,2,4,5,6])); //3
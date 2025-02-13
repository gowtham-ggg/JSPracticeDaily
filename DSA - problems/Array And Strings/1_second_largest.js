// 1. Find the second largest element in an array. 
function findSecondLargest(arr){
    let largest = -Infinity
    let secondLargest =- Infinity

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] > largest && largest !== secondLargest){
            secondLargest = arr[i]
        }
        

    }
    return secondLargest === -Infinity ? null : secondLargest

}
console.log(findSecondLargest([1,2,3,4,5,6,7,8,89,92])) //output : 89
console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 8])); // Output: 7
console.log(findSecondLargest([10, 10, 10])); // Output: null
console.log(findSecondLargest([5])); // Output: null
console.log(findSecondLargest([3, 8, 7, 9, 5])); // Output: 8
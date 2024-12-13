function abc(a,b){
    'use strict'
     a= 100
     b=200
    return arguments[0] + arguments[1];
    console.log(a+b);
}
console.log(abc(10,20)); //30 

//-------------------------------------------------------------------------//
//function currying 
function add(a){
    if(a === undefined){
        return 0
    }
    return function(b){
        if(b=== undefined){
            return a
        }
        return add(a + b);
    }
    
}
console.log(add(2)(3)(4)());

//----------------------------------------------------------------------//

let arr = [1,2,3,4];
let arr1 = arr.map((num)=>num * 2);
console.log(arr); //[1,2,3,4]
console.log(arr1); //[2,4,6,8]

//......................................................................//
let arr2 = arr.map((num)=> num> 3);
console.log(arr2); // [false,false,false,true]

//......................................................................//

//reduce

let greaterValue = arr1.reduce((accum, num)=> accum + num,0)
console.log(greaterValue);

//----------------------------------------------------------------------//

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(NaN == NaN); //false
console.log(NaN === NaN); //false

//----------------------------------------------------------------------//

const arr3 =[1,2,3,5];
const arr4 =[6,7,8,9];
console.log([...arr4, ...arr3]); //[ 6, 7, 8, 9,1, 2, 3, 5]

//---------------------------------------------------------------------//


//Method 1 using set
function rmvDublicate(arr){
    return new Set(arr);
}
let arr = [1,2,2,3,4,5,4,6];
console.log(rmvDublicate(arr));

//method 2 using filter and indexOf

function removeDub(arr1){
    return arr1.filter((value, index, self)=> self.indexOf(value) === index);
}
let arr1 = [9,8,9,7,2,5,6,9,8];
console.log(removeDub(arr1));

//method 3: using reduce

function removeDublicate(arr2){
    return arr2.reduce((unique, item)=>{
        return unique.includes(item) ? unique : [...unique, item] ;
    },[])
}
let arr2 = [1,2,3,1,2,3,1,2,3];
console.log(removeDublicate(arr2));
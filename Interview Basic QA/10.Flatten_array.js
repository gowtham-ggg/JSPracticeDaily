function flattenArray(arr){
    let flattenArr = [];

    arr.forEach(Element => {
        if(Array.isArray(Element)){
            flattenArr = flattenArr.concat(flattenArray(Element));
        }
        else{
            flattenArr.push(Element);
        }
    });
    return flattenArr;
}
let arr = [1,2,[3,4],5,[6,7],8];
console.log(flattenArray(arr));
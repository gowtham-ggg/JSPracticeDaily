function reverse(ogString){
    let reversed =""
    let len = ogString.length;
    for(let i=len -1; i >=0; i-- ){
        reversed += ogString[i];
    }
    return reversed;
}
console.log(reverse("hello"));
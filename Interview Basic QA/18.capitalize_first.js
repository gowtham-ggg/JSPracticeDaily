function capitalize(str){
    return str.split(" ").map((word)=>word.charAt(0).toUpperCase(0)+ word.slice(1)).join(" ");
}
console.log(capitalize("hello world")) 
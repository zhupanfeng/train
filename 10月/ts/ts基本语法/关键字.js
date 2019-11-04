"use strict";
// -----------------------------typeof关键字  typeof类型保护
// function sum(val:string|number|boolean){
//     // return val.length//出错
//     if(typeof val==="string"){
//         return val.length;
//     }else if(typeof val==="boolean"){
//         return 0;
//     }
// }
// sum(1);
// console.log(sum("abc"))//3
// console.log(sum(true))//0
exports.__esModule = true;
function isDog(x) {
    console.log("is Dog"); //is Dog
    return x.age == 2;
}
function getAnimal(x) {
    if (isDog(x)) {
        return "dog...";
    }
    else {
        return "pig...";
    }
}
var d = { age: 100 };
console.log(getAnimal(d)); //pig...

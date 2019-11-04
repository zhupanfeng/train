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

// ------------------instanceof 关键字 instanceof类型保护

// class Animal{
//     name:string
// }
// class Dog extends Animal{
//     age:number
// }
// function f(a:Animal){
//     if(a instanceof Dog){

//     }else if(a instanceof Animal){

//     }
// }
// let d=new Dog();
// f(d)//兼容了
// let a=new Animal();
// f(a)//兼容


// -----------------null 的用法 null的类型保护
// function f(val:string|null){

//     // if(val==null){
//     //     return ""
//     // }//加上后null就不会报错

//     // val =val || ""// ||逻辑或 和上面if语句作用一样

//     function g(){
//         // !. 忽略null
//         console.log(val!.trim())
//     }
//     val=val||""
//     g()
//     // return val.charAt(0)
//     return val
// }
// // console.log(f("  hello  "))//h
// console.log(f(null))//null没有charAt就报错

// ----------------联合类型
// ts 类型系统
// 基本类型, class,type,interface
// interface PrimiryButton{
//     style:"primiry",
//     text:"点击"
// }
// interface DangerButton{
//     style:"danger",
//     text:'登录'
// }
// // Button是联合类型
// type Button=PrimiryButton | DangerButton;
// function f(b:Button){
//     if(b.style=="primiry"){
//     }
//     if(b.style=="danger"){
//     }
// }

// ---------------in 关键字 in的类型保护
// in 判断一个属性是否在一个接口中或类中

// interface A{
//     name:string,
//     say():void
// }
// interface B{
//     age:number,
//     jump():void
// }
// function f(c:A|B){
//     if("name" in c){
//         console.log(c)
//     }
//     if("age" in c){
//         console.log(c)
//     }
// }

// ----------------自定义的类型保护
interface Dog{
    age:number
}
interface Pig{
    age:number
}
function isDog(x:Dog|Pig):x is Dog{
    console.log("is Dog")//is Dog
    return x.age==2;
}

function getAnimal(x:Dog|Pig):string{
    if(isDog(x)){
        return "dog..."
    }else{
        return "pig..."
    }
}
let d:Dog={age:100}
console.log(getAnimal(d));//pig...


export{}
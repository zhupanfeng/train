// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     say(){
//         console.log("say...")
//     }
// }
// class Dog extends Animal{

// }
// let d=new Dog("wangcai")
// d.say()//say...
// console.log(d.name)//wangcai

// ------------------
class Animal {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log("say...")
    }
}
class Dog extends Animal {
    constructor(a) {
        super(a)//显示调用父中的constructor
        this.age = a;
    }
}
let d = new Dog("wangcai")
d.say()//say...
console.log(d.name)//wangcai
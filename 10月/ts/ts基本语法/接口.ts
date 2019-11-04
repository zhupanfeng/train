// 接口 api 接口是一个网址
// java和ts中的接口 比抽象类还抽象的东西

// 抽象类 类 抽象类不能new 只能让别的类继承
// abstract class Anmial {
//     name:string;//实例属性
//     say(){
//         console.log("say...")//实例方法
//     }
// } 

// interface是一个关键字用来定义一个接口
// 接口中放了很多方法，目的就是为了让别的类去实现我的接口，也就是我的方法
// interface Flying{
//     // 仅仅是放一些方法的声明
//     say():void;
// }


// 接口 不是类 也不能new 只能让别的类去实现
// 一个类可以继承一个抽象类，也可以去实现一个接口
// 一个类只能继承一个类（抽象类），但是可以实现多个接口


// -------------------使用接口
// 定义抽象类
// abstract class Anmial {
//     name:string;
//     jump(){
//         console.log("jump....")
//     }
// }
// // 定义一个接口
// interface Flying{
//     fly():void;
// }
// interface Eating{
//     eat():void;
// }
// class Bird extends Anmial implements Flying,Eating{
//     fly(){
//         console.log("飞翔，，，")
//     }
//     eat(){
//         console.log("吃。。。")
//     }
// }
// let b=new Bird();
// b.jump();
// b.fly();
// b.eat();

// ------------------抽象类也可以模拟接口
// 如果一个抽象类中都是抽象方法,它和接口就一样
// 抽象方法是不能实现的
// abstract class Anmial{
//     // abstract jump()//抽象方法
//     abstract jump():void;
// }
// class Bird extends Anmial{
//     // 如果继子继承抽象类，这个抽象类中有抽象方法
//     // 那么就一定要实现这个抽象方法
//     jump(){
//         console.log("jump...")
//     }
// }
// let b=new Bird();
// b.jump();







export{}
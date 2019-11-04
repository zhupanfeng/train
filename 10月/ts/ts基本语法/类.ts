// Person是类
// class是关键字，用来声明一个类
// name叫属性 string指name的类型
// 创建对象 需要new一个类 new Person
// class Person{
//     name:string
// }
// // p表示一个对象 new出来的
// let p=new Person();

// ---------------在类中写构造器
// 声明了一个学生类
// 创建完对象后，如何让对象有值 构造器
// 当new对象时，会自动的调用构造器 constructor
// class Stu{
//     name:string;
//     constructor(name){
//         // this表示当前这个类的对象
//         this.name=name
//     }
// }

// let s=new Stu("wangcai")
// console.log(s.name)//wangcai

// class Animal{
//     name:string;
//     constructor(name){
//         // this指向是不固定的，始终指向new出来的那个对象
//         this.name=name
//     }
// }
// let a=new Animal("pig");
// let b=new Animal("cat");
// console.log(a.name)//pig
// console.log(b.name)//cat


// ----------------三个访问权限服 public private protected
// public 所有类都可以访问
// private 只有本类可以访问
// protected 只有在本类或继承这个类的子类中可以访问
// 访问name 访问器 修改器

// class User{
//     // 在一个类中,如果这个属性是私有的，一般都以_打头
//     private _myname:string;
//     constructor(name:string){
//         this._myname=name;
//     }
//     // 访问器 myname是一个函数
//     public get myname():string{
//         return this._myname;
//     }
// }

// let u1=new User("张三");
// // 调用访问器 不用加()
// console.log(u1.myname)
// let u2=new User("李四")
// console.log(u2.myname)

// class Car{
//    private name:string;
//     constructor(name){
//         this.name=name;
//     }
// }
// let c=new Car("奔驰");
// // 如果name是私有的外面不能访问
// console.log(c.name)

// class Car{
//     private _name:string;
//     constructor(name){
//         this._name=name;
//     }
//     // 公开的访问器
//     public get name():string{
//         return this._name;
//     }
// }
// let c=new Car("奔驰1111");
// console.log(c.name);//奔驰1111

// --------------修改器
// class Phone{
//     private _name:string;
//     constructor(name){
//         this._name=name;
//     }
//     public get name():string{
//         return this._name;
//     }
//     public set name(newName:string){
//         this._name=newName;
//     }
// }

// let p=new Phone("华为");
// console.log(p.name);//华为
// p.name="苹果"
// console.log(p.name);//苹果
// console.log(p._name);


// 类 类型 自定义的类型
// class Person{
//     private _name:string;
//     // 构造器
//     constructor(name){
//         this._name=name;
//     }
//     // 访问器
//     public get name():string{
//         return this._name
//     }
//     // 修改器
//     public set name(newName:string){
//         this._name=newName;
//     }
// }
// // p类型是Person let a:number=111
// let p:Person=new Person("张三");
// console.log(p.name)
// p.name="李四"
// console.log(p.name)

// ------------------继承和三个修饰符

// 父类 基类
// 如果是一个基类，不想别人去new这个基类
// 可以把这个类变成抽象类
// 所谓的抽象类 就是不能new的类，完全是让别去继承
// 也就是抽象类不能去创建对象
// abstract就表示把这个类声明成抽象lei
// abstract class Animal{
//     // public表示所有类的类内和类外都能访问
//     public readonly name:string="xxx";
//     // 只能在本类内可以访问
//     private money:number=0;
//     // 只能在子类的类内访问
//     protected age:number=0;
// }
// // Dog是子类
// class Dog extends Animal{
//     // Dog中去拿age,Dog内部没有
//     public getAge(){
//         console.log(this.age);//0
//     }
//     public getMon(){
//         // console.log(this.money);
//     }
// }
// let d=new Dog();
// console.log(d.name)//xxx
// // 在类外访问age 不能 age只能在Dog内部访问
// // console.log(d.age);
// d.getAge();

// --------------继承
// class Animal{
//     name:string;
//     // constructor构造器就是给类中的属性进行赋值
//     constructor(name:string){
//         this.name=name;
//     }
// }

// class Pig extends Animal{
//     age:number;
//     constructor(name,age){
//         // 先调用父类中的构造器
//         super(name);
//         this.age=age;
//     }
// }
// let p=new Pig("wangcai",200);
// console.log(p.name)//wangcai
// console.log(p.age)//200


// -----------------------抽象类
// 父类也是可以new的
// 如果不能信让别去创建父类的对象
// 可以把这个父类声明成抽象类
// abstract class Animal{
//     name:string;
//     constructor(name:string){
//     }
// }
// // 抽象类是不能new
// // let a=new Animal("小")
// class Pig extends Animal{
//     age:number;
//     constructor(name,age){
//         super(name);
//         this.age=age
//     }
// }
// let p=new Pig("hhhh",999);
// console.log(p.name);
// console.log(p.age)

// ---------------------------静态属性
// class Animal{
//     // 在Animal中声明的属性默认情况下都是实例属性
//     public name:string;//实例属性 实例就是对象
//     constructor(name:string){
//         this.name=name;
//     }
// }
// // a是对象，也叫实例
// let a=new Animal("wangcai");
// console.log(a.name)

// class Animal{
//     public name:string;//实例属性
//     // 静态属性不属于某个实例,属于当前这个lei
//     // 不能通过.age来获取age
//     static age:number=666;//静态属性
//     constructor(name:string){
//         this.name=name;
//     }
// }
// let a=new Animal("wangcai");
// console.log(a.name);//wangcai
// // 静态属性需要通过类名来获取
// console.log(Animal.age);//wangcai
// // console.log(a.age)

// ---------------------静态方法
// class Animal{
//     // f1就是一个静态方法
//     static f1(){
//         console.log(".....")
//     }
// }
// let a=new Animal();
// // a.f1()//由于f1是静态方法，只能通过类名获取
// Animal.f1();


// 总结
    // 1、函数：声明函数 函数表达式
    // 2、重载函数：
        // java中表示有多个函数，函数名一样，只是参数个数或类型buyiy
        // ts表示提供多个函数定义（不规范）
    // 3、修饰符： 
            //  public:所有类都能访问
            //   private ：只能在本类内部使用
            //   protected ：只能在子类中使用
    //  4、readonly：只读
    // 5、构造器、访问器、修改器
    // 6、继承 父类 子类
    // 7、抽象类 不能new
    // 8、静态属性、静态方法 获取时只能通过 类名.xxx
export{}
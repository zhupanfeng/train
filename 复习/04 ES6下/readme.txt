实现深copy:

构造器：
    在ES5中创建一个对象，对象上有实例属性和共有属性，实例属性定义在构造器上，
    共有属性定义在原型上
    hasOwnProperty:判断是否是实例属性，即判断是在构造器还是原型上的属性

        构造器 new 出来一个对象
        每一个函数（构造器）上都有一个属性property指向原型对象
        new出来的对象上也有一个属性__proto__指向原型对象性
        原型对象上有constructor指向创建这个对象的函数(即构造器)
ES5中的继承
    实例属性的继承：Animal.call(this)
    共有属性的继承：constructor容易出问题
                    Dog.property=Animal.property
                    Dog.property.__proto__=Animal.property
                    Object.setPropertyOf(Dog.property,Animal.property)
                    Dog.property=Object.creat(Animal.property)
es5和es6中模拟抽象类：new.target==Animal throw new Error("Animal 不能new")

ES6：
    实例属性(constructor中的)、共有属性(构造器外的包括访问器)、静态属性(static 使用时只能用 类名.)
    继承：
        使用关键字extends 要想子继承父constructor必须 super()
箭头函数：主要考察this
        没有this,没有arguments，没有property

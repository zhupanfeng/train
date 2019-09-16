// 观察者模式：观察者、被观察者(在被观察者中存储观察者) 之间有关系
// 订阅和发布没有关系 观察者模式是基于发布订阅的

// 被观察者
class Subject{
    constructor(){
        this.arr=[]//存储谁在观察
        this.state="很开心"
    }
    attach(o){
        this.arr.push(o)
    }
    setState(newState){
        this.state=newState
        this.arr.forEach(o=>o.update(newState))
    }
}
// 观察者
class Observer{
    constructor(name){
        this.name=name;
    }
    update(newState){
        console.log(this.name ,"孩子状态",newState)
    }
}
let s=new Subject("孩子")
let o1=new Observer("爸爸")
let o2=new Observer("妈妈")
s.attach(o1)
s.attach(o2)
// console.log(s.state)
s.setState("不开心")
console.log(s.state)
// 让vm代理vm.$data
// 存储观察者的类Dep
class Dep{
    constructor(){
        this.subs=[];//存储所有观察者
    }
    // 添加Watcher 订阅
    addSub(watcher){
        this.subs.push(watcher)
    }
    // 通知 发布 通知subs容器中所有的观察者
    notify(){
        this.subs.forEach(watcher=>watcher.updata())
    }
}

// 观察者
class Watcher{
    constructor(vm,expr,cb){
        this.vm=vm;
        this.expr=expr;
        this.cb=cb;//cb为一个回调函数，表示当状态改变了要干的事
        // 刚开始需要保存一个老的状态
        this.oldValue=this.get();

    }
    // 获取状态的方法
    get(){
        Dep.target=this;
        let value=CompilerUtil.getVal(this.vm,this.expr);
        Dep.target=null;
        return value;
    }
    // 更新状态
    updata(){
        let newVal=CompilerUtil.getVal(this.vm,this.expr);
        if(newVal!=this.oldValue){
            this.cb(newVal)
        }
    }
}
// 数据劫持
class Observer{
    constructor(data){
        this.observer(data)
    }
    // 把上面的数据变成响应式
    observer(data){
        if(data && typeof data=='object'){
            for(let key in data){
                this.defindReactive(data,key,data[key])
            }
        }
    }

    defindReactive(obj,key,value){
        this.observer(value);
        let dep=new Dep();//不同的watcher放到不同的dep中
        Object.defineProperty(obj,key,{
            // 当你获取school时，会调用get
            get(){
                Dep.target && dep.subs.push(Dep.target)
                // console.log("get...")
                return value;
            },
            // 当设置school时会调用set
            set:(newVal)=>{
                // 当赋予的值和原来值一样时，不重新赋值
              if(newVal != value){
                // console.log("set...")
                this.observer(newVal)//设置的新值也需要监控
                value=newVal;
                dep.notify();
              }
            }
        })
    }
}

// 编译模板
class Compiler{
    constructor(el,vm){
        this.el=this.isElementNode(el) ? el:document.querySelector(el)
        this.vm=vm;
        let fragment=this.node2fragment(this.el);
        // 替换（编译模板） 用数据来编译
        this.compile(fragment);
        this.el.appendChild(fragment)
    }
    // 判断一个属性是否是一个指令
    isDirective(attrName){
        return attrName.startsWith("v-")
    }
    // 编译元素节点
    compileElement(node){
        let attributes=node.attributes;//某个元素的属性节点
        [...attributes].forEach(attr=>{
            let {name,value:expr}=attr;//解构赋值
            if(this.isDirective(name)){
                let [,directive]=name.split("-");
                CompilerUtil[directive](node,expr,this.vm);
            }
        })
    }
    // 编译文本节点
    compileText(node){
        let content =node.textContent;
        let reg=/\{\{(.+?)}}/;//{}在正则中有特殊含义需要转义
        reg.test(content)//如果content满足正则 返回true 否则返回false
        if( reg.test(content)){
            CompilerUtil['text'](node,content,this.vm); 
        }
    }
    // 编译的方法
    compile(node){
        let childNodes=node.childNodes;
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                this.compileElement(child);
                this.compile(child)//递归 如果子节点里面还是元素节点
            }else{
                this.compileText(child);
            }
        })
    }
    // 文档碎片
    node2fragment(node){
        let fragment=document.createDocumentFragment();
        let firstChild;
        while(firstChild=node.firstChild){
            // appendChild有移动性
            fragment.appendChild(firstChild)
        }
        return fragment;
    }
    // 判断一个节点是否是元素节点
    isElementNode(node){
        // nodeType返回值元素节点返回值1 属性节点2
        return node.nodeType===1;
    }
}

// 写一个对象，{}，包含不同指令对应的处理方法
CompilerUtil={
    // expr school.name    vm.$data school:{name:xx,age:xx}
    getVal(vm,expr){
        return expr.split(".").reduce((data,current)=>{
            return data[current]
        },vm.$data);
    },
    // 设置数据
    setVal(vm,expr,value){
        // console.log(value)
        // console.log(expr)//scool.name
        // console.log(expr.split("."))//["scool", "name"]
        expr.split(".").reduce((data,current,index,arr)=>{
            // 第一次data school对象 current "school" index 0 arr:["scool", "name"]
            // 第二次data name对象  current "name"" index 1 arr:["scool", "name"]
            // console.log(data,current,index,arr)

            if(index==arr.length-1){
                // console.log(current)//name
                // console.log(data)
                return data[current]=value
            }

            return data[current]
        },vm.$data)
    },
    model(node,expr,vm){
        let value=this.getVal(vm,expr)
        let fn=this.updata["modelUpdata"]
        // 给输入框添加一个观察者,如果后面数据改变就更新数据
        new Watcher(vm,expr,(newVal)=>{
            fn(node,newVal)
        })
        // 给输入框绑定一个input事件
        node.addEventListener("input",(e)=>{
            // console.log(e.target.value)
            let value=e.target.value
            this.setVal(vm,expr,value)
        })
        fn(node,value);
    },
    html(){},
    // 得到新的内容
    getContentValue(vm,expr){
        return expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
             return this.getVal(vm,args[1])
         })
    },
    text(node,expr,vm){
        let content=expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
           new Watcher(vm,args[1],()=>{
               fn(node,this.getContentValue(vm,expr));
           })
            return this.getVal(vm,args[1])
        })
        let fn=this.updata["textUpdata"];
        fn(node,content);
    },
    // 更新数据
    updata:{
        modelUpdata(node,value){
            node.value=value
        },
        htmlUpdata(){

        },
        // 处理文本节点
        textUpdata(node,value){
            // textContent得到文本节点中的内容
            node.textContent=value
        }
    }
}
class Vue{
    constructor(options){
        this.$el=options.el;
        this.$data=options.data;
        let computed=options.computed;
        console.log(computed)
        if(this.$el){
            // 把数据变成响应式  
            new Observer(this.$data)
            // console.log(this.$data)//school: {name: "qinghua"", age: 99}
            // 实现computed计算属性
            // for(let key in computed){
            //     // console.log(key);//getNewName
            //     Object.defineProperty(this.$data,key,{
            //         get:()=>{
            //             return computed[key].call(this);
            //         }
            //     })
            // }
            // 代理
            this.proxyVm(this.$data)
            // 编译模板
            new Compiler(this.$el,this)
        }
    }
    proxyVm(data){
        for(let key in data){
            // console.log(key+"---"+data[key]+"-----"+data)
            // scool---[object Object]-----[object Object]
            Object.defineProperty(this,key,{
                get(){
                    return data[key]
                }
            })
        }
    }
}
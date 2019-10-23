// 实现数据的响应式 即数据劫持
class Observer{
    constructor(data){
        // console.log(data)//// school: {name: "qinghua"", age: 99}
        this.observer(data)
    }
    // 把上面的数据变成响应式
    observer(data){
        // school: {name: "qinghua"", age: 99}
        if(data && typeof data=='object'){
            // for in 循环一个js对象
            for(let key in data){
                // console.log(key)//scool
                // console.log(data[key])//{name: "qinghua", age: 99}
                this.defindReactive(data,key,data[key])
            }
        }
    }

    defindReactive(obj,key,value){
        this.observer(value);//如果数据是一个对象，需要把这个对象的数据也变成响应式的
        Object.defineProperty(obj,key,{
            // 当你获取school时，会调用get
            get(){
                console.log("get...")
                return value;
            },
            // 当设置school时会调用set
            set:(newVal)=>{
                // 当赋予的值和原来值一样时，不重新赋值
              if(newVal != value){
                console.log("set...")
                this.observer(newVal)//设置的新值也需要监控
                value=newVal;
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
    model(node,expr,vm){
        let value=this.getVal(vm,expr)
        let fn=this.updata["modelUpdata"]
        fn(node,value);
    },
    html(){},
    text(node,expr,vm){
        let content=expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
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
        if(this.$el){
            // 把数据变成响应式  
            new Observer(this.$data)
            // console.log(this.$data)//school: {name: "qinghua"", age: 99}
            // 编译模板
            new Compiler(this.$el,this)
        }
    }
}
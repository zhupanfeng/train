// 让插值表达式显示数据

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
            // console.log(content)//{{scool.name}} {{scool.age}}
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
        // console.log(expr.split("."))//["school", "name"]
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
        // console.log("处理v-text指令")
        // console.log(node)//"{{school.name}}" "{{school.age}}"
        // console.log(expr)//"{{school.name}}" "{{school.age}}"
        let content=expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)//["{{scool.name}}", "scool.name", 0, "{{scool.name}}"]
            // let r=this.getVal(vm,args[1])
            // console.log(r)//qinghua  99
            return this.getVal(vm,args[1])
        })
        // console.log(content)//qinghua  99
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
            new Compiler(this.$el,this)
        }
    }
}
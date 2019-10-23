// 找到model，并处理,让输入框显示数据

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
            // console.log(value)//scool.name
            if(this.isDirective(name)){
                // console.log(name)//v-model 
                let [,directive]=name.split("-");
                // console.log(directive)//model
                // console.log(node,expr,this.vm);
                CompilerUtil[directive](node,expr,this.vm);
            }
        })
    }
    // 编译文本节点
    compileText(node){
        // console.log(node)//得到所有文本节点
        let content =node.textContent;
        // console.log(content)//得到所有文本节点中的内容
        let reg=/\{\{(.+?)}}/;//{}在正则中有特殊含义需要转义
        reg.test(content)//如果content满足正则 返回true 否则返回false
        if( reg.test(content)){
            // console.log(content)//{{scool.name}} {{scool.age}}
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
            // 第一次data是school:{name:xx,age:xx}  current是"school"
            return data[current]
        },vm.$data);
    },
    model(node,expr,vm){
        // console.log("处理model指令")
        // 给input输入框一个value属性，node是输入框 node.value=xxx，完成model要完成的事
        let value=this.getVal(vm,expr)
        // console.log(value)//qinghua
        let fn=this.updata["modelUpdata"]
        fn(node,value);
    },
    html(){},
    text(){
        console.log("处理v-text指令")
    },
    // 更新数据
    updata:{
        modelUpdata(node,value){
            node.value=value
        },
        htmlUpdata(){

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
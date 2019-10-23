// 找到了带指令的元素节点 和 插值表达式的文本节点

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
        // startsWith判断一个字符串是否以指定前缀开头 返回值为true false
        return attrName.startsWith("v-")
    }
    // 编译元素节点
    compileElement(node){
        let attributes=node.attributes;//某个元素的属性节点
        // console.log(attributes);//伪数组
        [...attributes].forEach(attr=>{
            // console.log(attr)//type="text"  v-model="school.name"
            let {name,value}=attr;//解构赋值
            // console.log(name,value)//type  text       v-model  school.name
            if(this.isDirective(name)){
                // console.log(name+"是一个指令")
                // console.log(node)//包含这个指令的节点 <input type="text" v-model="school.name">
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
            console.log(content)//{{scool.name}} {{scool.age}}
        }
    }
    // 编译的方法
    compile(node){
        // console.log(node)
        // console.log(node.childNodes)//[text, input, text, div, text, div, text, ul, text]
        // node.childNodes一堆的节点 包括元素节点和文本节点
        let childNodes=node.childNodes;
        // console.log(Array.isArray(childNodes))//false伪数组
        //  [...childNodes]把一个伪数组转换成真正的数组
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                // console.log(child+"是一个元素节点")
                this.compileElement(child);
                this.compile(child)//递归 如果子节点里面还是元素节点
            }else{
                // console.log(child+'是一个文本节点')
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

class Vue{
    constructor(options){
        this.$el=options.el;
        this.$data=options.data;
        if(this.$el){
            new Compiler(this.$el,this)
        }
    }
}
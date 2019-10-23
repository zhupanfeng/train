class Compiler{
    constructor(el,vm){
        //document.querySelector(el) 获取文档中id=el的元素
        this.el=this.isElementNode(el) ? el :document.querySelector(el)
        this.vm=vm;
        console.log(this.el)
    }
    // 判断一个节点是否是元素节点
    isElementNode(node){
        return node.nodeType===1;
    }
    // html要渲染成一张网页，要形参一颗Dom树，在Dom树中有两类节点，元素节点、文本节点，----属性节点不属于其中
}

class Vue{
    constructor(options){
        this.$el=options.el;
        this.$data=options.data;
        // 如果$el存在，就可以找到上面的html模板
        if(this.$el){
            // 需要找到模板中需要替换数据的元素，编译模板
            new Compiler(this.$el,this)
        }
    }
}
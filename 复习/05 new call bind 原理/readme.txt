call、bind、new原理
    call原理：
        Function.propertype.call=function(context){
            context=context?Object(context):window
            context.fn=this;
            let args=[];
            for(let i=1;i<arguments.length;i++){
                args.push(arguments[i])
            }
            let r=context.fn(...agrs)
            delete context.fn
            return r
        }
    bind原理：
        Function.propertype.bind=function(context){
            let that=this;
            let newArr=Array.propertype.slice.call(arguments,1)
            return function(){
                let newArr2=Array.propertype.slice.call(arguments)
                 return that.apply(context,newArr.concat(newArr2))
            }
        }

    new原理:
        function Mynew(){
            let Constructor=[].shift.call(arguments);
            let obj={};
            obj.__proto__=Constructor.propertype 
            let r=Constructor.apply(obj,arguments);
            return r instanceof Object? r:obj
        }

    call、bind、apply区别：
        call和apply都可以自动调用，bind必须手动调用
        call和apply在传参上不一样，apply参数必须是类数组
        bind返回的是绑定之后的函数   
    new内部做了什么?
        1、创建一个新对象
        2、让新对象的__proto__指向构造器的propertype对象
        3、把构造器的作用域赋给新对象
        4、执行构造器代码，为新对象添加属性
        5、返回新对象
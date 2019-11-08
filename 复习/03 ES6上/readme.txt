ES6:
    解构赋值：
        对象
        数组
    
    一般情况赋值两边解构必须一样，但在赋一些隐藏属性(如数组的长度可以赋给对象)),解构可以不一样
    
    ...args
    可以叫做剩余参数
    有时也叫做展开运算符

    对于对象的解构赋值，key必须一样，也可以个key起别名

    展开运算符：
        浅copy:copy前后有关系
        深copy：copy前后没有关系

        对于一些基本数据类型的copy是深copy
        对于展开对象的copy是浅copy
        slice同上
        在展开对象时：
            如果数一层：深copy
            如果数多层：浅copy
            也可以实现多层的深copy:
                1、一直展开到最里层
                2、JSON.parse(JSON.stringify())  局限：只能copy符合JSON格式的数据
        Set:
        可以存储任何数据，数据是唯一的，可以用来去重
        api: add delete clear
        遍历 forEach  s.entries()

        并集、交集、差集的实现：(通过Set和展开运算符)
            并集：
                let arr1=[1,2,3,4];
                let arr2=[3,5,6,7];
                function union(arr1,arr2){
                    let s1=new Set(arr1);
                    let s2=new Set(arr2);
                    let s=new Set([...s1,...s2])
                    return [...s]
                }
               console.log(union(arr1,arr2))
            交集：
            let arr1=[1,2,3,4];
            let arr2=[3,5,6,7,8];
            function intersection(arr1,arr2){
                let s1=new Set(arr1);
                let s2=new Set(arr2);
                return [...s1].filter(item=>{
                    return s2.has(item)
                })
            }
            console.log(intersection(arr1,arr2))

            差集:
                let arr1=[1,2,3,4];
                let arr2=[3,5,6,7,8];
                function difference(arr1,arr2){
                    let s1=new Set(arr1);
                    let s2=new Set(arr2);
                    return [...s1].filter(item=>{
                        return !s2.has(item)
                    })
                }
                console.log(difference(arr1,arr2))
            Map:
                存键值对，任何值都可以作为一个键或者值
                api：get set(对于没有的键值对增加))
                有时会造成内存泄漏
            JS中的集合：[]、{}、Set、Map
            WeekMap:对象是一组键/值的集合，键是弱引用，键必须是对象，值可以是任意值

            模块化历史：AMD、CMD、CommonJS、ES6
            VUE、React ES6
            Node CommonJS

            ES6模块化：
                1、每一个文件都是一个模块
                2、通过EXPORT导出一个模块
                3、通过import导入
            CommonJS:
                导入：require
                导出：module.exports
                
                在vscode中不能直接run import
                node 采用的是CommonJs

                AMD、CMD、CommonJS的区别：
                    CommonJS是同步的，主要针对服务器端
                    CMD、AMD是异步的，主要针对浏览器端
                        对于AMD主要推崇依赖前置，在定义模块时就声明依赖模块，
                        CMD推崇就近依赖，在使用模块时才require
                    CMD是懒加载，在使用模块时才require，AMD是预加载，在定义时就加载完所有模块


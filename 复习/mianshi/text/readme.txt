001 Promise原理(**)
    掌握程度：
        1、至少会使用，会then的链式调用，会Promise中方法的使用
        2、至少能实现Promise中的基本then方法，三个状态，异步，链式可以不用实现

021，vue中都有哪些指令?
    v-text ：插值表达式 <h1 v-text="msg"></h1> 等同于 {{}} v-text是直接把数据渲染出来，有html标签也不会渲染
    v-html:解析html标签
    v-if:控制一个元素是否显示
    v-else
    v-show
    v-bind:单项数据绑定，数据绑定，视图变化
    v-model：修饰符(:),双向数据绑定，数据变化，视图变化，视图变化，数据变化，是value+input语法糖
    v-on:修饰符(@)
    v-for：循环 需要绑定唯一的key值
    v-once:只渲染一次，再改变数据，不会重新渲染
    ....

    v-for中key值的绑定?
        需要绑定唯一的key值，更精确，不能使用index作为key，因为在进行一些排序，交换顺序时，要是用index作为key需要重新创建dom元素，如果使用id作为key,内容没变，只是调换位置，可以提高性能

    v-for & v-if:
        v-for尽量不要与v-for同一节点使用，v-for的优先级比v-if更高，如果它们处于同一节点，每一次循环都会循环运行一遍v-if
        如果想通过每一项数据来判断是否渲染，可以这样使用，要是想通过某些条件跳过循环，可以将v-if放在v-for的父节点上

    如何让css只在当前组件中起作用?
        将当前<style>修改为<style scoped>
022,vue中双向数据绑定的原理?v-model的原理?

023,v-if & v-show:
    v-if:控制dom树是否渲染,使用与很少改变条件，不需要频繁切换，如某些官网
    v-show:主要控制style,dom树都渲染，只是通过css的dispaly来控制是否显示,需要放到一个真实DOM上，不能使用template,使用与需要频繁切换的场景

024,说一下，你对MVVM的理解?

025,Vue中数据通信有哪些方式?

026,在vue中data中可以放哪些类型的数据,放在data中的哪些数据可以响应式变化?

027，vue中是如何实现数据侦测的?
    1、只有放在data中的数据才能被检测到，新添加的属性不能更新视图(可以通过vm.$set)
    2、defineProperty只能检测一个对象，不能检测数组
    3、可以通过递归侦测多层，如果赋值一个新的对象，也会侦测到
    4、vue中也可以检测一个数组，如果数组添加一个对象，也会检测到
    5、如果数组中有一个对象，也能被检测到
    6、如果给数组添加一个对象，这个对象也能被检测到，数组套用了对象，里面的对象也支持响应式变化
    7、修改数组的长度或索引，不会影响视图的更新
028,vue中数据检测是如何检测到数组中的常用方法(push,pop,shift)?
        重写这些方法：
                const arrayProto=Array.property 
                const proto=Object.create(arrayProto)
                ;['shift','pop','push','splice'].forEach(method=>{
                    proto[method]=function(...args){
                        arrayProto[method].call(this,...args)
                    }
                })
029，vue中数据通信的方式?
    1、props传递数据，父传子
    2、$emit触发方法时携带数据，子触发父中方法，触发时传递一些数据
        .sync(xxx update:xxx) 可以传递多个属性 v-model(是value+input语法糖)只能传递一个属性
    3、$parent/$children :默认只能触发上一级的方法，$parent可以触发上上级的方法(自己封装$dispatch方法，在上级中一层一层的找)
        Vue.propertype.$dispatch=function(eventName,value){
            let parent=this.$parent
            while(parent){
                parent.$emit(eventName,value)
                parent=parent.$parent//递归一直向上找
            }
        }
    4、$attrs/$listeners:$attrs可以接收父传子的所有属性,$listeners可以接收父传子的所有方法
    5、ref:可以获取组件的真实DOM,调用这个组件上的方法 父组件可以直接得到子组件，调用它的方法
    6、provide/inject:在父组件提供数据，子组件注入，默认在子组件会一级一级向上级找，找到后不再向上找，一般不推荐使用
    7、EventBus事件总线：
        在Vue原型上挂载$bus方法，通过$bus.on订阅注册一些事件，$bus.emit发布
    8、vuex状态管理：创建全局的state数据,只能通过commit(mutation)同步修改数据，dispatch(Action)异步
30,v-model的本质是?
    是value+input的语法糖
    <Son :value="counter" @input="newValue=>counter=newValue"></Son>
    <Son v-model="counter"></Son>
031,说一下Vue的生命周期?
    beforeCreate:实例化vue后走的第一个钩子，此时还没有数据劫持
    created:vue实例已经创建完成，数据侦测已经完成，methods、computed也Ok，$el还没有挂载
    beforeMount:挂载之前
    mounted:$el完成
    beforeUpdate:data改变 准备渲染视图 domdiff
    updated:渲染视图完成，不要更新数据，会形成死循环
    beforeDestory:vm销毁之前调用
    destoryed:销毁之后调用
032,在vue的钩子中,通常会做哪些事情?
    created: vm已经创建完成 可以发起ajax请求
    mounted:vm已经挂载完成 可以发起ajax请求 也可以操作Dom
    beforeUpdate:可以进一步修改状态，不会重新渲染
    updated:不可以修改数据，会造成死循环
    beforeDestory:优化操作，清空定时器，解除事件绑定,手动移除一些事件监听，以免造成内存泄漏

033,vue的生命周期具体适合那些场景?画出vue的生命周期?

034,vue实例上的属性?
    vm.$data
    vm.$options
    vm.$nextTick
    vm.$el 获取真实DOM 获取到的可能不是更新后的 需要在下一个事件环中获取更新后的DOM元素
    vm.$watch 监控一个数据
    vm.$set 可以给data中的对象添加一个
    vm.$delete
    ...
035为什么通常不使用index作为key?

036,vue中的computed,watch,methods区别：
    computed&methods：计算属性有缓存，如果它所需要的数据没有变化，会去缓存中拿，
                    方法没有缓存，每次需要都需要重新调用
    计算属性和watch:watch支持异步，其它的可以互换，watch第一次不能触发，可以使用mounted
    watch与方法：watch主要监控数据，方法是写一些方法
    备注：计算属性虽然是方法，但可以当做属性用





事件环：
    浏览器中事件环
        微任务：promise.then MutationObserver 
        宏任务:script ajax setTimeout setInterval setImmediate MessageChannel I/O requestAnimationFrame
    node中事件环
        微任务:promise.then process.nextTick
        宏任务:setTimeout setImmediate setInterval I/o
宏任务&微任务：
    宏任务：promise.then(promise本身是同步的)、process.nextTick、MutationObserver
    微任务：script(脚本会最先运行)、ajax事件、setTimeout、setInterval、setImmediate MessageChannel I/O requestAnimationFrame
进程与线程：
    进程：是OS分配和调度资源的基本单位，写代码一般是关注进程，当项目运行之后产生线程
    线程：进程中有n个线程，真正工作的是线程
    Js的主线程是单线程，同一时刻只能干一件事
    js就是一个线程 错误
事件环分为浏览器事件环和node事件环
浏览器事件环：先执行同步代码 执行完同步代码清空微任务 微任务执行完执行宏任务

setImmediate&setTimeout不能确定谁更快
then可以链式调用，无论上一个then是在第一个函数，还是第二个函数返回，都会作为下一个then
的成功的结果，如果没有返回，默认返回undefined

要想走向下一个then的失败态的回调函数：
    1.返回一个失败态的promise return promise reject("没钱")
    2.抛出一个Error throw new Error("没钱")

多个then时会一直走下去，如何停止走向下一个then
 返回一个等待态的promise  reutrn new promise(()=>{})
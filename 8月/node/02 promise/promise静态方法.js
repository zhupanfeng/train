// let p=new Promise((resolve,reject)=>{
//     resolve("包包")
// })
// p.then(data=>{
//     console.log(data)
// })


// 在Promise 类上面，提供了几个静态方法resolve() reject()
// 上面代码等同于下面静态方法


// Promise.resolve("包包").then(data=>{
//     console.log(data)
// })

//  Promise.reject("没钱").catch(data=>{
//     console.log(data)
//  })


// finally 不过转成成功态还是失败态，都会调用这个方法
// Promise.resolve("包包").then(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log("开心")
// })


// Promise.reject("没钱").catch(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log("不开心")
// })


// 读取name.txt和age.txt中的内容
// let fs=require("fs").promises;
// // all表示[]数组中的promise都成功才能得到最终的值
// Promise.all([fs.readFile("./name1.txt","utf8"),fs.readFile("./age.txt","utf8")]).then(
//     data=>{
//         console.log(data)//[ 'age.txt', '999' ]
//     }
// )


let fs=require("fs").promises;
Promise.race([fs.readFile("./name.txt","utf8"),fs.readFile("./age.txt","utf8")]).then(
    data=>{
        console.log(data)//age.txt
    }
)

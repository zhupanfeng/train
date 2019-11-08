// 箭头函数 考察this问题
// function f(x){
//     function g(y){
//         return x+y
//     }
//     return g(1)
// }
// console.log(f(1))//2

// console.log((x=>(y=>x+y)(1))(1))//2

// -----------------
// 箭头函数中没有this,没有arguments,没有property

// let a=110;//let 不挂在window上
// let obj={
//     a:666,
//     f(){
//         setTimeout(function(){
//             // this表示window
//             console.log(this.a)//undefined
//         },1000)
//     }
// }
// obj.f();
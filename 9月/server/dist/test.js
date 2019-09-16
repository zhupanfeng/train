"use strict";

// console.log("ok")//日志输出
// 输入一个abc转换成ABC，压缩就是使用转换流
const {
  Transform
} = require("stream");

class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    chunk = chunk.toString().toUpperCase();
    this.push(chunk);
    callback();
  }

}

let myTransform = new MyTransform();
process.stdin.pipe(myTransform).pipe(process.stdout); // 标准输入
// process.stdin.on("data",function(data){
//     process.stdout.write(data)//标准输出
// })
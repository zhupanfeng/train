"use strict";

// gzip库
let zlib = require("zlib");

let fs = require("fs");

let data1 = fs.readFileSync("a.txt"); // console.log(data)
// 如果数据中重复的比较多，适合压缩 zlib库中gzip格式压缩
// 音乐 电影数据不适合gzip来压缩
// zlib.gzip(data1,function(err,data2){
//     fs.writeFileSync("a.txt.gz",data2)
// })

fs.createReadStream("./a.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("b.txt.gz"));
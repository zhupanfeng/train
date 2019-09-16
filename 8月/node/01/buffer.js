// buffer是指内存中的数据

// let b1=Buffer.from("10")//放一个字符串
// console.log(b1)//<Buffer 31 30>


// 在utf8中一个汉字三个字节
// const b2=Buffer.from("中国")
// console.log(b2)

// const b3=Buffer.from([10])//写数组表示数字 <Buffer 0a>
// console.log(b3)

// let b1=Buffer.from([10])
// let b2=Buffer.from(b1)
// console.log(b2)//<Buffer 0a>

// let b1=Buffer.alloc(10)//开辟一块内存空间，大小为10字节,内容清空
// console.log(b1)//<Buffer 00 00 00 00 00 00 00 00 00 00>


// let b1=Buffer.allocUnsafe(10)//只开辟一块内存空间，大小为10字节，里面可能有旧的数据
// console.log(b1)//<Buffer 00 00 00 00 00 00 00 00 c0 d5>

// 字符串与butter的转换
let b=Buffer.from("中")
// console.log(b)//<Buffer e4 b8 ad>
// console.log(b.toString())//中
// console.log(b.toString("utf8"))//中
// console.log(b.toString("base64"))//5Lit

// 把十六进制转换成2进制
// console.log((0xe4).toString(2))//11100100
// console.log((0xb8).toString(2))//10111000
// console.log((0xad).toString(2))//10101101

// 11100100 10111000 10101101
// 00111001  00001011  00100010   00101101 base64

// console.log(parseInt('00111001',2))//57
// console.log(parseInt('00001011',2))//11
// console.log(parseInt('00100010',2))//34
// console.log(parseInt('00101101',2))//45

// let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// str+=str.toLowerCase()
// str+="0123456789+/"
// console.log(str[57]+str[11]+str[34]+str[45])//5Lit


// let b1=Buffer.from("中")
// let b2=Buffer.from("国")
// let c=Buffer.alloc(6)
// b1.copy(c,0,0,3)
// b2.copy(c,3,0,3)
// console.log(c)//<Buffer e4 b8 ad e5 9b bd>

// let b1=Buffer.from("中")
// let b2=Buffer.from("国")
// let c=Buffer.concat([b1,b2])
// console.log(c)//<Buffer e4 b8 ad e5 9b bd>
// console.log(c.toString())//中国

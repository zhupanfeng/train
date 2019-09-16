let http=require("http")
let client=http.request({
    hostname:"localhost",
    port:7777,
    // name='xiaoming'& age=18" 请求行 请求正文
    // get请求的请求正文是在?后面加
    // path:"/abc?name='xiaoming'& age=18",
    path:"/abc",
    method:"post",
    headers:{
        "Content-Type":
        "application/x-www-form-urlencoded"
    }
})
// a=1&b=2&c=3请求正文
client.end("a=1&b=2&c=3")
// 请求有三部分组成：请求头、请求行、请求正文

// get请求：在地址栏中输入网址，a标签中的href，img标签中的src
// script标签中的src，form中的method为get
// post请求：表单中method指定Post
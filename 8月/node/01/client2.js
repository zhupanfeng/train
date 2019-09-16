let http=require("http")
let client=http.request({
    hostname:"localhost",
    port:9999,
    path:"/abc",
    method:"post",
    headers:{
        "Conent-type":"application/x-www-form-urlencoded"
    }
})
client.end("a=1&b=2&c=3")
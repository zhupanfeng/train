安装：
    iView:UI库
    axios：请求数据
    body-parser:解析post请求 中间件
    jsonwebtoken：权限校验
    express:后端node的一个框架

跨域： 
    原因：浏览器的同源策略
        浏览器去请求数据不会产生跨域，
        ajax(axios)+浏览器会产生跨域?????

跨域解决：
    1.代理服务器(devServer);
            前端和代理服务器处于同一个域下不会产生跨域
    2.后端配置:
        cors：后端通过设置各种头解决
            res.header("Access-Control-Allow-Origin","*");//允许请求来源
            res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT"),//允许请求方式
            res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization")//允许携带头
    3.nginx:.....
    
    
 
Vue中是es6模块化
node中是commonjs模块化 babel转换低级可以使用es6

封装axios
        merge() 合并
        create.axios() 创建axios实例

    请求拦截 、响应拦截 setInterceptor
    请求拦截：打开动画 加头config.headers.Authorization="xxx"
    响应拦截：关闭动画
jwt:(jsonwebtoken)
    jwt.sign()生成token expiresIn:60 过期时间
    jwt.verify()验证token
    beforeEach 路由切换时验证


小知识：
         toLowerCase()变成小写
         {...options} 展开运算符
         ...mapActions(['login']) 映射
       
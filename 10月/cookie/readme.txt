http是无状态的，无法识别那个客户端访问了它
Cookie session 会话机制

cookie 可以作为存储标识 第一次访问是服务器给浏览器种植cookie，以后每次访问都需要带着cookie
cookie特点：不安全，一般不会使用
cookie的字段:
        domain:域名，不设置默认本机域名，设置后可以限制哪些域名访问
        path：默认/根目录，设置后只有在当前路径可以用键值对
        max-age：cookie保存多长时间，单位秒，默认session，会话结束（浏览器关闭）时失效
        expires:cookie过期时间
        httpOnly:只能通过服务器来操作，不安全
        sizeCookie:Cookie大小
session:session是基于cookie，第一次访问，服务器会以Session_id（uuid获取）的方式给浏览器种植一个cookie

LocalStorage、sessionStorage、cookie、session区别？

共同点：都是存储数据
不同点：
        LocalStorage：永久性存储，再次请求不需要携带，最大存储5M，超过数据会丢失，不能进行跨域存取，保存在浏览器端
        sessionStorage:临时性存储，会话结束，关闭浏览器时，自动丢失，保存在浏览器端
        cookie:服务器种植在浏览器端，每次请求都需要带着cookie，存储在浏览器端，最大存储4K，浪费内存,不安全
        session:基于cookie种植，保存在服务器端（内存，入库），再次请求需要携带session_id,相对安全
jwt:json web token
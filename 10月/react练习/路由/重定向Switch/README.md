react路由：
    1.安装模块 npm i react-router-dom -S
    2.在入口文件引入import {BrowserRouter as Router} from "react-router-dom"
    3.用<Router></Router>把根组件包裹
    4.使用Route定义规则 App.js
        import {Route,Link} from "react-router-dom"
        <Route path="/" exact component={Home}></Route>
        <Route path="/list" component={List}></Route>
    5.使用link生成连接：
        <Link to="/list">列表页</Link>

路由分为：
    基本路由、嵌套路由、动态路由、编程式路由、重定向
    
    动态路由：
        传送：to="/detail/:id"
        接收：this.props.match.params.id
    编程式路由(back,go(-1),push):
        有多种方法可以实现:
        import {createBrowserHistory} from 'history'
        生成history:
        let history=createBrowserHistory({
            <!-- 在push时需要强制刷新 -->
            forceRefresh:true
             })
             <button onClick={()=>history.push("/detail/1000")}>第1000个商品</button>
              <button onClick={()=>history.go(-1)}>返回</button>
    重定向&Switch
        import {Route,Link,Redirect,Switch} from "react-router-dom"

         <Switch>
                <Redirect from="/user" to="/"></Redirect>
                <Route path="/" exact component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/user"  component={User}></Route>
                <Route path="/detail/:id" exact  component={Detail}></Route>
                {/* 没有写路径默认匹配所有路径  加上Switch后只有在访问没有的路径时才访问*/}
                <Route  component={Error}></Route>
            </Switch>

        
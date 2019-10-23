import React from "react"
import Login from "./Login"
import Reg from "./Reg"
import {Route,Link} from "react-router-dom"


export default class User extends React.Component{
    render(){
        return(
            <div>
                <h1>用户中心</h1>
                <ul>
                    {/* 连接 */}
                    <li>
                        <Link to="/user/login">登录</Link>
                    </li>
                    <li>
                        <Link to="/user/reg">注册</Link>
                    </li>
                </ul>
                {/* 配路由 */}
                <Route path="/user/login" component={Login}></Route>
                <Route path="/user/reg" component={Reg}></Route>
            </div>
        )
    }
}
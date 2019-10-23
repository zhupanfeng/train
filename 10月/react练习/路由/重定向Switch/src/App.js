import React from "react"
import {Route,Link,Redirect,Switch} from "react-router-dom"

import Home from "./Home"
import List from "./List"
import User from "./User"
import Detail from "./Detail"
import Error from "./404"

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/user">用户中心</Link>
                    </li>
                    <li>
                        <Link to="/list">列表页</Link>
                    </li>
                </ul>
                <Switch>
                    <Redirect from="/user" to="/"></Redirect>
                <Route path="/" exact component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/user"  component={User}></Route>
                <Route path="/detail/:id" exact  component={Detail}></Route>
                {/* 没有写路径默认匹配所有路径  加上Switch后只有在访问没有的路径时才访问*/}
                <Route  component={Error}></Route>
                </Switch>
            </div>
        )
    }
}
export default App;
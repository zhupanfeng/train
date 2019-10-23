import React from "react"
import {Route,Link} from "react-router-dom"

import Home from "./Home"
import List from "./List"
import User from "./User"
import Detail from "./Detail"

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
                <Route path="/" exact component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/user"  component={User}></Route>
                <Route path="/detail/:id" exact  component={Detail}></Route>
            </div>
        )
    }
}
export default App;
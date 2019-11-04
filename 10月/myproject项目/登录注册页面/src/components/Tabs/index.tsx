import React from "react"
import {NavLink} from "react-router-dom"
import {Icon} from "antd"
import "./index.less"

class Tabs extends React.Component{
    render(){
        return(
            <footer>
                <NavLink className="item1" exact to="/"><Icon type="home"/><span>首页</span></NavLink>
                <NavLink to="/mime"><Icon type="folder"/><span>我的电影</span></NavLink>
                <NavLink to="profile"><Icon type="user"/><span>个人中心</span></NavLink>
            </footer>
        )
    }
}
export default Tabs

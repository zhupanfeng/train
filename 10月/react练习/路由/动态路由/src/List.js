import React from "react"
import {Link} from "react-router-dom"

export default class List extends React.Component{
    render(){
        return(
            <div>
                <h1>商品列表页</h1>
                <ul>
                    <li><Link to="/detail/1">第1个商品</Link></li>
                    <li><Link to="/detail/2">第2个商品</Link></li>
                    <li><Link to="/detail/3">第3个商品</Link></li>
                </ul>
            </div>
        )
    }
}
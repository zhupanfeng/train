import React from "react"

import {createBrowserHistory} from 'history';

// 生成history

let history=createBrowserHistory();

export default class extends React.Component{
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render(){
        return(
            <div>
                <h2>商品详情页</h2>
                <h4>{this.props.match.params.id+"号商品的数据"}</h4>

                {/* 返回上一级 */}
                {/* <button onClick={()=>{history.goBack()}}>返回</button> */}
                <button onClick={()=>history.go(-1)}>返回</button>
            </div>
        )
    }
}
import React from "react"

export default class extends React.Component{
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render(){
        return(
            <div>
                <h2>商品详情页</h2>
                <h4>{this.props.match.params.id+"号商品的数据"}</h4>
            </div>
        )
    }
}
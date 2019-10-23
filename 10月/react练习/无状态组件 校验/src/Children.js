import React from "react"

// 子组价中接收数据后，能改变数据吗
// vue中可以改变，但不推荐
// vue中数据源:data props data是每一个组件都有的，props是别人传递的数据
// props别人传递的不建议修改数据，如果需要修改数据，最好定义在data中

// react中数据源也是data props
// 尽量使用props 在react中获取数据推荐在上层组件中获取，然后传递给子组件，子组件通过this.props接收

export default class Children extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                子组件
                <p>{this.props.age}</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

// state vs props
// state是组件内部定义的数据 props是别人传递的数据

// state在组件内部初始化，自身可以修改数据(this.setstate)),别人传递的是不能修改的
// state可以当做是局部的，只能别自身使用的数据源，当state改变了，会导致组件中心渲染
// 要想修改props，只能别人再传递一个新的props


// 根据state可以把组件分成两类：有状态组件(有state) 无状态组件(无state)
// 有状态组件通常使用class定义
// 无状态组件通常使用function来定义

import React from "react"
import PropTypes from 'prop-types'


const App = props=>(
    <div>
        <h1>无状态组件</h1>
        {/* 无状态组件不能访问this */}
        {/* <p>{this.props.name}</p> */}

        <p>{props.name}</p>
    </div>
)

// 使用propTypes进行类型校验

App.propTypes={
    name:PropTypes.string
}
App.defaultProps={
    name:'XXXX'
}

export default App;
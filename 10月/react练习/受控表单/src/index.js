import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
ReactDOM.render(<App/>,document.getElementById("app"));

// 表单的受控性(框中的内容)与非受控性
// 在一个页面上写一个input框，这个框是非控的
// 默认情况下 input,textarea,select都是非受控的
//在bue中 v-model可以给框进行数据绑定，在react中没有,可以给一个标签起名字ref,
// 把一个非受控表单变成受控的



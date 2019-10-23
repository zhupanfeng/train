
import React from "react"
import Children from "./Children"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'wangcai'
        }
    }
    render(){
        return(
            <>
            {/* ref可以得到input框内容 */}
            {/* <input ref="ipt" value="hello"/> */}

            <input value={this.state.name} onChange={this.f1.bind(this)} />
            <h1>{this.state.name}</h1>
            </>
        )
    }
    // componentDidMount(){
    //     // console.log(this.refs.ipt)
    //     console.log(this.refs.ipt.value)
    // }
    f1(e){
        this.setState({
            name:e.target.value
        })
    }
}

export default App;
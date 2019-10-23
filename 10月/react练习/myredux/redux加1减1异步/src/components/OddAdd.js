import React,{Component} from "react"

export default class OddAdd extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.props.incrementIfOdd()}>奇数加1</button>
            </div>
        )
    }
}
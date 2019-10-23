import React,{Component} from 'react'
export default class Add extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button onClick={()=>this.props.increment()}>+</button>
        )
    }
}
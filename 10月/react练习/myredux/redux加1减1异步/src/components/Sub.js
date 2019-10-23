import React,{Component} from 'react'
export default class Sub extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button onClick={()=>this.props.decrement()}>-</button>
        )
    }
}
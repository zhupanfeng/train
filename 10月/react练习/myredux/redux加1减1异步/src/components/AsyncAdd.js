import React,{Component} from 'react'

export default class AsyncAdd extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <button onClick={()=>this.props.incrementAsync()}>async+</button>
        )
    }

}
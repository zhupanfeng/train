import React,{Component} from "react"

export default class Show extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>counter:{this.props.counter}</h3>
            </div>
        )
    }
}
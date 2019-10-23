import React,{Component} from "react"
import PropTypes from "prop-types"

export default class AddTodo extends Component{
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input type="text" className="new-todo" placeholder="what needs to be done" onKeyUp={this.handleKeyUp.bind(this)}/>
            </header>
        )
    }
    handleKeyUp(e){
        let content=e.target.value.trim();
        if(!content) return
        if(e.keyCode===13){
            this.props.addTodo({content,compoleted:false})
            e.target.value=""
        }
    }
}
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired
}
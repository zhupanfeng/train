import React,{Component} from "react"
import PropTypes from "prop-types"

export default class Todo extends Component{
    render(){
        return(
            <li className="todo">
                <div className="view">
                    <input type="checkbox" checked={this.props.todo.completed} onChange={()=>this.props.toggleTodo(this.props.todo)}/>
                    <label >{this.props.todo.content}</label>
                    <button className="destroy" onClick={()=>this.props.deleteTodo(this.props.todo)}></button>
                    <input type="text" ref='ipt' style={{display:"none"}} className="edit"/>
                </div>
            </li>
        )
    }
}
Todo.propTypes={
    todo:PropTypes.object.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired,
}
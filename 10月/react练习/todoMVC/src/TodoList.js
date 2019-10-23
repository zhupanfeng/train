import React,{Component} from "react"
import Todo from "./Todo"
import PropTypes from "prop-types"

export default class TodoList extends Component{
    render(){
        return(
            <section className="main">
                <input type="checkbox" checked={this.props.allChecked} onChange={(e)=>this.props.toggleAll(e.target.checked)} className="toggle-all"/>
                <ul className="todo-list">
                    {this.props.todos.map((todo,index)=>
                         <Todo toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo} todo={todo} key={index}></Todo>
                    )}
                </ul>
            </section>
        )
    }
}
TodoList.propTypes={
    todos:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired,
    toggleAll:PropTypes.func.isRequired,
    allChecked:PropTypes.bool.isRequired,
}
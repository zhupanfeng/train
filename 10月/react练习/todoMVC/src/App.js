
import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

import "./styles/todo-mvc.css"

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos:[
                {content:'AAA',completed:true},
                {content:'BBB',completed:false},
                {content:'CCC',completed:true},
                {content:'DDD',completed:false},
            ],
            visibility:"all"
        }
    }
    // 添加todos
    addTodo(todo){
        this.state.todos.push(todo);
        this.setState({
            todos:this.state.todos
        })
    }
    // 删除todos
    deleteTodo(todo){
        let index=this.state.todos.findIndex(t=>t==todo);
        this.state.todos.splice(index,1);
        this.setState({
            todos:this.state.todos
        })
    }
    // 切换todo状态
    toggleTodo(todo){
        let index=this.state.todos.findIndex(t=>t==todo);
        this.state.todos[index].completed=!this.state.todos[index].completed;
        this.setState({
            todos:this.state.todos
        })
    }
    // 批量切换todo的状态 done表示true或false
    toggleAll(done){
        this.state.todos.forEach(todo=>todo.completed=done);
        this.setState({
            todos: this.state.todos
        })
    }
    // 判断所有todo的complete
    allChecked(){
        // let res=this.state.todos.every(function(todo){
        //     return todo.completed == true
        // })
        // return res;

        return this.state.todos.every(todo=>todo.completed)
    }
    // 未完成的有多少个
    leftTodo(){
        return this.state.todos.filter(todo=>todo.completed==false).length;
    }
    // 根据visibility筛选出某些todo
    filterTodos(){
        switch (this.state.visibility){
            case "all":
                return this.state.todos;
            case "active":
                return this.state.todos.filter(todo=>!todo.completed)
            case "completed":
                    return this.state.todos.filter(todo=>todo.completed)
            default:
                break;
        }
    }
    // 改变visibility的值
    setVisibility(flag){
        this.setState({
            visibility:flag
        })
    }
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}/>
                <TodoList allChecked={this.allChecked()}  toggleAll={this.toggleAll.bind(this)} toggleTodo={this.toggleTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)} todos={this.filterTodos()}/> 
                <Footer visibility={this.state.visibility} leftTodo={this.leftTodo()} setVisibility={this.setVisibility.bind(this)}/>
            </div>
        )
    }
}

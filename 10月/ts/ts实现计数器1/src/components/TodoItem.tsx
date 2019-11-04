import *as React from "react"

const todoItemStyle:React.CSSProperties={
    color:"red",
    backgroundColor:'green'
}

interface  Props{
    content:string
}

const TodoItem:React.SFC<Props>=(props:Props)=>(
    <li style={todoItemStyle}>{props.content}</li>
)

export default TodoItem;
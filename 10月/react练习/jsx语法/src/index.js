// react是核心文件，可以在webapp中使用，也可以在ReactNative中使用，和vue一样
import React from "react"
// react-dom专门针对webapp
import ReactDOM from "react-dom"
// 引入根组件
import App from "./App"
import { link } from "fs"

// 把App组件渲染到页面
// ReactDOM.render(ele,document.getElementById("app"));


// react可以把一个字符串直接渲染到页面上
// ReactDOM.render("hello react",document.getElementById("app"));

// JSX基本语法
// let ele=<h1>hello 你好</h1>
// ReactDOM.render(ele,document.getElementById("app"));


// JSX中必须有一个跟标签,可以用div、<></>、<React.Fragment></React.Fragment>
// let ele=<div><h1>hello react</h1><span>ok</span></div>
// let ele=<><h1>hhhhh</h1><span>jjjjjjj</span></>
// let ele=<React.Fragment><h1>ok</h1><span>jh</span></React.Fragment>
// ReactDOM.render(ele,document.getElementById("app"));

// jsx中严格区分大小写 、所有标签都要关闭 属性必须引号包括
// let ele=<Div><h1>hello</h1></Div>
// let ele=<div><h1>hello</h1><img/></div>
// let ele=<div><h1>hello</h1></div>
// let ele=<div><h1 title="hello">hhhh</h1></div>
// ReactDOM.render(ele,document.getElementById("app"));

// JSX中可以放字面量、变量，运算表达式，函数调用
// 要在HTML中放js代码,需要放到{}中
let name="xiaohua"
let obj=<strong>strong</strong>
// let ele=<div><h1>133</h1></div>
// let ele=<div>{obj}</div>
// let ele=<div>{name}</div>
// let ele=<div><h1>{name+'xiaoqiag'}</h1></div>
// let ele=<div><h1>{1+1+1}</h1></div>
// let ele=<div>{Math.random()}</div>
// ReactDOM.render(ele,document.getElementById("app"));

// vue中v-if react中没有指令 v-if可以用if...else 三元运算符 v-for可以用map
// let res="";
// let isLogin=false;
// if(isLogin){
//     res=<h1>登录成功</h1>
// }else{
//     res=<h1>登录失败</h1>
// }
// let ele=<div>{res}</div>
// ReactDOM.render(ele,document.getElementById("app"));

// let isLogin=true;
// let loginOk=<h1>登录成功</h1>
// let loginErr=<h1>登录失败</h1>
// let ele=<div>{isLogin ? loginOk :loginErr}</div>
// ReactDOM.render(ele,document.getElementById("app"));

// vue中 v-for
// let books=["vue","react","angular"];
// let ele=<ul>{books.map((item,idx)=><li key={idx}>{item}</li>)}</ul>
// ReactDOM.render(ele,document.getElementById("app"));

// class--->className
// for---->htmlFor
// let ele=<div class="box">hello</div>
// let ele=<div className="box">hello</div>
// ReactDOM.render(ele,document.getElementById("app"));


// 在JSX中放注释，需要放到{/*这是一个注释*/}
// let ele=<div>{/*这是一个注释*/}</div>
// ReactDOM.render(ele,document.getElementById("app"));

// 写行内样式，需要把样式当成一个对象，放到{}
let ele=<div style={{"color":"red"}}>hello</div>
ReactDOM.render(ele,document.getElementById("app"));





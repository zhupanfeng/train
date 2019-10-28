import React from "react"
import ReactDOM from "react-dom"


// 在新版本中多了 getDerivedStateFromProps 把父传递过来的映射成子的属性,并且可以修改
// nextProps父传递过来的新的数据
// prevState子的上一次数据
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 })
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                <hr />
                <SubCounter number={this.state.number}></SubCounter>
            </div>
        )
    }
}
class SubCounter extends React.Component {
    state={
        number:0
    }
    // 从属性对象中获取派发的状态
    // nextProps表示父向下传递的新的值
    // prevState 0 0 0
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("nextProps:", nextProps)
        // console.log("prevState:", prevState)
        let {number}=nextProps;
        // console.log(number)//0
        // if(number%2===0){
        //     // {number:number}里面第一个number表示子组件状态，第二个表示上面得到的number
        //     return {number:number+10}
        // }else{
        //     return {number:number+100}
        // }
        // return;


        if(number%2===0){
            // {number:number}里面第一个number表示子组件状态，第二个表示上面得到的number
            // prevState表示子组件的上一次状态
            return {number:prevState.number+number+10}
        }else{
            return {number:prevState.number+number+100}
        }
        return;
    }

    render() {
        return (
            <div>
                <h1>子组件</h1>
                <p>{this.state.number}</p>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, window.app)
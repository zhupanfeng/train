import React from "react"
import ReactDOM from "react-dom"

class Wrapper extends React.Component{
    state={color:"red"}
    changeColor=(color)=>{
        // this.setState({color:color})
        this.setState({color})
    }
    render(){
        return(
            <div style={{border:`8px solid ${this.state.color}`,padding:'5px'}}>
                <h1>Wrapper</h1>
                <Header color={this.state.color}></Header>
                <Main changeColor={this.changeColor.bind(this)} color={this.state.color}></Main>
            </div>
        )
    }

}

class Header extends React.Component{
    render(){
        return(
            <div style={{border:`8px solid ${this.props.color}`,padding:'5px'}}>
                <h1>Header</h1>
                <Title color={this.props.color}></Title>
            </div>
        )
    }
}

class Title extends React.Component{
    render(){
        return(
            <div style={{border:`8px solid ${this.props.color}`,padding:'5px'}}>
                <h1>Title</h1>
            </div>
        )
    }
}

class Main extends React.Component{
    render(){
        return(
            <div style={{border:`8px solid ${this.props.color}`,padding:'5px'}}>
                <h1>Main</h1>
                <Content changeColor={this.props.changeColor} color={this.props.color}></Content>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div style={{border:`8px solid ${this.props.color}`,padding:'5px'}}>
                <h1>Content</h1>
                <button onClick={()=>this.props.changeColor("blue")}>变蓝</button>
                <button onClick={()=>this.props.changeColor("green")}>变绿</button>
            </div>
        )
    }
}

ReactDOM.render(<Wrapper></Wrapper>,window.app)
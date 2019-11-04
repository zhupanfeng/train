import *as React from "reaact"

interface Props{
    number? :number
}
interface State{
    value:string
}
export default class TodoInput extends React.Component<Props,State>{
    public static defaultProps={
        number:0
    }
    public state={value:''}
    private handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({value:event.target.value})
    }
    public render(){
        return(
            <input value={this.state.value} onchange={(event)=>this.handleChange(event)}></input>
        )
    }
}
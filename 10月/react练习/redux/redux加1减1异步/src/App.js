import React from "react"
import Counter from "./containers/Counter";

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Counter></Counter>
            </div>
        )
    }
}
export default App;
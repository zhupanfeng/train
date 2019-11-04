import *as React from "react"


interface Props{
    number:number,
    increment:any,
    decrement:any
}

class Home extends React.Component<Props>{
    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default  Home;
import React from "react"
import {connect} from "react-redux"
class Profile extends React.Component{
    render(){
        return(
            <div>
                profile
            </div>
        )
    }
}
export default connect()(Profile)
import React, { Children } from "react"
import {connect} from "react-redux"
import actions from "../../store"
import {TypeProfile} from "../../store/reducers/profile"
import {TypeRootState} from "../../store/reducers/index"
import { RouteComponentProps } from "react-router"

type StateProps=ReturnType<typeof mapStateToProps> 
type DispathProps=typeof actions;
interface Iparams{};
type RouteProps=RouteComponentProps<Iparams>
type Props=StateProps & DispathProps & RouteProps &{
    Children ? :any
}

class Profile extends React.Component<Props>{
    render(){
        return(
            <div>
                profile
            </div>
        )
    }
}

let mapStateToProps=(state:TypeRootState):TypeProfile=>state.profile
export default connect(mapStateToProps,actions)(Profile)
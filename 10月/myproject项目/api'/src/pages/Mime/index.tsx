import React, { Children } from "react"
import {connect} from "react-redux"
import actions from "../../store"
import {TypeMime} from "../../store/reducers/mime"
import {TypeRootState} from "../../store/reducers/index"
import { RouteComponentProps } from "react-router"

type StateProps=ReturnType<typeof mapStateToProps> 
type DispathProps=typeof actions;
interface Iparams{};
type RouteProps=RouteComponentProps<Iparams>
type Props=StateProps & DispathProps & RouteProps &{
    Children ? :any
}

class Mime extends React.Component<Props>{
    render(){
        return(
            <div>
                mime页
            </div>
        )
    }
}

let mapStateToProps=(state:TypeRootState):TypeMime=>state.mime
export default connect(mapStateToProps,actions)(Mime)
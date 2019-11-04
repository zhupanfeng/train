import React from "react"
import {connect} from "react-redux"
import actions from "../../store/actions/home"
import {TypeHome} from "../../store/reducers/home"
import {TypeRootState} from "../../store/reducers/index"
import { RouteComponentProps } from "react-router"
import HomeHeader from "./HomeHeader"

interface State{

}

// 合并Home组件中传入所有的数据的数据类型
type StateProps=ReturnType<typeof mapStateToProps> 
type DispathProps=typeof actions;
interface Iparams{};
type RouteProps=RouteComponentProps<Iparams>
type Props=StateProps & DispathProps & RouteProps &{
    children ?:any
}

class Home extends React.Component<Props,State>{
    render(){
        return(
            <div>
                <HomeHeader
                currentCategory={this.props.currentCategory}
                setCurrentCategory={this.props.setCurrentCategory}
                >
                </HomeHeader>
                home页
            </div>
        )
    }
}

let mapStateToProps=(state:TypeRootState):TypeHome=>state.home
export default connect(mapStateToProps,actions)(Home)
import React from "react"
import { connect } from "react-redux"
import actions from "../../store"
import { TypeProfile } from "../../store/reducers/profile"
import { TypeRootState } from "../../store/reducers/index"
import { RouteComponentProps } from "react-router"
import { Descriptions, Button } from 'antd';
import NavHeader from "../../components/NavHeader"
import 'antd/dist/antd.css';

type StateProps = ReturnType<typeof mapStateToProps>
type DispathProps = typeof actions;
interface Iparams { };
type RouteProps = RouteComponentProps<Iparams>
type Props = StateProps & DispathProps & RouteProps & {
    Children?: any
}

class Profile extends React.Component<Props>{
    render() {
        let main;//默认组件或登录组件或注册组件
        main = (
            <div className="user-info">
                <Descriptions title="用户信息" size="middle">
                    <Descriptions.Item label="用户名" >想想</Descriptions.Item>
                    <br/>
                    <Descriptions.Item label="手机号">1810000000</Descriptions.Item>
                    <br/>
                    <Descriptions.Item label="邮箱">67890@qq.com</Descriptions.Item>
                </Descriptions>
                <Button type="danger">退出登录</Button>
            </div>
        )
        return (
            <section>
                <NavHeader history={this.props.history}>个人中心</NavHeader>
                {main}
            </section>
        )
    }
}

let mapStateToProps = (state: TypeRootState): TypeProfile => state.profile
export default connect(mapStateToProps, actions)(Profile)
import React from "react"
import { connect } from "react-redux"
import { TypeRootState } from "../../store/reducers"
import { TypeProfile } from "../../store/reducers/profile"
import actions from "../../store/actions/profile"
import { RouteComponentProps } from "react-router"
import { Descriptions, Button, Alert } from 'antd';
import NavHeader from "../../components/NavHeader"
import 'antd/dist/antd.css';

type StateProps = ReturnType<typeof mapStateToProps>
type DispathProps = typeof actions;
interface Iparams { };
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps & DispathProps & RouteProps & {
    children?: any
}

class Profile extends React.Component<Props>{
    render() {
        let main; // 默认组件或登录组件或注册组件或用户信息组件
        if (false) {

        } else if (false) {
            // 用户登录
            main = (
                <div className="user-info">
                    <Descriptions title="用户信息">
                        <Descriptions.Item label="用户名">旺财</Descriptions.Item>
                        <Descriptions.Item label="手机号">1810000000</Descriptions.Item>
                        <Descriptions.Item label="邮箱">67890@qq.com</Descriptions.Item>
                    </Descriptions>
                    <Button type="danger">退出登录</Button>
                </div>
            )
        } else {
            main = (
                <>
                    <Alert type="warning" message="当前未登录" description="亲爱的用户你好，你当前尚未登录，请你选择注册或者登录" />
                    <div style={{ marginTop:'1rem' ,marginLeft: '1rem'}}>
                        <Button type="primary" htmlType="submit" onClick={() => this.props.history.push('/register')}>注册</Button>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: '1rem' }} onClick={() => this.props.history.push('/login')}>登录</Button>
                    </div>
                </>
            )

        }

        return (
            <section>
                <NavHeader history={this.props.history}>个人中心</NavHeader>
                {main}
            </section>
        )
    }
}
let mapStateToProps = (state: TypeRootState): TypeProfile => state.profile
export default connect(mapStateToProps, actions)(Profile);
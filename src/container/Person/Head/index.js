import React, {Component} from 'react'
import './style.scss'
import {inject, observer} from 'mobx-react'
import {removeItem} from "../../../utils/LocalStorage";

@inject("loginStore")
@observer
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    logout = () => {
        removeItem("islogin");
        removeItem("userinfo");
        removeItem("token");
        this.props.loginStore.logout();
    };

    render() {
        return (
            <div className="Head">
                <div className="user-img">
                    <img src={this.props.loginStore.userinfo.headImg} alt=""/>
                </div>
                <div className={"username"}>
                    <h2>{this.props.loginStore.userinfo.username}</h2>
                </div>
                <div>
                    <button onClick={this.logout}>退出登录</button>
                </div>
            </div>
        )
    }
}

export default Head
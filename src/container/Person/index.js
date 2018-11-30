import React, {Component} from 'react'
import {inject, observer} from "mobx-react"
import {removeItem} from "../../utils/LocalStorage";
import {withRouter, Switch, Link, Route} from "react-router-dom";


const BaseInfo = () => {
    return (<h1>基本信息</h1>)
};
const Address = () => (
    <h1>收货地址</h1>
);
@inject("loginStore")
@observer
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    logout = () => {
        removeItem("islogin");
        removeItem("username");
        removeItem("token");
        this.props.loginStore.logout();
        this.props.history.push("/");
    };

    render() {
        return (
            <div className='Person'>
                <h1>{"username：" + this.props.loginStore.username}</h1>
                <button onClick={this.logout}>退出登录</button>
                <ul>
                    <li><Link to="/person">基本信息</Link></li>
                    <li><Link to="/person/address">收货地址</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/person" component={BaseInfo}/>
                    <Route path="/person/address" component={Address}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Person)
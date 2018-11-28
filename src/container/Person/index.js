import React, {Component} from 'react'
import {inject,observer} from "mobx-react"
import {setItem} from "../../utils/LocalStorage";

@inject("loginStore")
@observer
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    logout = ()=>{
        setItem("islogin",false);
        this.props.loginStore.logout()
    };
    render() {
        return (
            <div className='Person'>
                <h1>{"username：" + this.props.loginStore.username}</h1>
                <button onClick={this.logout}>退出登录</button>
            </div>
        )
    }
}

export default Person
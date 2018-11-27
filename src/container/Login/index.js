import React, {Component} from 'react'
import './style.scss'
import {authLogin} from "../../api"
import {setItem} from "../../utils/LocalStorage"
import {inject,observer} from "mobx-react"
@inject("loginStore")
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }
    inputUsername = (event)=>{
        this.setState({
            username:event.target.value
        })
    };
    inputPassword = (event)=>{
        this.setState({
            password:event.target.value
        })
    };
    isLogin = ()=>{
        this.props.loginStore.login();
    };
    setUserinfo =(val)=>{
        this.props.loginStore.setUserinfo(val)
    };
    setToken = (val) => {
        this.props.loginStore.setToken(val);
    }
    login = ()=>{
        try {
            authLogin({
                username:this.state.username,
                password:this.state.password
            }).then((json)=>{
                if(json.status){
                    setItem("username",this.state.username);
                    setItem("islogin",true);
                    setItem("token",json.token);
                    this.setUserinfo(this.state.username);
                    this.isLogin();
                    this.setToken(json.token);
                    history.back()
                }else{
                    alert("用户名密码错误请重新填写")
                }
            })
        }catch (e) {
            console.log(e);
        }

    };
    render() {
        return (
            <div className='Login'>
                <div className="logo"/>
                <div className="am-list">
                    <div className="username">
                        <input type="text" name="username" id="username" value={this.state.username} placeholder={"手机号/邮箱/会员名"} onChange={this.inputUsername}/>
                    </div>
                    <div className="password">
                        <input type="password" name="password" id="password" value={this.state.password} placeholder={"请输入密码"} onChange={this.inputPassword}/>
                    </div>
                </div>
                <div className="loginBtn">
                    <button className="login" onClick={this.login}>登录</button>
                </div>
            </div>
        )
    }
}

export default Login
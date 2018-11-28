import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {authLogin} from "../../api";

//高阶组件传入一个组件作为参数经过处理返回一个新的组件
function CheckLogin ({component: Component,isLogin, ...rest}){
    authLogin({

    }).then(()=>{

    });
    return (
        <Route {...rest} render={props => (
            isLogin ? (<Component {...props}/>) : (
                <Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
        )}/>
    )
}
export default CheckLogin;
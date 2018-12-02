import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import Home from "./Home";
import Login from "./Login"
import NotFound from "./404/NotFound"
import Person from "./Person";
import OrderList from "./OrdersList";
import CheckLogin from "../components/Hoc/CheckLogin"
import OrderDes from "./OrderDes";
import {inject, observer} from "mobx-react"


library.add(faStroopwafel);

@inject("loginStore")
@observer
class App extends Component {
    constructor(props) {

        super(props);
        this.props.history.listen((location) => {
            console.log(location.pathname)
            switch (location.pathname) {
                case '/':
                    document.title = "淘宝网触屏版";
                    break;
                case '/person':
                    document.title = "我的淘宝";
                    break;
                case '/orders':
                    document.title = "订单列表";
                    break;
                default:
                    break;
            }
        })
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <CheckLogin path="/person" component={Person} isLogin={this.props.loginStore.isLogin}/>
                <CheckLogin path="/orders" component={OrderList} isLogin={this.props.loginStore.isLogin}/>
                <Route path="/odetail/:id" component={OrderDes}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }

}

export default withRouter(App);

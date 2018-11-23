import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import Home from "./Home";
import Login from "./Login"
import NotFound from "./404/NotFound"
import Person from "./Person";
import OrderList from "./OrdersList";
import CheckLogin from "../components/Hoc/CheckLogin"
import OrderDes from "./OrderDes";
library.add(faStroopwafel);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <CheckLogin path="/person" component={Person}/>
                    <Route path="/orders" component={OrderList}/>
                    <Route path="/order/:id" component={OrderDes}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        );
    }

}

export default App;

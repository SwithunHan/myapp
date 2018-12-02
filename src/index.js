import React from 'react';
import ReactDOM from 'react-dom';
import App from "./container/App";
import "amfe-flexible"
import 'reset-css'
import './static/css/main.scss'
import loginStore from './stores/loginStore'
import {Provider} from "mobx-react";
import {Router} from "react-router-dom";
import {history} from "./history";

const stores = {loginStore};
ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import Home from "./Home";
import NotFound from "./404/NotFound"
library.add(faStroopwafel)

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
                        <Route path="*" component={NotFound}/>
                    </Switch>
            </Router>
        );
    }

}

export default App;

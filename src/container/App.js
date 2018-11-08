import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../components/Header'
import NotFound from './NotFound';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    {/*<Switch>*/}
                        {/*<Route path="/" exact component={Home}/>*/}
                        {/*<Route path="/about" component={About}/>*/}
                        {/*<Route component={NotFound}/>*/}
                    {/*</Switch>*/}
                </div>
            </Router>
        );
    }
}

export default App;

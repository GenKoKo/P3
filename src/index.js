import "./style.scss";
import React from "react";
import ReactDom from "react-dom";
import App from './App.js';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

 
class WholeWeb extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/list' component={App} />
                </Switch>
            </Router>
        )
    }
}


ReactDom.render(<WholeWeb/>, document.getElementById("root"));


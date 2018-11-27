import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Access from './components/Access';
import Dashboard from './components/Dashboard';

const App = (
    <Router>
        <Switch>
            <Route path='/access' component={Access}/>
            <Route path='/' component={Dashboard}/>
        </Switch>
    </Router>
);
ReactDOM.render(App, document.getElementById('root'));

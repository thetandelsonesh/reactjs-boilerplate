import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './Login';
import Register from './Register';

class Access extends Component {

    render() {

        const ChildRoutes = (
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </Switch>
        );

        return (
            <div>
                <ChildRoutes/>
            </div>
        );
    }
}

export default Access;
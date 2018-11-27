import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './Login';
import Register from './Register';

class Access extends Component {

    render() {

        const childRoutes = (
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </Switch>
        );

        return (
            <div>
                {childRoutes}
            </div>
        );
    }
}

export default Access;
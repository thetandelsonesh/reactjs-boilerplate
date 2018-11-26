import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { DatePicker } from 'antd';

import Home from './Home';
import Events from './Events';

class Dashboard extends Component {
    render() {
        const ChildRoutes = (
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/events' component={Events}/>
            </Switch>
        );

        return (
            <div>
                <DatePicker />
                {ChildRoutes}
            </div>
        );
    }
}

export default Dashboard;
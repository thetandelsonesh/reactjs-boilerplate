import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './index.scss';


import Header from './_components/Header';
import Sidebar from './_components/Sidebar';
import Footer from './_components/Footer';

import Home from './Home';
import Events from './Events';

class Dashboard extends Component {
    render() {
        const childRoutes = (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/events' component={Events}/>
            </Switch>
        );

        return (
            <div className='dashboard'>
                <Header/>
                <Sidebar/>
                <div>
                    <div className='mainbar'>
                        {childRoutes}
                        <Footer/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;
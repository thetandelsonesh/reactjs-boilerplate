import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.scss';

import Access from './components/Access';
import Dashboard from './components/Dashboard';

const App = (
  <div>
      <Router>
          <Switch>
              <Route path='/access' component={Access}/>
              <Route path='/' component={Dashboard}/>
          </Switch>
      </Router>
  </div>
);
ReactDOM.render(App, document.getElementById('root'));

import {
  IndexRoute,
  Route,
  Router,
  browserHistory
} from 'react-router';

import React from 'react';

import App from '../containers/App';
import Home from '../containers/Home';
import About from '../containers/About';
import SimpleSelector from '../containers/SimpleSelector';
import NotFound from '../containers/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home} />
      <Route component={About} path='about'/>
      <Route component={SimpleSelector} path='select'/>
      <Route component={NotFound} path='*' />
    </Route>
  </Router>
);

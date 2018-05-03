import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Details from './containers/Details';
import List from './containers/List';
import { NotFound } from './components';

const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route exact={true} path='/' component={List}/>
      <Route path='/details/:asteroidId' component={Details}/>
      <Route path='/notfound' component={NotFound}/>
      <Redirect from='*' to='/notfound'/>
    </Switch>
  </BrowserRouter>

export default Router;

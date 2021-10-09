import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

import CreateProviders from './pages/CreateProviders';
import ListProviders from './pages/ListProviders';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NavBar} />
        <Route exact path="/register" component={ListProviders} />
        <Route exact path="/providers" component={CreateProviders} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
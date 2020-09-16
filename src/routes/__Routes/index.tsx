import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from '../../containers/LandingPage';
import Home from '../../containers/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

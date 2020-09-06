
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Details from '../Details';
import Spinner from '../Spinner';
import Header from '../Header';

function AppNavigation(): React.ReactElement {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/details/:selectedId" component={Details} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppNavigation;

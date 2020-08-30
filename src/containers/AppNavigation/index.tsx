
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Details from '../Details';

function AppNavigation(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default AppNavigation;

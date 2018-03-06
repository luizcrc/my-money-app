import React from 'react';
import { Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard.jsx';
import BillingCycle from '../billingCycle/billingCycle.jsx';

export default props => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/dashBoard' component={Dashboard} />
        <Route exact path='/billingCycles' component={BillingCycle} />
        <Route component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
)
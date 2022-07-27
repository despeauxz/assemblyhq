import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "./history";

// Pages
import SearchPage from "./views/Search";
import ResultsPage from "./views/Results";


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/search/:q" component={ResultsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
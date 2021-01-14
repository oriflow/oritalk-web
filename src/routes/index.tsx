import LoginPage from 'pages/auth/login';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

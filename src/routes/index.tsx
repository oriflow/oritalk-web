import MenuBar from 'components/Layout/MenuBar';
import LoginPage from 'pages/auth/login';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { menu } from './menu';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <MenuBar>
          {menu.map(route => (
            <Route path={route.path} component={route.component} exact />
          ))}
        </MenuBar>
      </Switch>
    </Router>
  );
};

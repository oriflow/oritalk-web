import MenuBar from 'components/Layout/MenuBar';
import LoginPage from 'pages/auth/login';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { clients_routes } from './client.routes';
import { menu } from './menu';

export const Routes = () => {
  const routes = [...menu, ...clients_routes];

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />

        <MenuBar>
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
        </MenuBar>
      </Switch>
    </Router>
  );
};

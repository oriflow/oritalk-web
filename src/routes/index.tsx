import MenuBar from 'components/MenuBar';
import HooksProvider from 'hooks';
import LoginPage from 'pages/auth/login';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { app_routes } from './app.routes';
import { menu } from './menu';

export const Routes = () => {
  const routes = [...menu, ...app_routes];

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <HooksProvider>
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
        </HooksProvider>
      </Switch>
    </Router>
  );
};

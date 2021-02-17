import MenuBar from 'components/MenuBar';
import { RouteProvider } from 'hooks';
import { useAuth } from 'hooks/auth';
import LoginPage from 'pages/auth/login';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { app_routes } from './app.routes';
import { menu } from './menu';

export const Routes = () => {
  const routes = [...menu, ...app_routes];
  const { auth } = useAuth();

  if (auth?.loaded)
    return (
      <Router>
        <Switch>
          <RouteProvider>
            {!auth?.isAuth ? (
              <Route path="/oritalk-web" exact component={LoginPage} />
            ) : (
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
            )}
          </RouteProvider>
        </Switch>
      </Router>
    );
  return <div />;
};

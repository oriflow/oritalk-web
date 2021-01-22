import MenuBar from 'components/Layout/MenuBar';
import LoginPage from 'pages/auth/login';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { menu } from './menu';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />

        <MenuBar>
          {menu.map(route => (
            <>
              <Route path={route.path} component={route.component} exact />
              {!!route.child &&
                route.child.map(item => (
                  <Route path={item.path} component={item.component} exact />
                ))}
            </>
          ))}
        </MenuBar>
      </Switch>
    </Router>
  );
};

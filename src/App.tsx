import React, {Suspense} from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {

  return (
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
              {routes.map((route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.component} />)}
          </Switch>
      </Suspense>
  );
}

export default withRouter(App);

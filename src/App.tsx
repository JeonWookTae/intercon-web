import React, {Suspense, Fragment} from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import Menu from './components/layout/Menu'
import routes from './routes';

const App: React.FC = () => {

    return (
        <Fragment>
            <Menu/>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route, index) => <Route key={index} path={route.path} exact={route.exact}
                                                         component={route.component}/>)}
                </Switch>
            </Suspense>
        </Fragment>
    );
};

export default withRouter(App);

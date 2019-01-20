/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login'

const AppRouter = () =>
(
    <HashRouter>
    <div>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/dashboard" component={App} />
        </Switch>
    </div>
    </HashRouter>
);

export default AppRouter;
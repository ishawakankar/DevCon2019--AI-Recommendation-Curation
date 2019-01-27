/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */

'use strict';

import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login'

const AppRouter = () =>
(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/home" component={App}exact={true}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;
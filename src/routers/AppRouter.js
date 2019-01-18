/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login'

const AppRouter = () =>
(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/" component={App} exact={true}/>
            {/* <Route path="/dashboard" component={App} /> */}
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;
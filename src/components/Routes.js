import React from 'react'
import { Router, Switch, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import history from './history';

function Routes() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes

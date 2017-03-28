import { Router, Route } from 'react-router'
import React from 'react'
import history from './history'
import App from './RouteHandlers/App'
import HelloRouter from './RouteHandlers/HelloRouter'
import CounterRoute from './RouteHandlers/CounterRoute'
import RootRoute from './RouteHandlers/RootRoute'
import MUIRoute from './RouteHandlers/MUIRoute'

export default (
    <Router history = {history}>
        <Route path = "/" component = {MUIRoute} />
    </Router>
)
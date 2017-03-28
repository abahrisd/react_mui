import React from 'react'
import { render } from 'react-dom'
import store from './store'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

window.store = store

render(routes, document.getElementById('container'))
import { createStore, compose } from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

if (module.hot) {
    module.hot.accept('../reducer', () =>
        store.replaceReducer(require('../reducer').default)
    );
}
export default store
import React, { Component, PropTypes } from 'react'
import Counter from '../containers/Counter'
import { Provider } from 'react-redux'

class CounterRoute extends Component {

    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}

export default CounterRoute
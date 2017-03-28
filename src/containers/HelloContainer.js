import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    Hello world!
                </div>
            </Provider>
        )
    }
}

export default Root
import React, { Component, PropTypes } from 'react'
import HelloContainer from '../containers/HelloContainer'

class HelloRouter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <HelloContainer />
            </div>
        )
    }
}

export default HelloRouter
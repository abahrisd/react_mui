import React, { Component, PropTypes } from 'react'
import Root from '../containers/Root'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MUIRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <MuiThemeProvider>
                <Root />
            </MuiThemeProvider>
        )
    }
}

export default MUIRoute
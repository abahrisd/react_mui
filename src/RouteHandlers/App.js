import React, { Component, PropTypes } from 'react'
import store from '../store'
//import { Link } from 'react-router'
import NavLink from '../containers/NavLink'
import { Provider } from 'react-redux'

class App extends Component {

    /*render(){

    }*/
    render() {
        return (
            <div>
                <h1>App!</h1>
                <ul role="nav">
                    <li><NavLink to="/hello" >Hello</NavLink></li>
                    <li><NavLink to="/counter" >Counter</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App
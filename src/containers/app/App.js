import React, { Component } from 'react';

import { connect } from 'react-redux';
import Calc from '../../containers/calc/Calc';

import './app.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                
                <Calc />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: null,
    };
};

export default connect(
    mapStateToProps
)(App);

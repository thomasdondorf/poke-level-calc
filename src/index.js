import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

window.$ = window.jQuery=require('jquery');
window.Tether=require('tether');
require('bootstrap/dist/js/bootstrap');

import configureStore from './store/configureStore';

import App from './containers/app/App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import APP from './App';
import './index.css';

const store = configureStore();

render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById('root')
);
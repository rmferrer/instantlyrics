import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk'

import App from './components/app';
import redux_store from './redux-store';

const createStoreWithMiddleware = compose(applyMiddleware(reduxPromise, thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f)
(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(redux_store)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

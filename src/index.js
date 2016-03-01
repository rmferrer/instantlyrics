import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import redux_store from './redux-store';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise),
  window.devToolsExtension ? window.devToolsExtension() : f => f)
(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(redux_store)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

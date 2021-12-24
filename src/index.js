import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, compose, appliMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducer'

const store = createStore (reducers, compose(appliMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
  
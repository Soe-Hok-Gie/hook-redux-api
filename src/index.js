import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, compose, appliMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

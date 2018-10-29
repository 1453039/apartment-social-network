import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter as Router} from 'react-router-dom';

import './styles/Layout.scss';
import './styles/Typography.scss';
import './styles/Common.scss';

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById ('root')
);

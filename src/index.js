import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter as Router} from 'react-router-dom';

import '../public/styles/Layout.scss';
import '../public/styles/Typography.scss';
import '../public/styles/Common.scss';

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById ('root')
);

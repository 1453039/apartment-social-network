import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import createHistory from 'history/createHashHistory';

const history = createHistory();

ReactDOM.render (
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById ('root')
);

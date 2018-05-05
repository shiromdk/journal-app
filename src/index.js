import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise'
import reducers from './reducers';

import './index.css';
import './App.css';

import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(
  createStore
);
const App = () =>
      <div className="App">
        <Nav/>
        <Main />
      </div>;





ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

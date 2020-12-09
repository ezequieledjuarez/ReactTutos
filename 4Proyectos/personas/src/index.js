import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux' //Conecta redux con router
import thunk from 'redux-thunk'
import reducers from './reducers'

const history = createHistory()
const middleware = [ routerMiddleware(history), thunk] 

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  //El provider se encarga de conectar react & redux, se le debe pasar una store
  <Provider store = {store}>
     <App history = {history} />
  </Provider>,

  document.getElementById('root')
);


reportWebVitals();

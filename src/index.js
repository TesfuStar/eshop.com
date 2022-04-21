import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store,persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { cartTotal } from './Redux/cartReducer';
import {BrowserRouter } from "react-router-dom";
store.dispatch(cartTotal())
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';

import Routes from "./Routes";

const store = configureStore();

ReactDOM.render(
   <Provider store={store}>
      <div className="app ui container">
         <Routes />
      </div>
   </Provider>
, document.querySelector('#root'));



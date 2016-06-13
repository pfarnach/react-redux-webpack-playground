import '../styles/application.sass'
import '../index.html'

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './containers/app';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
  	<App />
  </Provider>, 
  document.querySelector('.application')
);

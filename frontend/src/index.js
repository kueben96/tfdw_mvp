import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import Routes from './routes';
import { store } from './store';
import { Provider } from 'react-redux';

import './resources/styles/styles.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
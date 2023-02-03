import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './resources/styles/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './routes';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App></App>} />
      </Routes>
    </Router>
  </Provider>
);
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './resources/styles/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './routes';

const root = ReactDOMClient.createRoot(document.getElementById('root'));


// TODO: implement persistent state handling
// State is currently not persisted on page reloads.
// The redux selectors are losing the information on each reload.
// In order to make data persistens throught the session,
// data is stored in the local storage of the browser. (see authSlice.js)
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App></App>} />
      </Routes>
    </Router>
  </Provider>
);
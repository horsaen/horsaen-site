import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import FrHome from './fr/FrHome.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/fr" element={<FrHome />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import Test from "./components/Test.js";
import FrHome from "./components/Fr.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/fr" elemtent={<FrHome />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
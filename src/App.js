import React from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js'

export default function App() {
  return (
    <Navbar />
  );
}
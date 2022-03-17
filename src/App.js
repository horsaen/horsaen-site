import { Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';

export default function App() {
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
}
import './App.css';

import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Footer />
    </>
  );
}
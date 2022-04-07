import { Link } from 'react-router-dom';

import Landing from "./components/Landing.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

export default function AppFr () {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Footer />
        </>
    );
}
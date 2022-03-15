import React from "react";

import "./App.css";

import Navbar from "./components/Navbar.js";
import Landing from "./components/Landing.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}
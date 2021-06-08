import React from "react";

import Header from './layout/Header'
import Footer from './layout/Footer'

import DrumMachine from './pages/DrumMachine'

export default function App() {
  return (
    <Router>
      <>
        <Header />

        <div className="container">
          <DrumMachine />
        </div>

        <Footer />
      </>
    </Router>
  );
}
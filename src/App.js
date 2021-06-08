import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './layout/Header'
import Footer from './layout/Footer'

import Home from './pages/Home'
import DrumMachine from './pages/DrumMachine'

export default function App() {
  return (
    <Router>
      <>
        <Header />

        <div className="container">
          <Switch>
            <Route path="/react-drum-machine/drum-machine/">
              <DrumMachine />
            </Route>
            <Route path="/react-drum-machine/">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </>
    </Router>
  );
}
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import './style.css'

import LandingPage from "./components/LandingPage";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume-builder" component={ResumeBuilder} />
      </Switch>
    </Router>
  );
}

export default App;

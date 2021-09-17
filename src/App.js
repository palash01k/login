import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Forms from "./forms";
import "./App.css";
import Dashboard from "./dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <div className="App">
        <h1>Login Page</h1>
        <Forms></Forms>
      </div>
    </div>
  );
}
export default App;

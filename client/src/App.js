import React from "react";

import Display from "./components/display/Display";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  balls = () => {};

  strikes = () => {};

  fouls = () => {};

  hits = () => {};

  render() {
    return (
      <div className="App">
        <h2>Baseball</h2>
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;

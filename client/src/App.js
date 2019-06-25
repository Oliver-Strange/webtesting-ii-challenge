import React from "react";

import Display from "./components/display/Display";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

/*
Count Rules
    balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
    balls and strikes reset to 0 when a hit is recorded.
    a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. 
    With 1 strike, a foul makes it 2 strikes. 
    With two strikes a foul has no effect, count stays at 2 strikes.
*/

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  balls = () => {
    if (this.state.balls === 4) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState({
        balls: this.state.balls + 1
      });
    }
  };

  strikes = () => {
    if (this.state.strikes === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  fouls = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

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

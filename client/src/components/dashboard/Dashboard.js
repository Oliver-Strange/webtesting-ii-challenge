/*
Dashboard
    provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
    there is NO need to specify the type of hit (single, double, etc).
    changes recorded on this component should update the information shown by the Display component.
*/
import React from "react";

function Dashboard(props) {
  return (
    <div>
      <h2>Dashboard</h2>
      <button data-testid="ball" onClick={props.balls}>
        Ball!
      </button>
      <button data-testid="strike" onClick={props.strikes}>
        Strike!
      </button>
      <button data-testid="foul" onClick={props.fouls}>
        Foul!
      </button>
      <button data-testid="hit" onClick={props.hit}>
        Hit!
      </button>
    </div>
  );
}

export default Dashboard;

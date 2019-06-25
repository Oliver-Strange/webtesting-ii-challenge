/*
Dashboard
    provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
    there is NO need to specify the type of hit (single, double, etc).
    changes recorded on this component should update the information shown by the Display component.
*/
import React from "react";

function Display(props) {
  console.log(props);
  return (
    <div>
      <h2>Display</h2>
      <h4>balls: {props.balls}</h4>
      <h4>strikes: {props.strikes}</h4>
    </div>
  );
}

export default Display;

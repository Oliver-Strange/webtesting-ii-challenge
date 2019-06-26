/*
Display
    display the count of balls and strikes for the at-bat.
    should be updated when the user records activity on the Dashboard component.
*/
import React from "react";

function Display(props) {
  console.log(props);
  return (
    <div>
      <h2>Display</h2>
      <h4>balls: {props.balls}</h4>
      <h4>strikes: {props.strikes}</h4>
      <h4>fouls: {props.fouls}</h4>
    </div>
  );
}

export default Display;

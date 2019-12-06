import React from "react";

export default function Display(props) {
  return (
    <div>
      <h2 data-testid="count" className="strikeboard">
        Strikes: {props.strike}
      </h2>
      <h2 className="ballboard">Balls: {props.ball} </h2>
    </div>
  );
}

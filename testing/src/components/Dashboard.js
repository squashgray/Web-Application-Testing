import React from "react";

export default function Dashboard(props) {
  return (
    <div>
      <button data-testid="strikes_button" onClick={props.strikeCounter}>
        Strike
      </button>
      <button data-testid="balls_button" onClick={props.ballCounter}>
        Ball
      </button>
      <button data-testid="fouls_button" onClick={props.foulCounter}>
        Foul
      </button>
      <button data-testid="hits_button" onClick={props.hitCounter}>
        Hit
      </button>
    </div>
  );
}

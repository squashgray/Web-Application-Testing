import React from "react";

export default function Dashboard(props) {
  return (
    <div>
      <button onClick={props.strikeCounter}>Strike</button>
      <button onClick={props.ballCounter}>Ball</button>
      <button onClick={props.foulCounter}>Foul</button>
      <button onClick={props.hitCounter}>Hit</button>
    </div>
  );
}

import React from "react";

export default function Display(props) {
  return (
   <div>
     <h2>Strike: {props.strike} </h2>
     <h2>Ball: {props.ball} </h2>
   </div>
  );
}

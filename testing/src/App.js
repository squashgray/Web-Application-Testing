import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const strikeCounter = () =>
    strike < 2 ? setStrike(strike + 1) : setStrike(0);

  const ballCounter = () => (ball < 3 ? setBall(ball + 1) : setBall(0));

  const foulCounter = () => (strike < 2 ? setStrike(strike + 1) : "");

  const hitCounter = () => {
    setStrike(0);
    setBall(0);
  };

  return (
    <div className="App">
      <Display strike={strike} ball={ball} />
      <Dashboard
        hitCounter={hitCounter}
        foulCounter={foulCounter}
        ballCounter={ballCounter}
        strikeCounter={strikeCounter}
      />
    </div>
  );
}

export default App;

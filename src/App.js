import React, { useState, useEffect } from "react";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
import "./App.css";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0)
  const onChangeScore = () => {
    setScore((score)=>score + 1);
  };

  const onReset = () => {
    if (score > best) {
      setBest(score)
    }
    setScore(0)
  }

  return (
    <div className="App">
      <Scoreboard score={score} best={best}/>
      <Board increaseScore={onChangeScore} reset={onReset} score={score}/>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
import "./App.css";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const onChangeScore = () => {
    setScore((score) => score + 1);
  };

  const onReset = () => {
    if (score > best) {
      setBest(score);
    }
    setScore(0);
  };

  return (
    <div className="App flex flex-1 flex-col w-full items-stretch font-bangers min-h-screen">
      <div className="flex flex-1 justify-around items-center w-full text-xl bg-header-black text-white flex-none p-4"> 
        <div>
          <h1 className="text-6xl text-text-orange">Anime Memory Card Game</h1>
          <p>
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
        </div>
        <Scoreboard score={score} best={best} />
      </div>
      <Board increaseScore={onChangeScore} reset={onReset} score={score} />
    </div>
  );
};

export default App;

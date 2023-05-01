import React, { useState } from "react";
import { Card } from "./Card";

export const Board = (props) => {
  const [clickedArr, setClickedArr] = useState(Array(12).fill(false));

  const resetClicked = () => {
    setClickedArr(() => {
      return Array(12).fill(false);
    });
  };

  const toggleClicked = (num) => {
    if (!clickedArr[num]) {
      setClickedArr((clickedArr) => {
        const newClickedArr = [...clickedArr];
        newClickedArr[num] = true;
        return newClickedArr;
      });
    } else {
      resetClicked();
    }
  };

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  const numbers = [...Array(12).keys()];

  const cards = numbers.map((num) => {
    return (
      <Card
        key={num}
        num={num}
        clicked={clickedArr[num]}
        increaseScore={props.increaseScore}
        toggleClicked={toggleClicked.bind(null, num)}
        resetClicked={resetClicked}
        resetScore={props.reset}
      />
    );
  });
  return <div>{cards}</div>;
};

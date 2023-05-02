import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";

export const Board = (props) => {
  const [clickedArr, setClickedArr] = useState(Array(12).fill(false));
  const [clickCounter, setClickCounter] = useState(0);

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
      setClickCounter((prev) => {
        return prev + 1;
      });
    } else {
      resetClicked();
    }
  };

  const shuffleArray = (array) => {
    const newArr = [...array]
    for (var i = newArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    return newArr
  };

  const numbers = [...Array(12).keys()];

  let cards = numbers.map((num) => {
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

  cards = useRef(cards)

  useEffect(() => {
    console.log("Use effect triggered");
    cards.current = shuffleArray(cards.current)
  }, [clickCounter]);
  // shuffleArray(cards)

  return (
    <div>
      Clicks: {clickCounter}
      {cards.current}
    </div>
  );
};

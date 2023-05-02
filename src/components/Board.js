import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";

export const Board = (props) => {
  const itemList = [
    { num: 0, clicked: false },
    { num: 1, clicked: false },
    { num: 2, clicked: false },
    { num: 3, clicked: false },
    { num: 4, clicked: false },
    { num: 5, clicked: false },
    { num: 6, clicked: false },
    { num: 7, clicked: false },
    { num: 8, clicked: false },
    { num: 9, clicked: false },
    { num: 10, clicked: false },
    { num: 11, clicked: false },
  ];

  const [items, setItems] = useState(itemList);

  const resetClicked = () => {
    setItems((prev) => {
      return prev.map((item) => {
        return { ...item, clicked: false };
      });
    });
  };

  const toggleClicked = (num) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].num === num) {
        if (!items[i].clicked) {
          setItems((prev) => {
            const newArr = [...prev];
            newArr[i].clicked = true;
            return newArr;
          });
        } else {
          resetClicked();
        }
      }
    }
  };

  const shuffleArray = () => {
    setItems((prev) => {
      const newArr = [...prev];
      for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
      return newArr;
    });
  };

  let cards = items.map((item) => {
    return (
      <Card
        key={item.num}
        num={item.num}
        clicked={item.clicked}
        increaseScore={props.increaseScore}
        toggleClicked={toggleClicked.bind(null, item.num)}
        resetClicked={resetClicked}
        resetScore={props.reset}
      />
    );
  });

  useEffect(() => {
    shuffleArray();
  }, [props.score]);

  return <div>{cards}</div>;
};

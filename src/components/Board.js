import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import Luffy from "../images/1-monkey-d-luffy-1660778366362.jpeg"
export const Board = (props) => {
  const itemList = [
    { num: 0, clicked: false, src: Luffy},
    { num: 1, clicked: false, src: "../images/2-edward-elric-1660778366361.jpg"},
    { num: 2, clicked: false, src: "../images/3-naruto-1660778366362.png" },
    { num: 3, clicked: false, src: "../images/5-goku-1660778366361.jpg"},
    { num: 4, clicked: false, src: "../images/6-spike-spiegel-1660778366361.png" },
    { num: 5, clicked: false, src: "../images/7-vegeta-1660778366361.jpg" },
    { num: 6, clicked: false, src: "../images/10-kenshin-himura-1660778366361.jpg" },
    { num: 7, clicked: false, src: "../images/11-l-1660778366361.jpg" },
    { num: 8, clicked: false, src: "../images/12-tanjiro-1660778366362.jpeg" },
    { num: 9, clicked: false, src: "../images/16-guts-1660778366362.jpg" },
    { num: 10, clicked: false, src: "../images/20-gon-1660778366362.jpeg" },
    { num: 11, clicked: false, src: "../images/24-vash-1660778366361.jpg" },
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
        src={item.src}
      />
    );
  });

  useEffect(() => {
    shuffleArray();
  }, [props.score]);

  return <div>{cards}</div>;
};

import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import luffy from "../images/1-monkey-d-luffy-1660778366362.jpeg";
import edward from "../images/2-edward-elric-1660778366361.jpg";
import naruto from "../images/3-naruto-1660778366362.png";
import goku from "../images/5-goku-1660778366361.jpg";
import spike from "../images/6-spike-spiegel-1660778366361.png";
import vegeta from "../images/7-vegeta-1660778366361.jpg";
import kenshin from "../images/10-kenshin-himura-1660778366361.jpg";
import l from "../images/11-l-1660778366361.jpg";
import tanjiro from "../images/12-tanjiro-1660778366362.jpeg";
import guts from "../images/16-guts-1660778366362.jpg";
import gon from "../images/20-gon-1660778366362.jpeg";
import vash from "../images/24-vash-1660778366361.jpg";

export const Board = (props) => {
  const itemList = [
    { num: 0, clicked: false, src: luffy, name: "Monkey D. Luffy" },
    { num: 1, clicked: false, src: edward, name: "Edward Elric" },
    { num: 2, clicked: false, src: naruto, name: "Naruto Uzumaki" },
    { num: 3, clicked: false, src: goku, name: "Goku" },
    { num: 4, clicked: false, src: spike, name: "Spike Spiegel" },
    { num: 5, clicked: false, src: vegeta, name: "Vegeta" },
    { num: 6, clicked: false, src: kenshin, name: "Himura Kenshin" },
    { num: 7, clicked: false, src: l, name: "L" },
    { num: 8, clicked: false, src: tanjiro, name: "Tanjiro" },
    { num: 9, clicked: false, src: guts, name: "Guts" },
    { num: 10, clicked: false, src: gon, name: "Gon Freecss" },
    { num: 11, clicked: false, src: vash, name: "Vash the Stampede" },
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
        name={item.name}
      />
    );
  });

  useEffect(() => {
    shuffleArray();
  }, [props.score]);

  return <div className="flex flex-wrap gap-4 justify-center">{cards}</div>;
};

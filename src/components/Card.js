import React, { useState, useEffect } from "react";

export const Card = (props) => {
  const checkScore = () => {
    if (!props.clicked) {
      props.toggleClicked();
      props.increaseScore();
      console.log(props.num);
    } else {
      props.resetClicked();
      props.resetScore();
    }
  };

  return (
    <div
      onClick={checkScore}
      className="rounded-lg bg-gradient-to-r from-end-grad to-start-grad p-4 border-box w-96 h-60 flex-none hover:drop-shadow-3xl hover:text-white hover:cursor-pointer"
    >
      <div className="h-40 border-box overflow-hidden rounded-lg">
        <img src={props.src} alt={props.name} className="rounded-lg" />
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

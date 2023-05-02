import React, { useState, useEffect } from "react";

export const Card = (props) => {
  
    const checkScore = () => {
      if (!props.clicked ) {
          props.toggleClicked()
          props.increaseScore()
          console.log(props.num)
      } else {
          props.resetClicked()
          props.resetScore();
      }
  }

  return (
      <div onClick={checkScore} className="card">
          <img src={props.src} alt="" ></img>
      </div>
  )

  
};

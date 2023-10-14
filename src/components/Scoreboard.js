import React from "react";

export const Scoreboard = (props) => {
  return (
    <div>
      Score: {props.score} Best: {props.best}
    </div>
  );
};

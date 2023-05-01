import React, { useState, useEffect } from "react";

export const Scoreboard = (props) => {
  return (
    <div>
      Score: {props.score} Best: {props.best}
    </div>
  );
};

import React, { useState } from "react";
import { IInputValues } from "../Board/Board";

interface ISquareProps {
  handleMouseDown: (row: number, col: number) => void;
  handleMouseEnter: (row: number, col: number) => void;
  handleMouseUp: () => void;
  isColored: boolean;
  col: number;
  row: number;
  nodeColor: string;
}
// style={{ backgroundColor: nodeColor }}
const Square: React.FC<ISquareProps> = ({
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
  col,
  row,
  isColored,
  nodeColor,
}) => {
  return (
    <article
      draggable={false}
      className={`node `}
      style={
        isColored
          ? { backgroundColor: nodeColor }
          : { backgroundColor: "inherit" }
      }
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseUp()}
    ></article>
  );
};

export default Square;

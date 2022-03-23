import React, { useState } from "react";
import { IInputValues } from "../Board/Board";
import { IButtonToggle } from "../Taskbar/Taskbar";

interface ISquareProps {
  handleMouseDown: (
    e: { preventDefault: () => void },
    row: number,
    col: number
  ) => void;
  handleMouseEnter: (row: number, col: number) => void;
  handleMouseUp: () => void;
  isColored: boolean;
  col: number;
  row: number;
  nodeColor: string;
  buttonToggled: IButtonToggle;
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
  buttonToggled,
}) => {
  const extraClass = buttonToggled.gridLines ? "nodeGridLines" : "noGridLines";
  return (
    <article
      draggable={false}
      className={`node ${extraClass}`}
      style={
        isColored
          ? { backgroundColor: nodeColor }
          : { backgroundColor: "inherit" }
      }
      onMouseDown={(e) => handleMouseDown(e, row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseUp()}
      onContextMenu={(e) => e.preventDefault()}
    ></article>
  );
};

export default Square;

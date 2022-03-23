import React from "react";
import { IGrid } from "../Sketch/Sketch";
import Square from "../Square/Square";
import { IButtonToggle } from "../Taskbar/Taskbar";

interface IBoardProps {
  board: IGrid;
  handleMouseDown: (
    e: { preventDefault: () => void },
    row: number,
    col: number
  ) => void;
  handleMouseEnter: (row: number, col: number) => void;
  handleMouseUp: () => void;
  bgColor?: string;
  values: IInputValues;
  buttonToggled: IButtonToggle;
}

export interface IInputValues {
  gridLines: number;
}

const Board: React.FC<IBoardProps> = ({
  board,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
  bgColor,
  values,
  buttonToggled,
}) => {
  return (
    <div draggable={false}>
      {board.grid.map((row, rowindex) => {
        return (
          <div
            key={rowindex}
            className="row"
            draggable={false}
            style={{
              backgroundColor: bgColor,
              gridTemplateColumns: `repeat(${values.gridLines}, minmax(0, 1fr))`,
            }}
          >
            {row.map((node, nodeIndex) => {
              const { row, col, isColored, nodeColor } = node;
              return (
                <Square
                  key={nodeIndex}
                  isColored={isColored}
                  handleMouseDown={handleMouseDown}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseUp={handleMouseUp}
                  row={row}
                  col={col}
                  nodeColor={nodeColor}
                  buttonToggled={buttonToggled}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;

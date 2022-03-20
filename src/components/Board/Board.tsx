import React from "react";
import { IGrid } from "../Sketch/Sketch";
import Square from "../Square/Square";

interface IBoardProps {
  board: IGrid;
  handleMouseDown: (row: number, col: number) => void;
  handleMouseEnter: (row: number, col: number) => void;
  handleMouseUp: () => void;
  bgColor?: string;
}

const Board: React.FC<IBoardProps> = ({
  board,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
  bgColor,
}) => {
  return (
    <div>
      {board.grid.map((row, rowindex) => {
        return (
          <div key={rowindex} className="row">
            {row.map((node, nodeIndex) => {
              const { row, col, isColored } = node;
              return (
                <Square
                  key={nodeIndex}
                  isColored={isColored}
                  handleMouseDown={handleMouseDown}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseUp={handleMouseUp}
                  row={row}
                  col={col}
                  bgColor={bgColor}
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

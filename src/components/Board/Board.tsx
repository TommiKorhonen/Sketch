import React from "react";
import { IGrid } from "../Sketch/Sketch";
import Square from "../Square/Square";

interface IBoardProps {
  board: IGrid;
  handleMouseDown: (row: number, col: number) => void;
  handleMouseEnter: (row: number, col: number) => void;
  handleMouseUp: () => void;
  bgColor?: string;
  values: IInputValues;
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

import React from "react";

interface ISquareProps {
  isColored: boolean;
  handleMouseDown: (row: number, col: number) => void;
  handleMouseEnter: (row: number, col: number) => void;
  handleMouseUp: () => void;
  col: number;
  row: number;
  bgColor?: string;
}

const Square: React.FC<ISquareProps> = ({
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
  col,
  row,
  isColored,
  bgColor,
}) => {
  const extraClass = isColored ? "colored-node" : "";
  return (
    <article
      className={`node ${extraClass}`}
      style={{ backgroundColor: bgColor }}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseUp()}
    ></article>
  );
};

export default Square;

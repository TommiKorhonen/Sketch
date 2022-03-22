import React, { useEffect, useState } from "react";
import Board, { IInputValues } from "../Board/Board";
import Taskbar from "../Taskbar/Taskbar";

export interface IGrid {
  grid: INode[][];
  mouseIsPressed?: boolean;
}
export interface INode {
  row: number;
  col: number;
  isColored: boolean;
  nodeColor: string;
}
const Sketch = () => {
  const [buttonToggled, setButtonToggled] = useState({
    eraser: false,
  });
  // const [eraserToggled, setEraserToggled] = useState(false);
  const [color, setColor] = useState("#aabbcc");
  const [bgColor, setbgColor] = useState("#FFFFFF");
  const [board, setBoard] = useState<IGrid>({
    grid: [],
    mouseIsPressed: false,
  });
  const [values, setValues] = useState<IInputValues>({
    gridLines: 24,
  });

  let handleChange = (e: { target: { name: any; value: any } }) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleMouseDown = (row: number, col: number) => {
    const newGrid = handleColoring(board.grid, row, col);
    setBoard({ grid: newGrid, mouseIsPressed: true });
    // ADD IF CONDITION SOMEWHERE
    if (buttonToggled.eraser) {
      erase(row, col);
    }
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!board.mouseIsPressed) return;
    const newGrid = handleColoring(board.grid, row, col);
    setBoard({ grid: newGrid, mouseIsPressed: true });
    if (buttonToggled.eraser) {
      erase(row, col);
    }
  };

  const handleMouseUp = () => {
    const copyGrid = [...board.grid];
    setBoard({ grid: copyGrid, mouseIsPressed: false });
  };

  // Grid size changer
  const handleGridChange = () => {
    squareGenerator(values.gridLines);
  };

  const squareGenerator = (gridLines: number) => {
    const grid = [];
    for (let row = 0; row < gridLines; row++) {
      const currentRow = [];
      for (let col = 0; col < gridLines; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    setBoard({ grid });
  };

  const createNode = (col: number, row: number) => {
    return {
      col,
      row,
      isColored: false,
      nodeColor: "white",
    };
  };

  const handleColoring = (grid: INode[][], row: number, col: number) => {
    const newGrid = [...grid];
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isColored: true,
      nodeColor: color,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  const erase = (row: number, col: number) => {
    const newGrid = [...board.grid];
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isColored: false,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  useEffect(() => {
    handleGridChange();
  }, [values.gridLines]);
  return (
    <main className="sketch">
      <h1>Sketch</h1>
      <div className="sketch-container">
        <Taskbar
          values={values}
          handleChange={handleChange}
          color={color}
          setColor={setColor}
          bgColor={bgColor}
          setbgColor={setbgColor}
          buttonToggled={buttonToggled}
          setButtonToggled={setButtonToggled}
        />
        <section className="sketch-boardWrapper" draggable={false}>
          <Board
            handleMouseDown={handleMouseDown}
            handleMouseEnter={handleMouseEnter}
            handleMouseUp={handleMouseUp}
            board={board}
            values={values}
            bgColor={bgColor}
          />
        </section>
      </div>
    </main>
  );
};

export default Sketch;

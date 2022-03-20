import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import Taskbar from "../Taskbar/Taskbar";

export interface IGrid {
  grid: INode[][];
  mouseIsPressed?: boolean;
}
interface INode {
  row: number;
  col: number;
  isColored: boolean;
}
const Sketch = () => {
  const [board, setBoard] = useState<IGrid>({
    grid: [],
    mouseIsPressed: false,
  });
  // const [bgColor, setBgColor] = useState("white");
  // This goes to taskbar component
  const [values, setValues] = useState({
    bgColor: "",
    penColor: "",
    gridLines: 24,
  });
  let handleChange = (e: { target: { name: any; value: any } }) => {
    handleGridChange();

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleMouseDown = (row: number, col: number) => {
    const newGrid = handleColoring(board.grid, row, col);
    setBoard({ grid: newGrid, mouseIsPressed: true });
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!board.mouseIsPressed) return;
    const newGrid = handleColoring(board.grid, row, col);
    setBoard({ grid: newGrid, mouseIsPressed: true });
  };

  const handleMouseUp = () => {
    const copyGrid = [...board.grid];
    setBoard({ grid: copyGrid, mouseIsPressed: false });
  };
  const handleGridChange = () => {
    const newGrid = [...board.grid];
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
    };
  };

  // Handles coloring to
  const handleColoring = (grid: INode[][], row: number, col: number) => {
    const newGrid = [...grid];
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isColored: true,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  useEffect(() => {
    squareGenerator(values.gridLines);
    console.log(board.grid);
  }, []);
  return (
    <main className="sketch">
      <h1>Sketch</h1>
      <div className="sketch-container">
        {/* <Taskbar setBgColor={setBgColor} /> */}
        <section className="sketch-taskbarContainer">
          <div className="sketch-taskbar">
            <form className="sketch-form">
              <div className="sketch-inputs">
                <div>
                  <input
                    type="color"
                    title="color"
                    id="penColor"
                    name="penColor"
                    value={values.penColor}
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="penColor">Pen Color</label>
              </div>
              <div className="sketch-inputs">
                <div>
                  <input
                    type="color"
                    title="bgColor"
                    id="bgColor"
                    name="bgColor"
                    value={values.bgColor}
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="bgColor">Background Color</label>
              </div>
            </form>
            <div className="sketch-buttons">
              <button>Color Fill</button>
              <button>Color Grab</button>
              <button>Eraser</button>
              <button>Random colors</button>
              <button>Shader</button>
            </div>
            <div className="sketch-sliderContainer">
              <label htmlFor="gridLines">Grid size: 24 x 24</label>
              <input
                type="range"
                id="gridLines"
                title="gridLines"
                value={values.gridLines}
                onChange={handleChange}
                name="gridLines"
              />
              <button>Toggle Grid Lines</button>
            </div>
            <button>Clear</button>
          </div>
        </section>
        <section>
          <Board
            handleMouseDown={handleMouseDown}
            handleMouseEnter={handleMouseEnter}
            handleMouseUp={handleMouseUp}
            board={board}
          />
        </section>
      </div>
    </main>
  );
};

export default Sketch;

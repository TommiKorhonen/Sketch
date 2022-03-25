import { render, screen } from "@testing-library/react";
import Board from "../Board";

const boardProps = {
  board: {
    grid: [
      [
        {
          row: 0,
          col: 0,
          isColored: false,
          nodeColor: "#ff0000",
        },
        {
          row: 0,
          col: 1,
          isColored: false,
          nodeColor: "#ff0000",
        },
      ],
    ],
    mouseIsPressed: false,
  },
  handleMouseDown: () => {},
  handleMouseEnter: () => {},
  handleMouseUp: () => {},
  bgColor: "#FFFFFF",
  values: {
    gridLines: 4,
  },
  buttonToggled: {
    eraser: false,
    colorFill: false,
    colorGrab: false,
    randomColors: false,
    gridLines: true,
    clear: false,
  },
};

describe("Board", () => {
  test("should render given amount of squares", () => {
    render(<Board {...boardProps} />);
    expect(screen.getAllByRole("article").length).toBe(2);
  });
  test("should show given bg color", () => {
    render(<Board {...boardProps} />);
    expect(screen.getByTestId("board")).toHaveStyle(
      "background-color: #FFFFFF;"
    );
  });
  test("should show given amount of gridlines", () => {
    render(<Board {...boardProps} />);
    expect(screen.getByTestId("board")).toHaveStyle(
      "gridTemplateColumns: repeat(4, minmax(0, 1fr))"
    );
  });
});

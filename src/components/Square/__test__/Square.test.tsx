import { render, screen } from "@testing-library/react";
import Square from "../Square";

const squareProps = {
  handleMouseDown: () => {},
  handleMouseEnter: () => {},
  handleMouseUp: () => {},
  col: 0,
  row: 0,
  isColored: false,
  nodeColor: "#ff0000",
  buttonToggled: {
    eraser: false,
    colorFill: false,
    colorGrab: false,
    randomColors: false,
    shader: false,
    gridLines: true,
    clear: false,
  },
};
describe("square", () => {
  test("bg color should be inherited initially", () => {
    render(<Square {...squareProps} />);
    expect(screen.getByRole("article")).toHaveStyle(
      "background-color: inherit;"
    );
  });
  test("should show gridlines initially", () => {
    render(<Square {...squareProps} />);
    expect(screen.getByRole("article")).not.toHaveClass("noGridLines");
    expect(screen.getByRole("article")).toHaveClass("nodeGridLines");
  });
  test("should show different color if node is colored", () => {
    render(<Square {...{ ...squareProps, isColored: true }} />);
    expect(screen.getByRole("article")).toHaveStyle(
      "background-color: #ff0000;"
    );
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sketch from "../Sketch";

describe("Sketch", () => {
  describe("pen testing", () => {
    test("should be able to add color to grid", () => {
      render(<Sketch />);
      const grid = screen.getAllByRole("article");
      expect(grid[0]).toHaveStyle("background-color: inherit;");
      userEvent.click(grid[0]);
      expect(grid[0]).toHaveStyle("background-color: #000000;");
    });
    test("should be able to add color to multiple nodes by dragging", () => {
      render(<Sketch />);
      const grid = screen.getAllByRole("article");
      expect(grid[0]).toHaveStyle("background-color: inherit;");
      expect(grid[1]).toHaveStyle("background-color: inherit;");
      expect(grid[2]).toHaveStyle("background-color: inherit;");
      fireEvent.mouseDown(grid[0]);
      fireEvent.mouseEnter(grid[1]);
      fireEvent.mouseEnter(grid[2]);
      fireEvent.mouseUp(grid[2]);
      expect(grid[0]).toHaveStyle("background-color: #000000;");
      expect(grid[1]).toHaveStyle("background-color: #000000;");
      expect(grid[2]).toHaveStyle("background-color: #000000;");
    });
    test("Should not add color after releasing mouse", () => {
      render(<Sketch />);
      const grid = screen.getAllByRole("article");
      expect(grid[0]).toHaveStyle("background-color: inherit;");
      expect(grid[1]).toHaveStyle("background-color: inherit;");
      fireEvent.mouseDown(grid[0]);
      fireEvent.mouseEnter(grid[1]);
      fireEvent.mouseUp(grid[1]);
      fireEvent.mouseEnter(grid[2]);
      expect(grid[2]).not.toHaveStyle("background-color: #000000");
    });
  });
});

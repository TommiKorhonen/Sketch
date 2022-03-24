import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sketch from "../Sketch";

describe("Sketch", () => {
  test("Testing ", () => {
    render(<Sketch />);
    const eraserBtn = screen.getByRole("button", {
      name: /eraser/i,
    });
    // userEvent.click(eraserBtn);
    userEvent.click(eraserBtn);
    expect(eraserBtn).toHaveClass("buttonToggled");
  });
});

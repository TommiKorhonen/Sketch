import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Taskbar from "../Taskbar";

const taskbarProps = {
  values: {
    gridLines: 15,
  },
  handleChange: () => {},
  color: "#ff0000",
  setColor: () => {},
  bgColor: "#FFFFFF",
  setbgColor: () => {},
  setButtonToggled: () => {},
  buttonToggled: {
    eraser: true,
    colorFill: true,
    colorGrab: true,
    randomColors: true,
    shader: true,
    gridLines: true,
    clear: true,
  },
  resetGrid: () => {},
};
const showToggledValue = () => {
  const eraserBtn = screen.getByRole("button", {
    name: /eraser/i,
  });
  const colorFillBtn = screen.getByRole("button", {
    name: /color fill/i,
  });
  const colorGrabBtn = screen.getByRole("button", {
    name: /color Grab/i,
  });
  const randomColorsBtn = screen.getByRole("button", {
    name: /Random color/i,
  });
  const shaderBtn = screen.getByRole("button", {
    name: /shader/i,
  });
  const gridLinesBtn = screen.getByRole("button", {
    name: /toggle grid lines/i,
  });
  const clearBtn = screen.getByRole("button", {
    name: /clear/i,
  });
  return {
    eraserBtn,
    colorFillBtn,
    colorGrabBtn,
    randomColorsBtn,
    shaderBtn,
    gridLinesBtn,
    clearBtn,
  };
};
describe("Taskbar", () => {
  test("Grid input should show given range", () => {
    render(<Taskbar {...taskbarProps} />);
    expect(screen.getByTestId("gridSlider")).toHaveValue("15");
  });
  test("GridSlider label should show given range", () => {
    render(<Taskbar {...taskbarProps} />);
    expect(screen.getByText(/Grid size: 15 x 15/i)).toBeInTheDocument();
  });
  describe("button toggling", () => {
    test("eraser should show toggled color", () => {
      render(<Taskbar {...taskbarProps} />);
      const { eraserBtn } = showToggledValue();
      expect(eraserBtn).toHaveClass("buttonToggled");
    });
    test("colorfill  should show toggled color", () => {
      render(<Taskbar {...taskbarProps} />);
      const { colorFillBtn } = showToggledValue();
      expect(colorFillBtn).toHaveClass("buttonToggled");
    });
    test("colorGrab should show toggled color", () => {
      render(<Taskbar {...taskbarProps} />);
      const { colorGrabBtn } = showToggledValue();
      expect(colorGrabBtn).toHaveClass("buttonToggled");
    });
    test("randomColors should show toggled color", () => {
      render(<Taskbar {...taskbarProps} />);
      const { randomColorsBtn } = showToggledValue();
      expect(randomColorsBtn).toHaveClass("buttonToggled");
    });
    test("shader should show toggled color", () => {
      render(<Taskbar {...taskbarProps} />);
      const { shaderBtn } = showToggledValue();
      expect(shaderBtn).toHaveClass("buttonToggled");
    });
    test("gridLines should show toggled color", () => {
      render(<Taskbar {...taskbarProps} />);
      const { gridLinesBtn } = showToggledValue();
      expect(gridLinesBtn).toHaveClass("buttonToggled");
    });
    test("clearBtn should show toggled color", () => {
      render(<Taskbar {...taskbarProps} />);
      const { clearBtn } = showToggledValue();
      expect(clearBtn).toHaveClass("buttonToggled");
    });
  });
});

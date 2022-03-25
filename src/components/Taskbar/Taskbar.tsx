import React from "react";
import { HexColorPicker } from "react-colorful";
import { IInputValues } from "../Board/Board";

interface ITaskbarProps {
  resetGrid: () => void;
  values: IInputValues;
  handleChange: (e: { target: { name: string; value: any } }) => any;
  color: string;
  bgColor: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setbgColor: React.Dispatch<React.SetStateAction<string>>;
  buttonToggled: IButtonToggle;
  setButtonToggled: React.Dispatch<
    React.SetStateAction<{
      eraser: boolean;
      colorFill: boolean;
      colorGrab: boolean;
      randomColors: boolean;

      gridLines: boolean;
      clear: boolean;
    }>
  >;
}
export interface IButtonToggle {
  eraser: boolean;
  colorFill: boolean;
  colorGrab: boolean;
  randomColors: boolean;

  gridLines: boolean;
  clear: boolean;
}

const Taskbar: React.FC<ITaskbarProps> = ({
  values,
  handleChange,
  color,
  setColor,
  bgColor,
  setbgColor,
  setButtonToggled,
  buttonToggled,
  resetGrid,
}) => {
  const randomColor = () => {
    setButtonToggled({
      ...buttonToggled,
      randomColors: true,
    });
    const arrayOfColorFunctions = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    let randomColorString = "#";
    for (let x = 0; x < 6; x++) {
      let index = Math.floor(Math.random() * 16);
      let value = arrayOfColorFunctions[index];

      randomColorString += value;
    }
    setColor(randomColorString);

    setTimeout(() => {
      setButtonToggled({
        ...buttonToggled,
        randomColors: false,
      });
    }, 1000);
  };

  return (
    <section className="taskbar-Container">
      <div className="taskbar">
        <form className="taskbar-Form">
          <div className="taskbar-Inputs">
            <h3>Pen</h3>
            <div className="small-picker custom-pointers">
              <HexColorPicker
                color={color}
                onChange={setColor}
                data-testid="penColor"
              />
            </div>
            {/* <label htmlFor="penColor">Pen Color</label> */}
          </div>
          <div className="taskbar-Inputs">
            <h3>Background</h3>
            <div className="small-picker custom-pointers">
              <HexColorPicker color={bgColor} onChange={setbgColor} />
            </div>
            {/* <label htmlFor="bgColor">Background Color</label> */}
          </div>
        </form>
        <div className="taskbar-Buttons">
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <button
              className={buttonToggled.colorFill ? "buttonToggled" : ""}
              onClick={() =>
                buttonToggled.colorGrab
                  ? ""
                  : setButtonToggled({
                      ...buttonToggled,
                      colorFill: !buttonToggled.colorFill,
                    })
              }
            >
              Color Fill
            </button>
            <button
              className={buttonToggled.colorGrab ? "buttonToggled" : ""}
              onClick={() =>
                buttonToggled.colorFill
                  ? ""
                  : setButtonToggled({
                      ...buttonToggled,
                      colorGrab: !buttonToggled.colorGrab,
                    })
              }
            >
              Color Grab
            </button>
          </div>
          <button
            className={buttonToggled.eraser ? "buttonToggled" : ""}
            onClick={() =>
              setButtonToggled({
                ...buttonToggled,
                eraser: !buttonToggled.eraser,
              })
            }
          >
            Eraser
          </button>
          <button
            className={buttonToggled.randomColors ? "buttonToggled" : ""}
            onClick={() => randomColor()}
          >
            Random color
          </button>
        </div>
        <div className="taskbar-SliderContainer">
          <label htmlFor="gridLines">
            {`Grid size: ${values.gridLines} x ${values.gridLines}`}
          </label>
          <input
            data-testid="gridSlider"
            type="range"
            id="gridLines"
            title="gridLines"
            value={values.gridLines}
            onChange={(e) => handleChange(e)}
            name="gridLines"
            min={1}
            max={24}
          />
          <button
            className={buttonToggled.gridLines ? "buttonToggled" : ""}
            onClick={() =>
              setButtonToggled({
                ...buttonToggled,
                gridLines: !buttonToggled.gridLines,
              })
            }
          >
            Toggle Grid Lines
          </button>
        </div>
        <button
          className={buttonToggled.clear ? "buttonToggled" : ""}
          onClick={() => resetGrid()}
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default Taskbar;

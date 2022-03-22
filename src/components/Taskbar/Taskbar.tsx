import React from "react";
import { HexColorPicker } from "react-colorful";
import { IInputValues } from "../Board/Board";
import { INode } from "../Sketch/Sketch";

interface ITaskbarProps {
  values: IInputValues;
  handleChange: (e: { target: { name: string; value: any } }) => any;
  color: string;
  bgColor: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setbgColor: React.Dispatch<React.SetStateAction<string>>;
  buttonToggled: IButtonToggle;
  setButtonToggled: React.Dispatch<React.SetStateAction<{ eraser: boolean }>>;
}
interface IButtonToggle {
  eraser: boolean;
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
}) => {
  return (
    <section className="taskbar-Container">
      <div className="taskbar">
        <form className="taskbar-Form">
          <div className="taskbar-Inputs">
            <h3>Pen</h3>
            <div className="small-picker custom-pointers">
              <HexColorPicker color={color} onChange={setColor} />
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
          <button>Color Fill</button>
          <button>Color Grab</button>
          <button
            className={buttonToggled.eraser ? "buttonToggled" : ""}
            onClick={() => setButtonToggled({ eraser: !buttonToggled.eraser })}
          >
            Eraser
          </button>
          <button>Random colors</button>
          <button>Shader</button>
        </div>
        <div className="taskbar-SliderContainer">
          <label htmlFor="gridLines">
            {`Grid size: ${values.gridLines} x ${values.gridLines}`}
          </label>
          <input
            type="range"
            id="gridLines"
            title="gridLines"
            value={values.gridLines}
            onChange={(e) => handleChange(e)}
            name="gridLines"
            min={1}
            max={24}
          />
          <button>Toggle Grid Lines</button>
        </div>
        <button>Clear</button>
      </div>
    </section>
  );
};

export default Taskbar;

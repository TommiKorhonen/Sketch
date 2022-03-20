import React from "react";

const Taskbar: React.FC<{ setBgColor: () => void }> = ({ setBgColor }) => {
  return (
    <section className="sketch-taskbarContainer">
      <div className="sketch-taskbar">
        <form className="sketch-form">
          <div className="sketch-inputs">
            <div>
              <input type="color" title="color" id="penColor" />
            </div>
            <label htmlFor="penColor">Pen Color</label>
          </div>
          <div className="sketch-inputs">
            <div>
              <input type="color" title="bgColor" id="bgColor" />
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
          <input type="range" id="gridLines" title="gridLines" />
          <button>Toggle Grid Lines</button>
        </div>
        <button>Clear</button>
      </div>
    </section>
  );
};

export default Taskbar;

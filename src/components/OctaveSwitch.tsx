import React, { useState } from "react";
import { upIcon, downIcon } from "../icons";
import "../styles/OctaveSwitch.css";

const OctaveSwitch = () => {
  const [octave, setOctave] = useState(1);
  return (
    <div className="octave-switch">
      <label>OCT</label>
      <button
        className="octave-button"
        onClick={() => {
          setOctave(octave + 1);
        }}
      >
        {upIcon}
      </button>
      <div className="octave-display">
        <p>{octave}</p>
      </div>
      <button
        className="octave-button"
        onClick={() => {
          setOctave(octave - 1);
        }}
      >
        {downIcon}
      </button>
    </div>
  );
};

export default OctaveSwitch;

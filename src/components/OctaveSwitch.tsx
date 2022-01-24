import React from "react";
import { upIcon, downIcon } from "../icons";
import "../styles/OctaveSwitch.css";

interface OctaveProps {
  octave: number;
  setOctave: (octave: number) => void;
}

const OctaveSwitch = ({ octave, setOctave }: OctaveProps) => {
  return (
    <div className="octave-switch">
      <label className="unselectable">OCTAVE</label>
      <button
        className="octave-button"
        onClick={() => {
          setOctave(octave + 1);
        }}
      >
        {upIcon}
      </button>
      <div className="octave-display">
        <p className="unselectable">{octave}</p>
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

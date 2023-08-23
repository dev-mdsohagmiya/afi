import React from "react";
import "../styles/FullPath.css";
import Greetings from "./path/Greetings";
import GiveTNews from "./path/GiveTNews";
import GiveTNews2 from "./path/GiveTNews2";
import Blessings from "./path/Blessings";
import Blessings2 from "./path/Blessings2";
export default function FullPath() {
  return (
    <div id="fullpath">
      <div>
        <Greetings />
        <GiveTNews />
        <GiveTNews2 />
        <Blessings />
        <Blessings2 />
      </div>
    </div>
  );
}

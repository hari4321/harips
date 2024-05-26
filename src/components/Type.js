import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css";

function Type() {
  return (
    <div className="typewriter-text">
      <Typewriter
        options={{
          strings: ["Software Developer", "Fullstack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;

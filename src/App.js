import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/5hweta28/Weather_Application">
          Source Code
        </a>{" "}
        | Developed by{" "}
        <a href="https://www.linkedin.com/in/shweta-rana-sr04/">
          Shweta Rana
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;

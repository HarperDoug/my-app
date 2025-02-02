import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
        <Weather />
      <footer>
        Built by{" "}
        <a href="https://github.com/HarperDoug/my-app" target="_blank" rel="noreferrer">Jessica Spies </a>
        and website hosted on
        <a href="https://whimsical-moonbeam-18ec59.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a>
      </footer>
      </div>
  );
}

export default App;
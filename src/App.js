import React from "react";
import weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <weather />
        <footer>
          This project was coded by Barbara Morales and is{" "}
          <a href="https://github.com/barbaramm11/react-weather-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

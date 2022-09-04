import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Barbara Morales and is{" "}
          <a href="https://github.com/barbaramm11/react-weather-app">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://legendary-salmiakki-c4fd40.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../assets/img/logo.svg";
import "../App.css";
function ReactLogo() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link" style={{textDecoration:"none"}}
          href="https://www.w3schools.com/react/default.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with W3School
        </a>
      </header>
    </>
  );
}

export default ReactLogo;

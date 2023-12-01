import React from "react";
import logo from "../logo192.png";
export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="App-logo" alt="logo" />{" "}
        <h1>React</h1>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

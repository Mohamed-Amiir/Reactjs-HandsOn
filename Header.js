import React from "react";
export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

import React from "react";
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <nav className="nav">
        {/* <Image src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="react" width={50} height={50}/> */}
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

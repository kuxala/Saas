import React from "react";
import Wrapper from "../wrappers/HeaderWrapper";

export default function Header() {
  return (
    <Wrapper>
      <div className="container">
        <div className="left-col">
          <img src="./assets/logosaas.png" />
        </div>
        <div className="right-col">
          <nav className="desktop-nav">
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Costumers</li>
              <li>Updates</li>
              <li>Help</li>
              <button>Get for free</button>
            </ul>
          </nav>
          <div className="mobile-nav">
            <img src="./assets/menu.svg" width="32px" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

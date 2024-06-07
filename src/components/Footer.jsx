import React from "react";
import Wrapper from "../wrappers/FooterWrapper";

export default function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="left-col">
          <img src="./assets/logosaas.png" />
          <p>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </p>
          <div>
            <img />
          </div>
        </div>
        <div className="right-col">
          <div>
            <h5>Products</h5>
            <ul>
              <li>Features</li>
              <li>integrations</li>
              <li>Features</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

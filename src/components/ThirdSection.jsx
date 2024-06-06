import React from "react";
import Wrapper from "../wrappers/ThirdSectionWrapper";

export default function ThirdSection() {
  return (
    <Wrapper>
      <div className="container">
        <div className="top-section">
          <span>Everything you need</span>
          <h2>
            Streamlined for easy <br />
            management
          </h2>
          <p>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="bottom-section">
          <div className="left-col">
            <img src="./assets/cube-helix.png" />
            <h2>Integration ecosystem</h2>
            <p>
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place
            </p>
          </div>
          <div className="right-col">
            <img src="./assets/cube-helix-1.png" />
            <h2>Goal setting and tracking</h2>
            <p>
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

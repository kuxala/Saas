import React from "react";
import Wrapper from "../wrappers/SecondSectionWrapper";
import Section2Component from "./Section_2_Component";

export default function SecondSection() {
  return (
    <Wrapper>
      <div className="container">
        <div className="top-col">
          <span>Boost your productivity</span>
          <h1>
            A more effective way
            <br /> to track progress
          </h1>
          <p>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="bottom-col">
          <img src="./assets/ProductImage.png" width="100%" className="image" />
        </div>
        <div className="hero-section">
          <Section2Component
            img="./assets/leaf-icon.svg"
            h3="Integration ecosystem"
            p="Track your progress and motivate your efforts everyday."
          />
          <Section2Component
            img="./assets/goal-icon.svg"
            h3="Goal setting and tracking"
            p="Set and track goals with manageable task breakdowns."
          />
          <Section2Component
            img="./assets/security-icon.svg"
            h3="Secure data encryption"
            p="Ensure your data’s safety with top-tier encryption."
          />
          <Section2Component
            img="./assets/bell-icon.svg"
            h3="Customizable notifications"
            p="Get alerts on tasks and deadlines that matter most."
          />
        </div>
      </div>
    </Wrapper>
  );
}

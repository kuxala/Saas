import React from "react";
import Wrapper from "../wrappers/FourthSectionWrapper";
import PriceComponent from "./PriceComponent";

export default function FourthSection() {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <span className="sp">Boost your productivity</span>
          <h2>
            A more effective way <br /> to track progress
          </h2>
          <p>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="pricing">
          <PriceComponent
            firstP="Free"
            price="0"
            buttonText="Get started for free"
            l1="Up to 5 projects members"
            l2="Unlimited tasks and projects"
            l3="2GB storage"
            l4="Integrations"
            l5="Basic support"
          />
          <PriceComponent
            firstP="Pro"
            price="9"
            buttonText="Sign up now"
            l1="Up to 50 project members"
            l2="Unlimited tasks and projects"
            l3="50GB storage"
            l4="Integrations"
            l5="Priority support"
            l6="Advanced support"
            l7="Export support"
            bg="#000"
            color="#FFF"
          />
          <PriceComponent
            firstP="Business"
            price="19"
            buttonText="Sign up now"
            l1="Up to 50 project members"
            l2="Unlimited tasks and projects"
            l3="50GB storage"
            l4="Integrations"
            l5="Priority support"
            l6="Advanced support"
            l7="Export support"
            l8="API access"
            l9="Advanced security features"
          />
        </div>
      </div>
    </Wrapper>
  );
}

import React from "react";
import Wrapper from "../wrappers/MainSectionWrapper";

export default function MainSection() {
  return (
    <Wrapper>
      <div className="container">
        <div className="left-col">
          <span>Version 2.0 is here</span>
          <h1>
            Pathway to <br />
            Productivity
          </h1>
          <p>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="buttons">
            <button className="black-button">Get it for free</button>
            <button className="transparent-btn">
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M16.0306 11.0307L11.5306 15.5307C11.3897 15.6716 11.1986 15.7508 10.9994 15.7508C10.8001 15.7508 10.609 15.6716 10.4681 15.5307C10.3272 15.3898 10.2481 15.1987 10.2481 14.9995C10.2481 14.8002 10.3272 14.6091 10.4681 14.4682L13.6875 11.2501H4.5C4.30109 11.2501 4.11032 11.1711 3.96967 11.0304C3.82902 10.8898 3.75 10.699 3.75 10.5001C3.75 10.3012 3.82902 10.1104 3.96967 9.96978C4.11032 9.82913 4.30109 9.75011 4.5 9.75011H13.6875L10.4694 6.53011C10.3285 6.38921 10.2493 6.19812 10.2493 5.99886C10.2493 5.7996 10.3285 5.60851 10.4694 5.46761C10.6103 5.32671 10.8014 5.24756 11.0006 5.24756C11.1999 5.24756 11.391 5.32671 11.5319 5.46761L16.0319 9.96761C16.1018 10.0374 16.1573 10.1203 16.1951 10.2115C16.2329 10.3028 16.2523 10.4006 16.2522 10.4994C16.252 10.5982 16.2324 10.696 16.1944 10.7872C16.1564 10.8784 16.1007 10.9611 16.0306 11.0307Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="right-col">
          <div className="images">
            <img src="./assets/cylinder.png" className="top-image" />
            <img src="./assets/Visual.png" className="center-image" />
            <img src="./assets/half-torus.png" className="bottom-image" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

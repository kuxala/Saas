import styled from "styled-components";

export default function Section2Component({ img, h3, p, button }) {
  return (
    <>
      <Wrapper>
        <img src={img} />
        <h3>{h3}</h3>
        <p>{p}</p>
        <button>
          Learn more <img src="./assets/arrow-icon.svg" />
        </button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 260px;
  h3 {
    color: #000;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.558px;
    padding: 10px 0;
  }
  p {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px; /* 143.75% */
    letter-spacing: -0.16px;
    padding-bottom: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    height: 21px;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px; /* 143.75% */
    letter-spacing: -0.16px;
  }
`;

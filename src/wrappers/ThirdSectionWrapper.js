import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    height: 100vh;
    padding: 0 104px;
    margin: 70px 0;
    .top-section {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        display: flex;
        width: 200px;
        height: 27px;
        padding: 10px 13px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        border: 1px solid rgba(34, 34, 34, 0.1);
      }
      h2 {
        text-align: center;
        font-family: "DM Sans";
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: 60px; /* 111.111% */
        letter-spacing: -3.24px;
        background: linear-gradient(180deg, #000 0%, #001354 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 20px 0;
      }
      p {
        color: #010d3e;
        text-align: center;

        /* Body Large */
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 31px; /* 140.909% */
        letter-spacing: -0.792px;
        max-width: 535px;
      }
    }
    .bottom-section {
      display: flex;
      gap: 32px;
      width: 100%;
      @media (max-width: 768px){
        flex-direction: column;
      }
      .left-col,
      .right-col {
        @media (max-width: 768px){
        width: 100%;
        border: none;
        box-shadow: none;
      }
        border-radius: 20px;
        border: 1px solid rgba(27, 27, 27, 0.02);
        box-shadow: 0px 7px 24px 0px #24262b;
        display: flex;
        width: 486px;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-top: 60px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          text-align: center;

          /* H4 */
          font-family: "DM Sans";
          font-size: 26px;
          font-style: normal;
          font-weight: 700;
          line-height: 60px; /* 230.769% */
          letter-spacing: -1.04px;
          background: linear-gradient(180deg, #000 0%, #001354 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding: 10px 0;
        }
        p {
          max-width: 350px;
          color: #010d3e;
          text-align: center;

          /* Body Medium */
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 23px; /* 143.75% */
          letter-spacing: -0.16px;
        }
      }
    }
  }
`;

export default Wrapper;

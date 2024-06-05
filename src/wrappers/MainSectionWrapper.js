import styled from "styled-components";

const Wrapper = styled.section`
  background: linear-gradient(201deg, #eaeefe 45.21%, #183ec2 97.31%);

  .container {
    padding-left: 82px;
    display: flex;
    min-height: 91vh;
    
    @media (max-width: 768px){
       flex-direction: column;
       width: 100%;
       padding: 0;
       padding: 24px;
      }
    .left-col {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding-top: 100px;
      @media (max-width: 768px){
        padding: 0;
       flex-direction: column;
       width: 100%;
      }
      span {
        display: flex;
        width: 137px;
        height: 29px;
        padding: 10px 13px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        border: 1px solid rgba(34, 34, 34, 0.1);
        color: #000;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 31px;
        letter-spacing: -0.325px;
        margin-bottom: 29px;
      }
      h1 {
        font-family: "DM Sans";
        font-size: 90px;
        font-style: normal;
        font-weight: 700;
        line-height: 90px; /* 100% */
        letter-spacing: -5.85px;
        background: linear-gradient(180deg, #000 0%, #001354 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-bottom: 29px;
      }
      p {
        color: #010d3e;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 31px; /* 140.909% */
        letter-spacing: -0.792px;
        max-width: 457px;
      }
      .buttons {
        display: flex;
        gap: 17px;
        padding-top: 29px;
        .transparent-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
      }
    }
    .right-col {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px){
        width: 100%;
      }
      .images {
        display: flex;
        flex-direction: column;
        position: absolute;
        @media (max-width: 768px){
            margin-top: 100px;
            position: initial;
            .center-image{
                width: 400px;
            }

      }
        .top-image {
          position: absolute;
          top: -20%;
          animation: spina 60s linear infinite;
        }
        .bottom-image {
          position: absolute;
          bottom: -30%;
          right: 1%;
          animation: spinb 60s linear infinite;
        }
      }
    }
    @keyframes spina {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes spinb {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  }
`;

export default Wrapper;

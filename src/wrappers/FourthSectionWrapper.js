import styled from "styled-components";

const Wrapper = styled.section`
@media (max-width: 768px){
        margin-top: 1000px
    }
  min-height: 100vh;
  .pricing {
    display: flex;
    justify-content: center;
    gap: 50px;
    @media (max-width: 768px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .sp {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    color: #000;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px; /* 238.462% */
    letter-spacing: -0.325px;
    border-radius: 10px;
    border: 1px solid rgba(34, 34, 34, 0.1);
    padding: 10px 13px;
    margin-bottom: 20px;

    width: 200px;
  }
  p {
    display: flex;
    margin: 20px auto;
    padding-bottom: 20px;
    color: #010d3e;
    text-align: center;

    /* Body Large */

    max-width: 500px;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px; /* 140.909% */
    letter-spacing: -0.792px;
  }
  h2 {
    text-align: center;

    /* H2 */
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
  }
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: inline-flex;
    padding: 40px 40px 44px 40px;
    flex-direction: column;
    align-items: center;
    border-radius: 24px;
    border: 1px solid var(--Neutral-300, #eff0f6);
    background: var(--Neutral-100, #fff);

    /* General/Shadow 02 */
    box-shadow: 0px 2px 12px 0px rgba(20, 20, 43, 0.08);
    p {
      color: var(--Neutral-600, #6f6c90);
      font-family: "DM Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.558px;
      margin: 24px 0;
    }
    h3 {
      color: #000;

      /* H2 */
      font-family: "DM Sans";
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 111.111% */
      letter-spacing: -3.24px;
      span {
        color: var(--Neutral-600, #6f6c90);

        /* H5 */
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.558px;
      }
    }
    button {
      display: flex;
      width: 271px;
      padding: 10px 15px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 10px;
      background: #000;
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.32px;
      border: none;
      outline: none;
      margin: 32px 0;
      cursor: pointer;
    }
    ul {
      list-style: none;
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #000;

        /* Body S */
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

export default Wrapper;

import styled from "styled-components";


const Wrapper = styled.section`
    .container{
        background: linear-gradient(180deg, #FFF 27.96%, #D2DCFF 100%);
        margin-top: 100px;
        padding:50px;
        .top-col{
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
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
            p{
                max-width: 535px;
                color: #010D3E;
                text-align: center;
                font-family: Inter;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 31px; /* 140.909% */
                letter-spacing: -0.792px;
            }
        
        }
        .top-col span{
            display: flex;
            width: 200px;
            height: 27px;
            padding: 10px 13px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 10px;
            border: 1px solid rgba(34, 34, 34, 0.10);
            color: #000;
            font-family: Inter;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 31px; /* 238.462% */
            letter-spacing: -0.325px;
        }

        .hero-section{
            display: flex;
            justify-content: space-between;
            padding: 0 65px;
            @media (max-width: 768px){
                flex-direction: column;
                padding: 0 20px;
                gap : 32px;
            }
        }
    }
`


export default Wrapper;

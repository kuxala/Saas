import styled from "styled-components"

const Wrapper = styled.header`
    background: #EAEEFE;
    backdrop-filter: blur(7px);
    padding: 20px;
    min-height: 8.5vh;

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .desktop-nav{
        ul {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 24px;
            li{
                color: rgba(0, 0, 0, 0.60);
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 23px; /* 143.75% */
                letter-spacing: -0.16px;
                cursor: pointer;
                &:hover{
                    color: #1b41c3;
                    transition: all 0.5s ease-in-out;
                }
            }
            button{
                display: flex;
                padding: 10px 15px;
                justify-content: center;
                align-items: center;
                gap: 4px;
                border-radius: 10px;
                background: #000;
                color: #FFF;
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: -0.32px;
                border:  none;
                cursor: pointer;
                &:hover{
                    color: #1df6fe;
                    transition: all 0.5s ease-in-out;
                }
            }
        }
    }

    @media (min-width: 768px){
        .mobile-nav{
        display: none;
    }
    }
    @media (max-width:768px){
        .desktop-nav{
            display: none;
        }
    }

`
export default Wrapper
import styled from "styled-components";

const Wrapper = styled.footer`
    margin-top: 50px;
    .container{
        display: flex;
        padding: 40px 20px;
        align-items: flex-start;
        gap: 512px;
        background: #000;
        color: #fff;
        .left-col{
            width: 60%;
            p{
                padding-top: 24px;
                max-width: 240px;
                color: #BCBCBC;
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
        .right-col{
            width: 40%;
            display: flex;
            gap: 72px;

            div{
                h5{
                    padding-bottom: 16px;
                    color: #FFF;
                    font-family: Inter;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;  
                }
                ;
                ul{
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    li{
                        color: #7B7B7B;
                        font-family: Inter;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
            }
        }
    }

`

export default Wrapper
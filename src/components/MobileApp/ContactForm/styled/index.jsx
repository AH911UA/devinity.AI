import styled from "styled-components";
import fonts from "../../../fonts";

export const ContactFormContainer = styled.div `
    width: calc(100% - 200px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 35px;
    border: 1px solid #E8E8E8;

    margin-bottom: 120px;
    
    >div {
        flex: 1;
        
        padding: 50px 70px;
        
        h3 {
            color: #FFF;
            font-family: ${fonts.oxanium};
            font-size: 48px;
            font-weight: 700;
            line-height: 60px;
            margin: 0;
        }
    }
    
    >div:nth-child(2) {
        text-align: center;
        
        img {
            width: 100%;
            max-width: 450px;
        }
    }

    @media (max-width: 1169px) {
        width: calc(100% - 40px);
        flex-direction: column;
        
        >div {
            width: calc(100% - 40px);
            padding: 30px 20px;
            
            h3 {
                font-size: 25px;
                line-height: normal;
            }

            &:nth-child(1) {
                padding-bottom: 0;
            }
        }
    }
`

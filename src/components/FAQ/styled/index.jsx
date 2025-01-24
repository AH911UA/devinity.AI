import styled from "styled-components";
import fonts from "../../fonts";

export const FaqPageContainer = styled.div `
    min-height: 100svh;
    
    display: flex;
    flex-direction: row;
    
    gap: 80px;
    
    >div {
        flex: 2;
        p {
            color: #E6E6E6;
            font-family: ${fonts.oxanium};
            font-size: 72px;
            font-weight: 700;
            
            span {
                color: #62ED2E;
            }
        }
        
        .gatsby-image-wrapper {
            margin: 150px auto;
        }
    }
    
    >div:first-child {
        flex: 1.5;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;

        >div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 30px;

            >div {
                flex: 1 1 500px;
                margin: 0;
            }
        }
    }

    @media screen and (max-width: 768px) {
        >div {
            p {
                font-size: 40px;
            }
        }
    }
`

export const FaqComponent = styled.div `
    margin-bottom: 10px;
    
    >dt, >dd {
        position: relative;
    }
    
    >dt {
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        background: #100815;
        border-radius: 8px;

        color: #FFF;

        font-family: ${fonts.oxanium};
        font-size: 24px;
        font-weight: 700;
        
        transition: all 0.5s ease;

        padding: 30px 55px;
        
        &:hover {
            background: #24152E;
        }

        &[aria-expanded="true"] {
            color: #000;
            font-weight: 500;
            background: linear-gradient(90deg, #51C227 0%, #21915B 100%), #62ED2E;
        }
    }

    >dd {
        z-index: 0;
        background: #100815;
        border-radius: 8px;

        color: #C3C1C4;
        font-size: 18px;
        font-weight: 300;
        line-height: 165%;


        padding: 40px 55px 55px;
        margin: 0;
        
        opacity: 1;
        transform: translateY(0);
        transition: padding 0s, all 0.5s ease;
        
        &.hidden {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            padding: 0;
            transform: translateY(-50%);
        }
    }

    @media screen and (max-width: 768px) {
        >dt {
            font-size: 20px; 
            padding: 30px 20px;
        }
        
        >dd {
            font-size: 18px;
            padding: 30px 20px 40px;
        }
    }
`

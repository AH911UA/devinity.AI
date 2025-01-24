import styled from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

export const AiIntegrationContainer = styled.div`
    position: relative;
    
    > div {
        display: flex;
        flex-direction: row;
        gap: 0;
  
        margin-top: 100px;
  
        > div:first-child {
            flex: 1;
            z-index: -1;
            margin-top: 0;
            
            .gatsby-image-wrapper {
                margin: 0 auto;
            }
        }
  
        > div:nth-child(2) {
            flex: 1;
  
            h3 {
                color: ${colors.white};
                font-family: ${fonts.oxanium};
                font-size: 56px;
                font-weight: 700;
                margin: 0;
            }
  
            p {
                color: ${colors.white};
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
                padding: 25px 0;
            }
  
            ul {
                margin: 0;
                padding-left: 20px;
  
                li {
                    color: ${colors.white};
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 45px;
  
                    &::marker {
                        color: ${colors.green};
                        font-size: 1.5em;
                    }
  
                    @media (max-width: 768px) {
                        font-size: 1em;
                        line-height: 20px;
                        padding: 10px 0;
                    }
                }
            }
        }
    }
    
    .planet-left, .planet-right {
        display: none;
    }

    @media (max-width: 1100px) {
        padding: 0 20px;
        
        >div {
            flex-direction: column-reverse;
            align-items: center;

            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.20);
            background: rgba(255, 255, 255, 0.10);
            backdrop-filter: blur(25px);

            padding: 20px;

            >div:first-child {
                width: 100%;
                margin: 0;

                img {
                    max-width: 680px;
                }
            }

            >div:nth-child(2) {
                h3 {
                    font-size: 25px;
                }

                p {
                    font-size: 1em;
                    padding: 10px 0;
                }
            }
        }

        .planet-left {
            width: 100px;
            display: block;
            position: absolute;
            left: -50px;
            bottom: 20px;
        }
        .planet-right {
            width: 100px;
            display: block;
            position: absolute;
            right: 0;
            top: 50px;
            z-index: -1;
        }
    }
`

import styled from "styled-components";
import fonts from "../../../fonts";

export const OurProjectsItems = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    
    padding: 0 20px;
    margin-bottom: 150px;
`

export const OurProjectsItem = styled.div `
    flex: 1;
    width: 600px;
    max-width: 600px;
    min-width: 250px;
    height: 550px;

    background-image: url(${props => props.image});
    background-size: cover;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    padding: 20px 30px;

    h3 {
        color: #FFF;
        font-family: ${fonts.oxanium};
        font-size: 40px;
        font-weight: 700;
        line-height: 70px;
        margin: 0;
    }

    p {
        color: #5FE931;
        font-size: 24px;
        font-weight: 400;
        text-align: left;
    }
    
    @media (max-width: 1350px) {
        width: calc(100%);
        max-width: 600px;
        height: 350px;
    }

    @media (max-width: 1169px) {
        h3 {
            font-size: 24px;
        }

        p {
            font-size: 14px;
        }
    }
`

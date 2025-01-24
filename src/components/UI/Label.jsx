import React from "react";
import styled from "styled-components";
import fonts from "../fonts";

const Label = styled.h2`
    color: #FFF;
    text-align: center;
    font-family: ${fonts.oxanium};
    font-size: 56px;
    font-weight: 700;

    margin: ${props => props.margin || '50px 0 100px'};

    span {
        color: #62ED2E;
    }
    
    @media (max-width: 1169px) {
        font-size: 25px;
        margin-bottom: 50px;
    }
`

export default Label;

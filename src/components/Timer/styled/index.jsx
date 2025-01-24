import styled from "styled-components";
import fonts from "../../fonts";

const TimerContainer = styled.div `
    text-align: center;

    p {
        color: #FFFFFF;
        font-family: ${fonts.oxanium};
        font-weight: 700;
        font-size: 24px;

        padding-bottom: 15px;

        span {
            color: #4CEF16;
        }
    }

    >div {
        span {
            display: inline-block;

            color: #FFFFFF;
            font-family: ${fonts.oxanium};
            font-weight: 700;
            font-size: 24px;

            border: 1.5px solid #4CEF16;
            border-radius: 8px;

            padding: 15px;
        }

        b {
            color: #4CEF16;
            font-family: ${fonts.oxanium};
            font-weight: 700;
            font-size: 24px;

            padding: 0 5px;
        }
    }
`

export default TimerContainer;

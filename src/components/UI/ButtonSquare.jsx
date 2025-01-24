import styled from "styled-components";
import {Link} from "gatsby";

const ButtonSquare = styled(Link)`
    display: inline-flex;
    padding: ${({padding}) => padding || "20px 40px"};
    justify-content: center;
    align-items: center;
    border: 1px solid #5FE931;
    border-radius: 9px;
    cursor: pointer;

    color: #FFF;
    font-size: 18px;
    font-weight: 700;

    &:hover {
        box-shadow: 0 0 20px rgba(95, 233, 49, 0.4);
    }

    @media (max-width: 768px) {
        padding: 15px 40px;
    }
`;

export default ButtonSquare;

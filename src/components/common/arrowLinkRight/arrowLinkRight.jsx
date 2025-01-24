import React from "react";
import { ArrowLinkRightStyles } from "./styled/arrowLinkRightStyles";
import arrowRightGreen from "../../../images/svg/arrow-right-green.svg";
import { Link } from "gatsby";

export const ArrowLinkRight = ({link}) => {
  return (
    <ArrowLinkRightStyles>
      <Link to={link || ''}>
        <img src={arrowRightGreen} alt={link} />
      </Link>
    </ArrowLinkRightStyles>
  );
};

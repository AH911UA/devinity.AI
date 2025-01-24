import React from "react";
import { PortfolioContainerBigComtainer } from "./styled/PortfolioContainerBigComtainer";
import { PortfolioItem } from "../PortfolioContainerItem/PortfolioItem";

export const PortfolioContainerBig = ({ portfolioData }) => {
  return (
    <PortfolioContainerBigComtainer>
      {portfolioData.map((item) => (
        <PortfolioItem item={item}/>
      ))}
    </PortfolioContainerBigComtainer>
  );
};

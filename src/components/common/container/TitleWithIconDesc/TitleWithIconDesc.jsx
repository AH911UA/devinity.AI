import React from "react";
import {
  IconWrapper,
  TextWrapper,
  TitleWithIconDescContainer,
} from "./styled/TitleWithIconDescContainer";

const TitleWithIconDesc = ({ text = "", tag = "", icon, link = "" }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <TitleWithIconDescContainer>
        <IconWrapper>
          <img src={icon} alt="" />
        </IconWrapper>
        <TextWrapper>
          <div className="main-text">{text}</div>
          <div className="tag-text">{tag}</div>
        </TextWrapper>
      </TitleWithIconDescContainer>
    </a>
  );
};

export default TitleWithIconDesc;

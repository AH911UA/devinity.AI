import React from "react";
import { ButtonsLineStyled } from "./styled/ButtonsLineStyled";
import Button, { ButtonEvent } from "../../../UI/Button";

export const ButtonsLine = ({ btns, isMobile }) => {
  if (!btns?.length) {
    return null;
  }

  return (
    <ButtonsLineStyled>
      {btns.map((btn, i) => (
        <ButtonEvent
          key={`${btn.link}-${btn.data}-${i}-${Date.now()}`}
          color={"#913EC8"}
          background={"rgba(0,0,0,0)"}
          $borderColor={"#913EC8"}
          widthMobile={"max-contnet"}
          height={isMobile && 47}
          padding={isMobile ? '10px' : ''}
          fontSize={isMobile ? '16px' : ''}
          gap={isMobile ? '14px' : ''}
          style={{
            cursor: "default",
            fontWeight: 100,
          }}
          whitespace={"nowrap"}
        >
          #{btn.data}
        </ButtonEvent>
      ))}
    </ButtonsLineStyled>
  );
};

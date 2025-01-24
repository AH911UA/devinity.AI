import React from "react";
import { InfoRowContainer, InfoRowItem } from "./styled/InfoRowContainer";
import Flag from "../../../Flag";
import iconCalendar from "../../../../images/svg/iconCalendar.svg";
import iconPerson from "../../../../images/svg/iconPerson.svg";

export const InfoRow = ({ item }) => {
  return (
    <InfoRowContainer>
      <InfoRowItem key={`portfolio-item-1`}>
        <Flag name={item?.country?.code} />
        <span className="text">{item.country.name}</span>
      </InfoRowItem>
      <InfoRowItem key={`portfolio-item-2`}>
        <img src={iconCalendar} alt={"Icon Calendar Devinity LLC"} />
        <span className="text">{item.time}</span>
      </InfoRowItem>
      <InfoRowItem key={`portfolio-item-3`}>
        <img src={iconPerson} alt={"Icon Person Devinity LLC"} />
        <span className="text">{item.members}</span>
      </InfoRowItem>
    </InfoRowContainer>
  );
};

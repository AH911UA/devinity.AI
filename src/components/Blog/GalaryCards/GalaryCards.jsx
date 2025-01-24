import React from "react";
import { Card } from "../../common/card/Card";
import { GalaryCardsStyled } from "./styled";

export const GalaryCards = ({ cards, columns }) => {
  if (!cards?.length) {
    return null;
  }

  return (
    <GalaryCardsStyled columns={columns}>
      {cards.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          tag={card.tag}
          title={card.title}
          desc={card.desc}
          link={card.link}
        />
      ))}
    </GalaryCardsStyled>
  );
};

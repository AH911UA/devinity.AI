import React from "react";
import { MoreBlogsStyled } from "./styled/MoreBlogsStyled";
import { CarouselCardComponent } from "../../common/carousel-card/CarouselCard";
import { GalaryCardsStyled } from "../GalaryCards/styled";
import { Card } from "../../common/card/Card";
import useIsMobile from "../../../hooks/useIsMobile";

export const MoreBlogs = ({ cardsSlides, cards }) => {
  const isMobile = useIsMobile();
  return (
    <MoreBlogsStyled>
      <h4>
        More <span>Blogs</span>
      </h4>
      {isMobile ? (
        <CarouselCardComponent slides={cardsSlides} />
      ) : (
        <GalaryCardsStyled
          className="only-desktop"
          columns={2}
          mw={"867px"}
          padding="30px 0 30px 0"
        >
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
      )}
    </MoreBlogsStyled>
  );
};

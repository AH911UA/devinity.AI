import React, { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { OurTeamsBlock } from "./styled/OurTeamsBlock";
import { useHomeData } from "../../hooks/query";
import Image from "../UI/Image";
import OurTeamsPosition from "../AboutUs/Our Teams/styled/OurTeamsPosition";
import H3 from "../UI/H3";

import iconLinkedin from "../../images/svg/brands/Linkedin_Silver.svg";

import "react-horizontal-scrolling-menu/dist/styles.css";

import styled from "styled-components";

export const ReactSlider = styled.div`

  .react-horizontal-scrolling-menu--scroll-container {
    justify-content: center;
    @media(max-width: 767px) {
      justify-content: flex-start;
    }
  }
`;

const OurTeamsSlider = ({ arrowLeftRef, arrowRightRef }) => {
  const { teams: teamsData } = useHomeData();
  const [idShowDescription, setIdShowDescription] = useState(null);

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
      <button
        onClick={() => scrollPrev()}
        style={{ display: "none" }}
        ref={arrowLeftRef}
        disabled={isFirstItemVisible}
      >
        back
      </button>
    );
  };

  const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
      <button
        onClick={() => scrollNext()}
        style={{ display: "none" }}
        ref={arrowRightRef}
        disabled={isLastItemVisible}
      >
        next
      </button>
    );
  };

  return (
    <ReactSlider>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        style={{
          margin: "auto",
          width: "max-content",
          display: "flex",
          justifyContent: "center",
          boxSize: "border-box",
        }}
      >
        {teamsData?.map((person, index) => (
          <OurTeamsBlock
            tabIndex={person?.id}
            key={person?.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 10px",
              height: "100%",
            }}
            onMouseOver={() => setIdShowDescription(index)}
            onMouseOut={() => setIdShowDescription(null)}
          >
            <div
              style={{
                width: "inherit",
                padding: "0 0 10px",
              }}
            >
              <OurTeamsPosition>{person?.position}</OurTeamsPosition>

              <h5>{person?.name}</h5>
              <div style={{ position: "relative" }}>
                <Image
                  filename={person?.image}
                  alt={person?.name}
                  style={{
                    objectPosition: "center",
                    height: 505,
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  styleImg={{
                    objectPosition: "center",
                    height: 505,
                    width: "100%",
                    objectFit: "cover",
                  }}
                  className={""}
                />
                <a
                  href={person?.linkedin}
                  target={"_blank"}
                  style={{
                    position: "absolute",
                    right: 9,
                    top: 11,
                  }}
                  rel="nofollow"
                >
                  <img src={iconLinkedin} alt={"Linkedin Brand Devinity LLC"} />
                </a>
                <H3
                  className={`${
                    index === idShowDescription ? "show" : "hidden"
                  }`}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "rgba(55, 26, 69, 0.60)",
                    color: "rgba(255, 255, 255, 0.81)",
                    WebkitTextStrokeWidth: "0.2px",
                    WebkitTextStrokeColor: "#371A45",
                    fontFamily: "DM Sans",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "168.5%",
                    padding: "10px",
                    margin: 0,
                    borderRadius: 8,
                  }}
                >
                  {person?.description}
                </H3>
              </div>
            </div>
          </OurTeamsBlock>
        ))}
      </ScrollMenu>
    </ReactSlider>
  );
};

export default OurTeamsSlider;

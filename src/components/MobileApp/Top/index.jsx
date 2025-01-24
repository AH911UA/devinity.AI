import React from "react";
import HeadingText from "../../UI/HeadingText";
import { useDispatch } from "react-redux";
import {
  updateShowCalculator,
  updateShowFeedback,
} from "../../../state/actions";
import { TopContainer } from "./styled";
import H3 from "../../UI/H3";
import Timer from "../../Timer";
import imagePlanetCut from "../../../images/planet-cut.png";
import imagePlanetFull from "../../../images/planet-full.png";
import imageConnector from "../../../images/svg/connector.svg";
import Button, { ButtonEvent } from "../../UI/Button";
import colors from "../../colors";
import TimerHorisontal from "../../UI/TimerHorisontal";

const Top = ({ title, description, technologies }) => {
  const dispatch = useDispatch();

  const technologiesSubArray = technologies.reduce(
    (acc, currentValue, index) => {
      if (index % 2 === 0) {
        acc.push([currentValue]);
      } else {
        acc[acc.length - 1].push(currentValue);
      }
      return acc;
    },
    []
  );

  return (
    <TopContainer>
      <div>
        <TimerHorisontal />
        <div>
          <div className={"information"}>
            <HeadingText padding={"0px"}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
            </HeadingText>

            <H3 dangerouslySetInnerHTML={{ __html: description }} />

            <div className={"options"}>
              <ul>
                <li>$22/hour development rate</li>
                <li>Fully European-based workforce</li>
                <li>Operating under U.S. jurisdiction</li>
              </ul>

              <ul>
                <li>Top 1% industry talent</li>
                <li>#1 price in the industry</li>
              </ul>
            </div>

            <div className="information-btns">
              <ButtonEvent
                color={colors.black}
                background={colors.green}
                onClick={() => dispatch(updateShowFeedback(true))}
              >
                Contact Now
              </ButtonEvent>

              <ButtonEvent
                color={colors.white}
                background={colors.transpetent}
                $borderColor={colors.green}
                onClick={() => dispatch(updateShowCalculator(true))}
              >
                Project Evaluation
              </ButtonEvent>

              {/* <a
                href={"https://wa.me/17868331118"}
                target={"_blank"}
                rel="nofollow"
              >
                <img
                  src={iconWhatsApp}
                  alt={"Icon WhatsApp Devinity LLC"}
                  style={{
                    width: "32px",
                    height: "30px",
                  }}
                />
              </a> */}
            </div>
          </div>

          <div>
            <Timer />
          </div>
        </div>

        <img
          className={"planet-full"}
          src={imagePlanetFull}
          alt={"Planet Green Devinity LLC"}
        />

        <img
          className={"planet-cut"}
          src={imagePlanetCut}
          alt={"Planet Green Devinity LLC"}
        />
      </div>

      <div className={"languages"}>
        <div>
          <div className={"options"}>
            {technologiesSubArray.map((subarray, index) => (
              <ul key={index}>
                {subarray.map((item, subIndex) => (
                  <li key={subIndex}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <img
          className={"rectangle-left"}
          src={imageConnector}
          alt={"Rectangle Left Devinity LLC"}
        />

        <img
          className={"rectangle-right"}
          src={imageConnector}
          alt={"Rectangle Right Devinity LLC"}
        />
      </div>
    </TopContainer>
  );
};

export default Top;

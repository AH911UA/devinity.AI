import React from "react";
import ButtonSquare from "../../UI/ButtonSquare";
import { AiIntegrationContainer } from "./styled";
import Image from "../../UI/Image";

import imagePlanetFull from "../../../images/planet-full.png";
import {useDispatch} from "react-redux";
import {updateShowCalculator} from "../../../state/actions";

const AiIntegration = ({
  title = "",
  description = "",
  subTitle = "",
  list = [],
  button = "",
  isWhatsApp = false,
}) => {
  const dispatch = useDispatch();

  const titleDefault = title
    ? title
    : "Boost Your App with Expert AI Integration";
  const descriptionDefault = description
    ? description
    : "Unlock the power of advanced models like ChatGPT, Mistral, Bing, Google, Facebook, and X (Twitter), seamlessly integrated into your platform. Plus, take advantage of AI APIs like HubSpot and Salesforce. With AI at the heart of your app, you can:";
  const subTitleDefault = subTitle
    ? subTitle
    : "Empower your app to exceed expectations and transform user experiences with our comprehensive AI integration solutions.";
  const listDefault =
    list.length > 0
      ? list
      : [
          "Offer seamless automated customer support.",
          "Boost security with automated fraud detection.",
          "Speed up investigations with automated forensics.",
          "Make informed decisions with accurate demand predictions.",
          "Personalize user experiences with smart content suggestions.",
          "Streamline content creation with AI-driven algorithms.",
          "Use advanced data analytics to gain actionable insights and optimize performance.",
        ];
  const buttonDefault = button ? button : "Integrate AI Now";

  return (
    <AiIntegrationContainer>
      <div>
        <div>
          <Image
            filename={"ai-integration.png"}
            alt={
              "Enhance Your App Capabilities With Our Expertise In AI Integration Development LLC"
            }
            style={{ maxWidth: 467 }}
            styleImg={{ maxWidth: 467 }}
          />
        </div>

        <div>
          <h3>{titleDefault}</h3>

          <p>{descriptionDefault}</p>

          <ul>
            {listDefault.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p>{subTitleDefault}</p>

          <div
            className={"button"}
            onClick={() => dispatch(updateShowCalculator(true))}
          >
            <ButtonSquare
              style={{ gap: 10 }}
            >
              {buttonDefault}
              {isWhatsApp && (
                <Image
                  filename={"whatsapp-icon.png"}
                  alt={"WhatsApp"}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              )}
            </ButtonSquare>
          </div>
        </div>
      </div>

      <img
        className={"planet-left"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />

      <img
        className={"planet-right"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />
    </AiIntegrationContainer>
  );
};

export default AiIntegration;

import React from "react";
import Label from "../../UI/Label";
import { CrossPlatformContainer, CrossPlatformItems } from "./styled";

import imagePlanetCut from "../../../images/planet-cut.png";
//import imageDifferent1 from "../../../images/mobile-page/different-1.png";
//import imageDifferent2 from "../../../images/mobile-page/different-2.png";
//import imageDifferent3 from "../../../images/mobile-page/different-3.png";
//import imageDifferent4 from "../../../images/mobile-page/different-4.png";
import Image from "../../UI/Image";
//import AiIntegration from "../AiIntegration";

const CrossPlatform = ({
  title,
  description,
  posts,
  isReverse,
  styleSubTitle,
  gap,
}) => {
  return (
    <CrossPlatformContainer>
      <div>
        <Label
          dangerouslySetInnerHTML={{ __html: title }}
          margin={"120px 0 10px"}
        />

        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <CrossPlatformItems
        isReverse={isReverse}
        gap={gap}
        styleSubTitle={styleSubTitle}
      >
        {posts?.map(({ title, description, image }) => (
          <div key={title}>
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: title }} />

              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            <div
              style={{
                flex: "1 1 0%",
              }}
            >
              <Image
                filename={image}
                alt={`${title} Development LLC`}
                style={{ maxWidth: 467 }}
                styleImg={{ maxWidth: 467 }}
              />
            </div>
          </div>
        ))}
      </CrossPlatformItems>

      <img
        src={imagePlanetCut}
        className={"planet-left"}
        alt={"Planet Green Devinity LLC"}
      />
      {/*<img*/}
      {/*  src={imagePlanetCut}*/}
      {/*  className={'planet-right'}*/}
      {/*/>*/}
    </CrossPlatformContainer>
  );
};

export default CrossPlatform;

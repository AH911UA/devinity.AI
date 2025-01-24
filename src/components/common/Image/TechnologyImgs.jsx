import React from "react";
import styled from "styled-components";
import apolloImg from "../../../images/portfolio/icons/apollo.png";
import awsImg from "../../../images/portfolio/icons/aws.png";
import dockerImg from "../../../images/portfolio/icons/docker.png";
import graphoImg from "../../../images/portfolio/icons/graph.png";
import logoReactNativeImg from "../../../images/portfolio/icons/logo-react-native.png";
import logoStyledComponentsImg from "../../../images/portfolio/icons/logo-styled-components.png";
import mongoImg from "../../../images/portfolio/icons/mongo.png";
import socialMediaImg from "../../../images/portfolio/icons/social_media.png";

export const technologyImgs = [
  logoReactNativeImg,
  logoStyledComponentsImg,
  dockerImg,
  socialMediaImg,
  mongoImg,
  awsImg,
  apolloImg,
  graphoImg,
];

export const TechnologyImgsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({isMobile}) => isMobile ? 'flex-start' : 'space-between'} ;
  flex-wrap: wrap;


  img {
    position: relative;
    top: 0;
    width: ${({ width, isMobile }) => (width && !isMobile ? width : "75px")};
    height: ${({ height, isMobile }) => (height && !isMobile ? height : "46px")};
    transition: 0.3s;

    &:hover {
      top: -8px;
      transform: scale(1.2);
    }
  }
`;

export const TechnologyImgs = ({ isMobile, width = "", height = "" }) => {
  return (
    <TechnologyImgsContainer width={width} height={height} isMobile={isMobile}>
      {(isMobile ? technologyImgs.slice(0, 3) : technologyImgs).map(
        (src, i) => (
          <div key={`TechnologyImgs-${src}`}>
            {" "}
            <img key={`portfolio-icons-${i}`} src={src} />{" "}
          </div>
        )
      )}
    </TechnologyImgsContainer>
  );
};

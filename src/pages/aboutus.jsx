import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import StarsBackground from "../components/UI/StarsBackground";
import GeneralContainer from "../components/UI/GeneralContainer";
import ContainerPadding from "../components/UI/ContainerPadding";
import Body from "../components/Body";
import Top from "../components/AboutUs/Top";
import AboutUsDescriptions from "../components/AboutUs/AboutUsDescriptions";
import OurTeams from "../components/AboutUs/Our Teams";

import imagePage from "../images/aboutUs.png";

const AboutUsPage = () => {
  return (
    <Body>
      <StarsBackground>
        <GeneralContainer>
          <ContainerPadding>
            <Top />

            <OurTeams />

            <AboutUsDescriptions />
          </ContainerPadding>
        </GeneralContainer>
      </StarsBackground>
    </Body>
  );
};

export default AboutUsPage;

export const Head = () => (
  <HeadCustom
    title={`About Us | Devinity LLC: Solutions Web, App, Blockchain, AI`}
    description={`Discover Devinity: Your premier partner in software solutions. From apps to AI, transform your online presence with us. Contact for innovative solutions.`}
    titleShort={`About Us | Devinity LLC`}
    type={`article`}
    url={`https://devinity.ai/aboutus/`}
    image={imagePage}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "About Us | Devinity LLC: Solutions Web, App, Blockchain, AI",
      "url": "https://devinity.ai/aboutus/",
      "description": "Discover Devinity: Your premier partner in software solutions. From apps to AI, transform your online presence with us. Contact for innovative solutions.",
      "image": "${imagePage}"
    }`}
  />
);

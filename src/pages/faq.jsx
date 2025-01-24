import React from "react";
import Body from "../components/Body";
import StarsBackground from "../components/UI/StarsBackground";
import GeneralContainer from "../components/UI/GeneralContainer";
import ContainerPadding from "../components/UI/ContainerPadding";
import { HeadCustom } from "../components/Header/HeadCustom";
import FAQ from "../components/FAQ";

import imagePage from "../images/faq_martian.png";

const FaqPage = () => {
  return (
    <Body>
      <StarsBackground>
        <GeneralContainer>
          <ContainerPadding>
            <FAQ/>
          </ContainerPadding>
        </GeneralContainer>
      </StarsBackground>
    </Body>
  )
}

export default FaqPage

export const Head = () => <HeadCustom
  title={`FAQs | Devinity LLC - Your Guide to Software Solutions`}
  description={`Devinity LLC FAQs: Explore insights on app, blockchain, AI, web design, and business automation, discovering our commitment to integrity and affordability.`}
  titleShort={`FAQ | Devinity LLC`}
  type={`website`}
  url={`https://devinity.ai/faq/`}
  image={imagePage}
  schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "FAQs | Devinity LLC - Your Guide to Software Solutions",
      "url": "https://devinity.ai/faq/",
      "description": "Devinity LLC FAQs: Explore insights on app, blockchain, AI, web design, and business automation, discovering our commitment to integrity and affordability.",
      "image": "${imagePage}"
    }`}
/>



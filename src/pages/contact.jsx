import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import GeneralContainer from "../components/UI/GeneralContainer";
import StarsBackground from "../components/UI/StarsBackground";
import Top from "../components/Contacts/Top";
import OurProjects from "../components/Contacts/Our Projects";
import ContainerPadding from "../components/UI/ContainerPadding";
import Form from "../components/UI/Form";

import imagePage from "../images/contacts_header.png";

const ContactPage = () => {

  return (
    <Body>
      <StarsBackground>
        <GeneralContainer>
          <ContainerPadding>

            <Top/>

            <Form/>

            <OurProjects/>

          </ContainerPadding>
        </GeneralContainer>
      </StarsBackground>
    </Body>
  )
}

export default ContactPage

export const Head = () => <HeadCustom
  title={`Contacts | Devinity LLC: Reach Out for Software Solutions`}
  description={`Contact Devinity for tailored software solutions in app, blockchain, AI, web design, game creation, and business automation. Start your transformative today.`}
  titleShort={`Contacts | Devinity LLC`}
  type={`website`}
  url={`https://devinity.ai/contact/`}
  image={imagePage}
  schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Contacts | Devinity LLC: Reach Out for Software Solutions",
      "url": "https://devinity.ai/contact/",
      "description": "Contact Devinity for tailored software solutions in app, blockchain, AI, web design, game creation, and business automation. Start your transformative today.",
      "image": "${imagePage}"
    }`}
/>

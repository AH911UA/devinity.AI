import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import { useHomeData } from "../hooks/query";
import Top from "../components/MobileApp/Top";
import AboutTechnology from "../components/MobileApp/AboutTechnology";
import Technologies from "../components/MobileApp/Technologies";
import OurProjects from "../components/MobileApp/OurProjects";
import CrossPlatform from "../components/MobileApp/CrossPlatform";
import EstimateSales from "../components/MobileApp/EstimateSales";
import ContactForm from "../components/MobileApp/ContactForm";
import DefaultBackground from "../components/UI/DefaultBackground";
import CreatingWebsite from "../components/MobileApp/CreatingWebsite";

import iconDesktop from "../images/svg/web-languages/desktop.svg";
import iconWeb from "../images/svg/web-languages/web.svg";
import iconGame from "../images/svg/web-languages/game.svg";
import iconIntelligence from "../images/svg/web-languages/intelligence.svg";
import iconServer from "../images/svg/web-languages/server.svg";
import iconBlockchain from "../images/svg/web-languages/blockchain.svg";
import iconMobile from "../images/svg/web-languages/mobile.svg";

import imageFestoWeb from "../images/portfolio/minimal/portfolio-festoweb.jpg";
import imageBoxing from "../images/portfolio/minimal/portfolio-boxing.jpg";
import imagePage from "../images/technologies/technologies_2.png";

const MobilePage = ({ id }) => {
  const { article: articleData } = useHomeData();

  const findData = articleData?.find((one) => one?.id == id);

  return (
    <Body colorBackground={"#0B0B0B"}>
      <DefaultBackground>
        <Top
          data={findData}
          title={`Web`}
          description={
            "Discover project timelines instantly with our quote calculator! Just follow a few easy steps in the interface and provide a brief project description at the end."
          }
          technologies={[
            "React.js",
            "Node.js",
            "Express.js",
            "Vue.js",
            "Nest.js",
            "Next.js",
            "Angular",
            "GraphQl",
            "Redux",
            "MobX",
            "WebSocket",
            "MongoDB",
            "MySQL",
            "Jest",
          ]}
        />

        <AboutTechnology
          subTitle="Hire the Best"
          subTitleBold="Talent in the Industry"
          title={`Websites`}
          description={`A website is a collection of web pages that are linked together and share a common domain name. Websites are typically created to provide information about a company, organization, or individual. They can also be used to sell products or services, share news and updates, or connect with others.`}
          image={"web-about-technology.png"}
        />

        <CrossPlatform
          title={`Parts of a <span>Website</span>`}
          description={`A website typically consists of the following parts:`}
          posts={[
            {
              title: `Homepage`,
              description: `The main page of a website, which typically provides an overview of the website's content and links to other pages.`,
              image: "web-page/different-1.png",
            },
            {
              title: `Web pages`,
              description: `Individual pages on a website that contain specific information or content.`,
              image: "web-page/different-2.png",
            },
            {
              title: `Hyperlinks`,
              description: `Links that allow users to navigate between different web pages and websites.`,
              image: "web-page/different-3.png",
            },
            {
              title: `Design`,
              description: `The visual appearance of a website, including its layout, colors, and fonts.`,
              image: "web-page/different-4.png",
            },
          ]}
        />

        <Technologies
          data={[
            {
              title: `Blockchain`,
              icon: iconBlockchain,
              description: 'Specializing in secure ledger technologies, we offer custom blockchain development for supply chain management and fintech solutions, enhancing transparency and efficiency.'
            },
            {
              title: `Web`,
              icon: iconWeb,
              description: 'We specialize in high-traffic websites, meticulously optimized for peak performance even under heavy load. Our designs feature rich animations that captivate, coupled with robust admin panels that put complete business management at your fingertips.'
            },
            {
              title: `Server`,
              icon: iconServer,
              description: 'We provide server solutions with advanced cloud integration and microservices architecture, enabling scalable and robust backend support for high-availability systems.'
            },
            {
              title: `Mobile`,
              icon: iconMobile,
              description: 'Specializing in secure ledger technologies, we offer custom blockchain development for supply chain management and fintech solutions, enhancing transparency and efficiency.'
            },
            {
              title: `Artificial Intelligence`,
              icon: iconIntelligence,
              description: 'We specialize in high-traffic websites, meticulously optimized for peak performance even under heavy load. Our designs feature rich animations that captivate, coupled with robust admin panels that put complete business management at your fingertips.'
            },
            {
              title: `Game`,
              icon: iconGame,
              description: 'We provide server solutions with advanced cloud integration and microservices architecture, enabling scalable and robust backend support for high-availability systems.'
            },
            {
              title: `Desktop`,
              icon: iconDesktop,
              description: 'Our mobile applications seamlessly integrate AI to enhance user experience and functionality, providing smart solutions and personalized interactions for users on the go.'
            },
          ]}
        />

        <CreatingWebsite />

        <EstimateSales />

        <OurProjects
          data={[
            {
              title: `Festo Web`,
              description: `The project was completed`,
              link: "/portfolio/2",
              image: imageFestoWeb,
            },
            {
              title: `Boxing Trainer`,
              description: `The project was completed`,
              link: "/portfolio/4",
              image: imageBoxing,
            },
          ]}
        />

        <ContactForm />
      </DefaultBackground>
    </Body>
  );
};

export default MobilePage;

export const Head = () => (
  <HeadCustom
    title={`Create your website with Devinity.AI we are experts websites`}
    description={`We give technology of website with Devinity. From corporate to blogs, we guide you through the process, offering expertise to elevate your online presence`}
    titleShort={`Website Development | Devinity LLC`}
    type={`website`}
    url={`https://devinity.ai/web/`}
    image={imagePage}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Create your website with Devinity.AI we are experts websites",
      "url": "https://devinity.ai/web/",
      "description": "We give technology of website with Devinity. From corporate to blogs, we guide you through the process, offering expertise to elevate your online presence",
      "image": "${imagePage}"
    }`}
  />
);

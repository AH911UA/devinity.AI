import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import { useHomeData } from "../hooks/query";
import Top from "../components/MobileApp/Top";
import TimeLine from "../components/TimeLine";
import AboutTechnology from "../components/MobileApp/AboutTechnology";
import Technologies from "../components/MobileApp/Technologies";
import OurProjects from "../components/MobileApp/OurProjects";
import CrossPlatform from "../components/MobileApp/CrossPlatform";
import EstimateSales from "../components/MobileApp/EstimateSales";
import ContactForm from "../components/MobileApp/ContactForm";
import DefaultBackground from "../components/UI/DefaultBackground";
import AiIntegration from "../components/MobileApp/AiIntegration";
import RequestACall from "../components/AI/RequestACall";

import iconBlockchain from "../images/desktop-page/blockchain.png";
import iconWeb from "../images/desktop-page/web.png";
import iconServer from "../images/desktop-page/server.png";
import iconMobile from "../images/desktop-page/mobile.png";
import iconAI from "../images/desktop-page/ai.png";
import iconGame from "../images/desktop-page/game.png";
import iconDesktop from "../images/desktop-page/desktop-tech.png";
import imageFestoWeb from "../images/portfolio/minimal/portfolio-festoweb.jpg";
import imageBoxing from "../images/portfolio/minimal/portfolio-boxing.jpg";
import imagePage from "../images/technologies/technologies_2.png";
import styled from "styled-components";

const Desktop = ({ id }) => {
  const { article: articleData } = useHomeData();

  const findData = articleData?.find((one) => one?.id == id);

  return (
    <Body colorBackground={"#0B0B0B"}>
      <DefaultBackground>
        <Top
          data={findData}
          title="Desktop Applications"
          description="Tailored desktop development. Developing custom business management applications for comprehensive functionality, similar to SAP, to streamline operations."
          technologies={[
            "Swift",
            "C#",
            "C++",
            "Python",
            "Java",
            "Electron Framwork",
          ]}
        />

        <AboutTechnology
          subTitle="About"
          subTitleBold="Technology"
          title="Desktop"
          description="Desktop applications have long been the cornerstone of enterprise IT, providing businesses with the tools they need to manage their operations effectively. These applications offer a range of benefits, including:<br/>
<ul>
<li>Improved Efficiency: Desktop applications can automate tasks, streamline workflows, and reduce manual data entry, leading to significant gains in productivity.</li>
<li>Enhanced Security: Desktop applications can be deployed on secure company networks, reducing the risk of data breaches and unauthorised access.</li>
<li>Tailored Integration: Desktop applications can be customised to meet the specific needs of each business.</li>
<li>Robust Scalability: Desktop applications can easily scale to accommodate the growth of a business.</li></ul>

As a result of these benefits, desktop applications are still widely used in many industries, including finance, healthcare, manufacturing, and retail. However, with the rise of cloud computing and web applications, some have questioned the continued relevance of desktop applications."
          image="desktop-page/desktop.png"
          maxHeight={318}
        />

        <TimeLine />

        <Technologies
          data={[
            {
              title: `Blockchain`,
              icon: iconBlockchain,
              description:
                "Specializing in secure ledger technologies, we offer custom blockchain development for supply chain management and fintech solutions, enhancing transparency and efficiency.",
            },
            {
              title: `Web`,
              icon: iconWeb,
              description:
                "We specialize in high-traffic websites, meticulously optimized for peak performance even under heavy load. Our designs feature rich animations that captivate, coupled with robust admin panels that put complete business management at your fingertips.",
            },
            {
              title: `Server`,
              icon: iconServer,
              description:
                "We provide server solutions with advanced cloud integration and microservices architecture, enabling scalable and robust backend support for high-availability systems.",
            },
            {
              title: `Mobile`,
              icon: iconMobile,
              description:
                "Specializing in secure ledger technologies, we offer custom blockchain development for supply chain management and fintech solutions, enhancing transparency and efficiency.",
            },
            {
              title: `Artificial Intelligence`,
              icon: iconAI,
              description:
                "We specialize in high-traffic websites, meticulously optimized for peak performance even under heavy load. Our designs feature rich animations that captivate, coupled with robust admin panels that put complete business management at your fingertips.",
            },
            {
              title: `Game`,
              icon: iconGame,
              description:
                "We provide server solutions with advanced cloud integration and microservices architecture, enabling scalable and robust backend support for high-availability systems.",
            },
            {
              title: `Desktop`,
              icon: iconDesktop,
              description:
                "Our  applications seamlessly integrate AI to enhance user experience and functionality, providing smart solutions and personalised interactions for users on the go.",
            },
          ]}
        />

        <CrossPlatform
          title={`Key <span>Examples</span> of Custom<br/>Desktop Applications`}
          description={`Here are some examples of how desktop applications can be used to streamline enterprise operations:`}
          isReverse
          posts={[
            {
              title: `Customer Relationship Management (CRM)`,
              description: `Desktop CRM applications help businesses manage customer interactions, track sales opportunities, and improve customer satisfaction.`,
              image: "desktop-page/crm.png",
            },
            {
              title: `Enterprise Resource Planning (ERP)`,
              description: `Desktop ERP applications provide a centralised platform for managing financial, supply chain, and human resources operations.`,
              image: "desktop-page/erp.png",
            },
            {
              title: `Project Management`,
              description: `Desktop project management applications help businesses plan, track, and manage their projects effectively.`,
              image: "desktop-page/pm.png",
            },
            {
              title: `Document Management`,
              description: `Desktop document management applications help businesses organise, store, and share documents securely.`,
              image: "desktop-page/dm.png",
            },
            {
              title: `Manufacturing`,
              description: `Desktop manufacturing applications help businesses manage production planning, scheduling, and quality control.`,
              image: "desktop-page/manufactoring.png",
            },
          ]}
        />
        <Notice>
          <p>
            These are just a few examples of how desktop applications can be
            used to improve efficiency and productivity in the workplace. As
            businesses continue to evolve, the demand for customized desktop
            applications is likely to grow.
          </p>
        </Notice>
        {/* <RequestACall
          title="Advantages over Cloud-Based & Web Applications"
          description="<ul><li><b>Offline Capabilities:</b> Desktop applications can be used offline, ensuring that businesses can continue to operate even if the internet is unavailable.</li>
<li><b>Data Privacy:</b> Desktop applications store data locally, which can provide an additional layer of security.</li>
<li><b>Reduced Latency:</b> Desktop applications offer faster response times and lower latency than cloud-based or web applications.</li>
<li><b>Control:</b> Businesses have more control over the deployment, maintenance, and security of desktop applications.</li></li>
"
          image="desktop-page/web-app.png"
          height={525}
        /> */}
        <AiIntegration />

        <EstimateSales withRequestBtn={false} />

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

export default Desktop;

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

export const Notice = styled.div`
  padding: 0 100px;

  > p {
    font-size: 24px;
    text-align: center;
    color: #fff;

    @media (max-width: 1100px) {
      font-size: 16px;
      margin-top: 50px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

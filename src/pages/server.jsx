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
import Solutions from "../components/Server/Solutions";

import iconCloud from "../images/server-page/cloud.png";
import iconServer from "../images/server-page/server.png";
import iconClient from "../images/server-page/thin-client.png";
import iconTrading from "../images/server-page/neutral-trading.png";
import iconBackup from "../images/server-page/data-backup.png";
import iconShrink from "../images/server-page/shrink.png";
import iconFirewall from "../images/server-page/cloud-firewall.png";
import imageFestoWeb from "../images/portfolio/minimal/portfolio-festoweb.jpg";
import imageBoxing from "../images/portfolio/minimal/portfolio-boxing.jpg";
import imagePage from "../images/technologies/technologies_2.png";
import BusinessImpact from "../components/Server/BusinessImpact";

const ServerPage = ({ id }) => {
  const { article: articleData } = useHomeData();

  const findData = articleData?.find((one) => one?.id == id);

  return (
    <Body colorBackground={"#0B0B0B"}>
      <DefaultBackground>
        <Top
          data={findData}
          title="Server"
          description="We provide server solutions with advanced cloud integration and micro-services architecture, enabling robust backend support for high-availability systems."
          technologies={[
            "Ruby",
            "Python",
            "Go (Golang)",
            "PHP",
            "Java (Node.js)",
            "React-Native",
          ]}
        />

        <AboutTechnology
          subTitle="About"
          subTitleBold="Technology"
          title="Servers: Microsoft vs. Linux"
          description="Server solutions play a critical role in modern infrastructure, much like mobile operating systems shape our daily digital interactions. 
<br/>
<b>Microsoft Windows Server</b>, akin to iOS, is crafted by Microsoft for server environments, known for its intuitive interface and seamless integration with Microsoft software like Active Directory and SharePoint.
<br/>
<b>Linux</b>, like Android, thrives on openness and versatility, favored for its robust customization options and cost-effectiveness, making it a popular choice for web servers and cloud computing. Choosing between them hinges on factors like integration needs, budget, and preference for open-source flexibility."
          image="server-page/linux-macos.png"
          maxHeight={565}
        />

        <TimeLine />

        <Technologies
          data={[
            {
              title: `Cloud Integration`,
              icon: iconCloud,
              description:
                "We provide seamless cloud integration services, enabling scalable and robust backend support for high-availability systems with advanced cloud infrastructure and management.",
            },
            {
              title: `Load Balancing`,
              icon: iconServer,
              description:
                "Our server solutions include sophisticated load balancing techniques to distribute network or application traffic across multiple servers, ensuring high performance and reliability.",
            },
            {
              title: `Microservices Architecture`,
              icon: iconClient,
              description:
                "We specialize in implementing microservices architecture, breaking down complex applications into smaller, manageable services for improved scalability, flexibility, and maintenance.",
            },
            {
              title: `Containerization`,
              icon: iconTrading,
              description:
                "Our expertise in containerization ensures that your applications run consistently across different computing environments, enhancing deployment speed and resource efficiency.",
            },
            {
              title: `High-Availability Systems`,
              icon: iconBackup,
              description:
                "We design and implement high-availability systems that guarantee continuous operation with minimal downtime, ensuring that your business remains operational under any circumstances.",
            },
            {
              title: `Scalability Solutions`,
              icon: iconShrink,
              description:
                "Our server solutions are tailored to ensure scalability, allowing your systems to grow and handle increasing loads seamlessly without compromising performance.",
            },
            {
              title: `Security & Compliance`,
              icon: iconFirewall,
              description:
                "We prioritize security and compliance in our server solutions, offering robust data protection measures and ensuring adherence to industry regulations and standards.",
            },
          ]}
        />

        <Solutions />

        <BusinessImpact />

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

export default ServerPage;

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

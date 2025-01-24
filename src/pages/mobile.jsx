import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import { useHomeData } from "../hooks/query";
import Top from "../components/MobileApp/Top";
import AboutTechnology from "../components/MobileApp/AboutTechnology";
import TimeLine from "../components/TimeLine";
import Technologies from "../components/MobileApp/Technologies";
import BuildExceptionalApps from "../components/MobileApp/BuildExceptionalApps";
import OurProjects from "../components/MobileApp/OurProjects";
import CrossPlatform from "../components/MobileApp/CrossPlatform";
import AiIntegration from "../components/MobileApp/AiIntegration";
import EstimateSales from "../components/MobileApp/EstimateSales";
import ContactForm from "../components/MobileApp/ContactForm";
import DefaultBackground from "../components/UI/DefaultBackground";
import VideoAI from "../components/MobileApp/VideoAI";

import iconSwift from "../images/svg/mobile-laguages/swift-svgrepo-com.svg";
import iconC from "../images/svg/mobile-laguages/objectivec-svgrepo-com.svg";
import iconCPlus from "../images/svg/mobile-laguages/icons8-c.svg";
import iconJava from "../images/svg/mobile-laguages/java-svgrepo-com.svg";
import iconKotlin from "../images/svg/mobile-laguages/kotlin-svgrepo-com.svg";
import iconReact from "../images/svg/mobile-laguages/react-svgrepo-com.svg";
import iconExpo from "../images/svg/mobile-laguages/expo-icon-svgrepo-com.svg";
import imageFestoApp from "../images/portfolio/minimal/festoApp.png";
import imageSample1 from "../images/portfolio/minimal/sample1.png";
import imagePage from "../images/technologies/technologies_4.png";
import Image from "../components/UI/Image";
import { CrossPlatformItems } from "../components/MobileApp/CrossPlatform/styled";
import { Button } from "react-scroll";
import ButtonSquare from "../components/UI/ButtonSquare";

const MobilePage = ({ id }) => {
  const { article: articleData } = useHomeData();

  const findData = articleData?.find((one) => one?.id == id);

  return (
    <Body colorBackground={"#0B0B0B"}>
      <DefaultBackground>
        <Top
          data={findData}
          title={`Mobile <span>Apps</span>`}
          description={
            "Our mobile apps use AI to enhance user experience and functionality, offering smart solutions and personalized interactions for users on the go."
          }
          technologies={[
            "Swift",
            "Objective-C",
            "Objective-C++",
            "Kotlin",
            "Java",
            "React-Native",
            "Expo",
          ]}
        />
        <CrossPlatform
          title={`Cross-Platform <span>Mobile</span> <br/> Development`}
          description={`Harness top 1% industry talent for your project!`}
          posts={[
            {
              title: `User Interface`,
              description: `We specialize in creating diverse mobile applications using the MERN stack, Objective-C, Objective-C++, Kotlin, and Swift. Our developers build cross-platform and hybrid apps that enable businesses to reach users on Windows, iOS, and Android with a <b>single, shared code base.</b>`,
              image: "mobile-page/different-1.png",
            },
            {
              title: `App Store Optimization`,
              description: `We specialize in <b>efficient</b> and <b>scalable</b> mobile app design, using frameworks like React Native to deliver high-performance applications across all platforms. Our expertise helps your app achieve top rankings in the App Store and Google Play Market.`,
              image: "mobile-page/different-2.png",
            },
            {
              title: `Security & Compliance`,
              description: `Our app development is built on stringent security and compliance measures. We adhere to key regulations like <b>PCI, GRC, HIPAA, FISMA</b>, and various financial services standards, ensuring every project meets its specific security requirements.`,
              image: "mobile-page/different-4.png",
            },
          ]}
        />

        <EstimateSales />

        <CrossPlatformItems isReverse>
          <div>
            <div>
              <h3
                dangerouslySetInnerHTML={{
                  __html: "Mobile App AI Integration",
                }}
              />

              <p
                dangerouslySetInnerHTML={{
                  __html: `Boost your mobile app with <b>AI integration</b> from Devinity.AI LLC. We add smart features to enhance performance and deliver personalized experiences, using our expertise in mobile development and AI. Let's innovate together and drive your startup's success in the smart mobility space.`,
                }}
              />
            </div>

            <div>
              <Image
                filename={"mobile-page/different-3.png"}
                alt={`Development LLC`}
                style={{ maxWidth: 467 }}
                styleImg={{ maxWidth: 467 }}
              />
            </div>
          </div>
        </CrossPlatformItems>
        <AiIntegration />
        <AboutTechnology
          title={`We Build Apps that Shock!`}
          description={`At Devinity.AI , we specialize in creating custom mobile apps that give your business a competitive edge. We understand the importance of getting to market quickly, so we deliver fast, high-quality services.
              <br/>
              <br/>
              Our experienced developers are skilled in both iOS and Android platforms. We don't just create apps – we thoroughly test and update them to ensure they run smoothly.
              <br/>
              <br/>
              With extensive industry experience, our team develops apps that are scalable, interoperable, and tailored to your specific needs. We're dedicated to your success, providing digital solutions that boost user engagement and drive growth.
              <br/>
              <br/>
              Partner with us to turn your vision into a powerful mobile presence.
            `}
          image={"mobile-about-technology.png"}
          isWhatsApp
        />

        <Button
          style={{
            width: "100vw",
            padding: "0 50px",
          }}
        >
          <ButtonSquare
            style={{
              width: "-webkit-fill-available",
            }}
          >
            Get Your App Now
          </ButtonSquare>
        </Button>

        <Technologies
          data={[
            {
              title: `Swift`,
              icon: iconSwift,
            },
            {
              title: `Objective C`,
              icon: iconC,
            },
            {
              title: `Objective C++`,
              icon: iconCPlus,
            },
            {
              title: `Java`,
              icon: iconJava,
            },
            {
              title: `Kotlin`,
              icon: iconKotlin,
            },
            {
              title: `React Native`,
              icon: iconReact,
            },
            {
              title: `Expo`,
              icon: iconExpo,
            },
          ]}
        />

        <TimeLine />

        <VideoAI isWhatsApp />
        <VideoAI type={"devinity"} isWhatsApp />

        <BuildExceptionalApps isWhatsApp />

        <OurProjects
          data={[
            {
              title: `Festo App`,
              description: `The project was completed`,
              link: "/portfolio/1",
              image: imageFestoApp,
            },
            {
              title: `MapsSDK project`,
              description: `The project is sample`,
              link: "/portfolio/5",
              image: imageSample1,
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
    title={`Innovative Mobile App Development | Devinity.AI LLC`}
    description={`Transform your vision with Devinity.AI LLC: High-performance mobile apps featuring AI integration and beautiful design for an exceptional user experience.`}
    titleShort={`Mobile App Development | Devinity LLC`}
    type={`website`}
    url={`https://devinity.ai/mobile/`}
    image={imagePage}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Innovative Mobile App Development | Devinity.AI LLC",
      "url": "https://devinity.ai/mobile/",
      "description": "Transform your vision with Devinity.AI LLC: High-performance mobile apps featuring AI integration and beautiful design for an exceptional user experience.",
      "image": "${imagePage}"
    }`}
  />
);

import React from "react";

// components
import GeneralContainer from "../../UI/GeneralContainer";
import HeadingText from "../../UI/HeadingText";
import Text from "../../UI/Text";
import { TechnologiesContainer } from "./styled/TechnologiesContainer";
import { TechnologiesList } from "./styled/TechnologiesList";
import { TechnologiesBlock } from "./styled/TechnologiesBlock";
import Image from "../../UI/Image";
import ContainerPadding from "../../UI/ContainerPadding";
import { Link } from "../../../../.cache/gatsby-browser-entry";

// images
import btn_point from "../../../images/svg/tehn-point-icon.svg";

const Technologies = ({ data }) => {
  const getShowDescription = (index) => {
    if (index === 0)
      return (
        <>
          We create beautiful, <span style={styles.subTitle}>functional</span>,
          modern and <span style={styles.subTitle}>fully customized</span>{" "}
          websites that <span style={styles.subTitle}>set you apart</span> from
          competition and strengthen your digital presence. Online shop, blog,
          admin panel or even custom CRM, we will deliver{" "}
          <span style={styles.subTitle}>top-notch quality</span> at a
          mouth-watering price point.
        </>
      );
    if (index === 1)
      return (
        <>
          We develop{" "}
          <span style={styles.subTitle}>scalable, cross-platform</span> and{" "}
          <span style={styles.subTitle}>market-ready</span> mobile applications
          that easily exceed all market expectations. Whether you’d like AI
          integrated, a complex financial system developed or something entirely
          novel crafted -{" "}
          <span style={styles.subTitle}>we’ve got it covered.</span>
        </>
      );
    if (index === 2)
      return (
        <>
          We leverage AI to streamline your business operations. We integrate AI
          into apps, websites, tools, and businesses to{" "}
          <span style={styles.subTitle}>automate processes</span> and{" "}
          <span style={styles.subTitle}>boost efficiency</span>. Our expertise
          in AI integration ensures{" "}
          <span style={styles.subTitle}>top-tier performance</span> and
          innovation.
        </>
      );
    if (index === 3)
      return (
        <>
          We deliver{" "}
          <span style={styles.subTitle}>powerful server solutions</span> with{" "}
          <span style={styles.subTitle}>seamless cloud integration</span> and
          advanced microservices architecture. Ensure your backend is scalable
          and robust for high-availability systems, setting you apart with{" "}
          <span style={styles.subTitle}>unmatched reliability</span> and{" "}
          <span style={styles.subTitle}>performance.</span>
        </>
      );
    if (index === 4)
      return (
        <>
          We harness blockchain for your new product. Creating{" "}
          <span style={styles.subTitle}>
            smart contracts, custom marketplaces,
          </span>{" "}
          cryptocurrencies, and NFTs, is our specialty. Our in-house blockchain
          expertise ensures <span style={styles.subTitle}>profitable</span> and{" "}
          <span style={styles.subTitle}>innovative solutions.</span>
        </>
      );
    if (index === 5)
      return (
        <>
          Whether a new SaaS product or an addition to your existing business,
          we develop{" "}
          <span style={styles.subTitle}>powerful desktop applications</span>{" "}
          tailored to your needs. Our software ensures high performance,
          seamless integration, and intuitive design,{" "}
          <span style={styles.subTitle}>
            bringing your vision to the desktop.
          </span>
        </>
      );
  };
  return (
    <ContainerPadding>
      <TechnologiesContainer>
        <GeneralContainer marginTop={"0"} id="services">
          <HeadingText paddingMobile={"25px 0 75px"}>Services</HeadingText>

          <TechnologiesList>
            {data?.length &&
              data?.map((one, index) => (
                <TechnologiesBlock
                  style={{
                    background: "#242124",
                    border: "1px solid #000000",
                    boxShadow: "7px 9px 12px 0px #000000",
                    padding: "23px 32px 23px 32px",
                  }}
                >
                  <Link
                    to={one?.url || one?.link}
                    style={{
                      position: "relative",
                    }}
                  >
                    <Image
                      filename={one?.image}
                      style={{ height: 130, width: "100%" }}
                    />

                    <p className={"label"}>{one?.title}</p>

                    <Text>{getShowDescription(index)}</Text>
                    <img
                      id="btn-point"
                      src={btn_point}
                      width="83px"
                      stroke="#fff"
                      fill="#fff"
                    />
                  </Link>
                </TechnologiesBlock>
              ))}
          </TechnologiesList>
        </GeneralContainer>
      </TechnologiesContainer>
    </ContainerPadding>
  );
};

export default Technologies;

export const styles = {
  subTitle: {
    color: "#FFD778",
    fontWeight: "700",
  },
};

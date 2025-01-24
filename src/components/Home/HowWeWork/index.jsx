import React from "react";
import Text from "../../UI/Text";
import { HowWeWorkContainer } from "./styled/HowWeWorkContainer";
import { HowWe_Label } from "./styled/HowWe_Label";
import HeadingText from "../../UI/HeadingText";
import Image from "../../UI/Image";
import ContainerPadding from "../../UI/ContainerPadding";
import useIsMobile from "../../../hooks/useIsMobile";

const HowWeWork = ({ data }) => {
  const isMobile = useIsMobile(999);
  const text = (index) => {
    if (index === 0)
      return (
        <Text style={styles.text}>
          Are you looking for <span style={styles.label}>top-tier</span> talent
          to join your team? Look no further! We will provide you with the{" "}
          <span style={styles.label}>best professionals</span> in the industry.
          <br />
          Have specific candidate requirements or need some advice? No problem,{" "}
          <span style={styles.label}>we handle it all for you.</span>
        </Text>
      );
    if (index === 1)
      return (
        <Text style={styles.text}>
          Sit back, relax and let us handle your project from A to Z. Our{" "}
          <span style={styles.label}>professional team</span> of developers,
          designers and an experienced, committed project manager will make sure
          that the project is completed{" "}
          <span style={styles.label}>promptly and smoothly.</span>
        </Text>
      );
    return (
      <Text style={styles.text}>
        After gathering all the necessary project information, we assemble a{" "}
        <span style={styles.label}>dedicated</span> team of developers
        specifically <span style={styles.label}>tailored</span> to your
        project's requirements. From that point forward, you have the
        flexibility to manage the team{" "}
        <span style={styles.label}>as you see fit.</span>
      </Text>
    );
  };

  return (
    <ContainerPadding>
      <HeadingText>Here’s How We Work</HeadingText>

      <HowWeWorkContainer
        style={{
          gap: 35,
        }}
      >
        {data?.length &&
          data?.map((one, index) => {
            return (
              <div
                style={{
                  maxWidth: isMobile? '100%' : 367,
                  padding: 20,
                  border: "1px solid #62ED2E80",
                  borderRadius: 10,
                  backgroundColor: "#202020",
                }}
              >
                <div>
                  <Image
                    filename={one?.image}
                    style={{
                      float: "right",
                      width: index !== 0 ? 97 : 77,
                      marginLeft: 1,
                    }}
                    styleImg={{}}
                  />
                  <HowWe_Label>{one.title}</HowWe_Label>
                </div>
                {text(index)}
              </div>
            );
          })}
      </HowWeWorkContainer>
    </ContainerPadding>
  );
};

export default HowWeWork;

const styles = {
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: "33px",
  },
  label: {
    color: "#FFD778",
    fontWeight: "700",
  },
};

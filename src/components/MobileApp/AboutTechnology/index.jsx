import React from "react";
import styled from "styled-components";
import ButtonSquare from "../../UI/ButtonSquare";

import fonts from "../../fonts";
import Image from "../../UI/Image";

const AboutTechnology = ({
  title,
  description,
  image,
  subTitle,
  subTitleBold,
  maxHeight = 450,
  isWhatsApp = false,
}) => {
  return (
    <AboutTechnologyContainer>
      <div>
        <h3>
          {subTitle} <span>{subTitleBold}</span>
        </h3>

        <h2 dangerouslySetInnerHTML={{ __html: title }} />

        <p dangerouslySetInnerHTML={{ __html: description }} />

        <div className={"button"}>
          <ButtonSquare
            href={process.env.GATSBY_WHATSAPP}
            target={"_blank"}
            style={{ gap: 10 }}
          >
            Request a Call
            {isWhatsApp && (
              <Image
                filename={"whatsapp-icon.png"}
                alt={"WhatsApp"}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            )}
          </ButtonSquare>
        </div>
      </div>

      <Image
        filename={image}
        alt={"Cross-Platform Mobile Development LLC"}
        style={{
          objectPosition: "center",
          maxWidth: "120%",
          maxHeight: "670px",
        }}
      />
    </AboutTechnologyContainer>
  );
};

export default AboutTechnology;

const AboutTechnologyContainer = styled.div`
  width: calc(100% - 200px);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 130px;
  padding: 100px 0 50px;

  > div {
    flex: 1;
    max-width: 610px;
  }

  > div:first-child {
    h3 {
      color: #fff;
      font-family: ${fonts.oxanium};
      font-size: 24px;
      font-weight: 700;
      line-height: 70px;

      margin: 0;

      span {
        color: #62ed2e;
      }
    }

    h2 {
      color: #fff;
      font-size: 40px;
      font-weight: 700;

      margin: 0 0 20px;
    }

    p {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 35px;

      br {
        display: block;
        content: "";
        margin-bottom: 25px;
      }
    }
  }

  > div:nth-child(2) {
    text-align: center;

    .gatsby-image-wrapper {
      min-width: 250px;
      min-height: 250px;
    }
  }

  @media (max-width: 1100px) {
    width: calc(100% - 40px);
    flex-direction: column-reverse;

    gap: 0;
    padding: 30px 20px;

    > div:first-child {
      h3 {
        font-size: 1em;
      }

      h2 {
        font-size: 25px;
      }

      p {
        font-size: 1em;
        line-height: 22px;
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";
import ButtonSquare from "../../UI/ButtonSquare";
import image from "../../../images/technologies/technologies_5.png";

const RequestACall = ({
  title,
  description,
  imageOther,
  height,
  styleTitle,
}) => (
  <Wrapper>
    <div>
      <h2
        style={{
          paddingRight: "110px",
          ...styleTitle,
        }}
      >
        {title ? title : "Devinity.AI is Your Top Choice When it Comes to AI!"}
      </h2>
      <p>
        {description
          ? description
          : "When it comes to AI solutions, Devinity.AI is your premier choice. Our name says it all—we excel in AI. Our portfolio is packed with complex AI projects that showcase our hands-on experience and expertise. With a team of in-house experts, we deliver top-notch, innovative solutions. Choose Devinity.AI for cutting-edge AI development that’s anything but ordinary."}
      </p>
      <div className={"button"}>
        <ButtonSquare href={process.env.GATSBY_WHATSAPP} target={"_blank"}>
          Request a Call
        </ButtonSquare>
      </div>
    </div>
    <ImageWrapper>
      <img src={imageOther || image} className={"planet-right"} />
    </ImageWrapper>
  </Wrapper>
);

export default RequestACall;

const Wrapper = styled.div`
  width: calc(100% - 200px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 200px 0 50px;

  > div {
    flex: 1;
  }
  > div:first-child {
    h2 {
      color: #fff;
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 20px;
    }

    p {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 35px;
    }
  }
  > div:nth-child(2) {
    text-align: center;
    .gatsby-image-wrapper {
      margin: 0 auto;
      min-width: 250px;
    }
  }
  @media (max-width: 1100px) {
    width: calc(100% - 40px);
    flex-direction: column-reverse;
    padding: 30px 20px;
    display: flex;

    > div:first-child {
      margin-bottom: 35px;
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

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 464px;

    @media (max-width: 1300px) {
      height: auto;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
